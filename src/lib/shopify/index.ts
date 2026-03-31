/**
 * Shopify Storefront API integration layer.
 *
 * Re-exports everything for clean imports:
 *   import { getProducts, cartStore, type Product } from '$lib/shopify';
 */

// Client
export { shopifyFetch } from './client.js';

// GraphQL queries & mutations
export {
	PRODUCTS_QUERY,
	PRODUCT_BY_HANDLE_QUERY,
	CREATE_CART_MUTATION,
	ADD_TO_CART_MUTATION,
	GET_CART_QUERY,
	CREATE_CHECKOUT_MUTATION
} from './queries.js';

// High-level API functions and types
export {
	getProducts,
	getProductByHandle,
	createCart,
	addToCart,
	getCart,
	getCheckoutUrl,
	type Money,
	type ProductImage,
	type ProductVariant,
	type Product,
	type CartLineItem,
	type Cart
} from './api.js';

// Client-side cart store
export { cartStore } from './cart.svelte.js';
