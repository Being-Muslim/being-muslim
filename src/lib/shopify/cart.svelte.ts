/**
 * Client-side cart store with localStorage persistence.
 *
 * Uses Svelte 5 runes ($state) for reactivity. The cart ID is persisted
 * in localStorage so carts survive page reloads (Shopify carts last ~10 days).
 *
 * Usage:
 *   import { cartStore } from '$lib/shopify';
 *   await cartStore.initCart();
 *   await cartStore.addItem(variantId, 1);
 *   const items = cartStore.items;
 *   const url = await cartStore.getCheckoutUrl();
 */

import {
	createCart,
	addToCart as apiAddToCart,
	getCart as apiGetCart,
	getCheckoutUrl as apiGetCheckoutUrl,
	type Cart,
	type CartLineItem
} from './api.js';

const CART_ID_KEY = 'being-muslim-cart-id';

/** Read the persisted cart ID from localStorage. */
function getStoredCartId(): string | null {
	if (typeof window === 'undefined') return null;
	try {
		return localStorage.getItem(CART_ID_KEY);
	} catch {
		return null;
	}
}

/** Save the cart ID to localStorage. */
function storeCartId(cartId: string): void {
	if (typeof window === 'undefined') return;
	try {
		localStorage.setItem(CART_ID_KEY, cartId);
	} catch {
		// localStorage may be unavailable (private browsing, etc.)
	}
}

/** Remove the cart ID from localStorage. */
function clearStoredCartId(): void {
	if (typeof window === 'undefined') return;
	try {
		localStorage.removeItem(CART_ID_KEY);
	} catch {
		// Silently ignore
	}
}

// ---------------------------------------------------------------------------
// Reactive state (Svelte 5 runes)
// ---------------------------------------------------------------------------

let cart = $state<Cart | null>(null);
let loading = $state(false);
let error = $state<string | null>(null);

// ---------------------------------------------------------------------------
// Cart store — exported as a single object for clean imports
// ---------------------------------------------------------------------------

export const cartStore = {
	/** The current cart object, or null if not initialized. */
	get cart(): Cart | null {
		return cart;
	},

	/** Current line items in the cart. */
	get items(): CartLineItem[] {
		return cart?.lines ?? [];
	},

	/** Total number of items in the cart. */
	get totalQuantity(): number {
		return cart?.totalQuantity ?? 0;
	},

	/** Whether a cart operation is in progress. */
	get loading(): boolean {
		return loading;
	},

	/** Last error message, or null. */
	get error(): string | null {
		return error;
	},

	/**
	 * Initialize the cart on app startup.
	 *
	 * Tries to restore an existing cart from localStorage. If the stored
	 * cart has expired (Shopify returns null), creates a fresh one.
	 */
	async initCart(): Promise<void> {
		loading = true;
		error = null;

		try {
			const storedId = getStoredCartId();

			if (storedId) {
				// Try to restore the existing cart
				const existingCart = await apiGetCart(storedId);
				if (existingCart) {
					cart = existingCart;
					return;
				}
				// Cart expired — clear stale ID and create a new one
				clearStoredCartId();
			}

			// Create a fresh cart
			const newCart = await createCart();
			cart = newCart;
			storeCartId(newCart.id);
		} catch (e) {
			error = e instanceof Error ? e.message : 'Failed to initialize cart';
			console.error('[shopify/cart] initCart error:', e);
		} finally {
			loading = false;
		}
	},

	/**
	 * Add a product variant to the cart.
	 *
	 * If no cart exists yet, one will be created automatically.
	 */
	async addItem(variantId: string, quantity = 1): Promise<void> {
		loading = true;
		error = null;

		try {
			// Ensure we have a cart
			if (!cart) {
				await this.initCart();
			}

			if (!cart) {
				throw new Error('Unable to create cart');
			}

			const updatedCart = await apiAddToCart(cart.id, variantId, quantity);
			cart = updatedCart;
		} catch (e) {
			error = e instanceof Error ? e.message : 'Failed to add item to cart';
			console.error('[shopify/cart] addItem error:', e);
		} finally {
			loading = false;
		}
	},

	/**
	 * Refresh the cart contents from Shopify.
	 *
	 * Useful after returning from checkout to see if items were purchased.
	 */
	async refresh(): Promise<void> {
		if (!cart) return;

		loading = true;
		error = null;

		try {
			const refreshedCart = await apiGetCart(cart.id);
			if (refreshedCart) {
				cart = refreshedCart;
			} else {
				// Cart expired — reset
				cart = null;
				clearStoredCartId();
			}
		} catch (e) {
			error = e instanceof Error ? e.message : 'Failed to refresh cart';
			console.error('[shopify/cart] refresh error:', e);
		} finally {
			loading = false;
		}
	},

	/**
	 * Get the Shopify-hosted checkout URL.
	 *
	 * Returns the URL string, or null if no cart exists.
	 */
	async getCheckoutUrl(): Promise<string | null> {
		if (!cart) return null;

		// The checkout URL is already on the cart object
		if (cart.checkoutUrl) {
			return cart.checkoutUrl;
		}

		// Fall back to fetching it explicitly
		try {
			return await apiGetCheckoutUrl(cart.id);
		} catch (e) {
			error = e instanceof Error ? e.message : 'Failed to get checkout URL';
			console.error('[shopify/cart] getCheckoutUrl error:', e);
			return null;
		}
	},

	/** Clear the cart and remove from localStorage. */
	reset(): void {
		cart = null;
		error = null;
		clearStoredCartId();
	}
};
