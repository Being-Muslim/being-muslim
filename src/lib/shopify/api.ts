/**
 * High-level Shopify Storefront API functions.
 *
 * These wrap the raw GraphQL client and return clean, typed objects
 * with Shopify's edge/node structure flattened out.
 */

import { shopifyFetch } from './client.js';
import {
	PRODUCTS_QUERY,
	PRODUCT_BY_HANDLE_QUERY,
	CREATE_CART_MUTATION,
	ADD_TO_CART_MUTATION,
	GET_CART_QUERY,
	CREATE_CHECKOUT_MUTATION
} from './queries.js';

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export interface Money {
	amount: string;
	currencyCode: string;
}

export interface ProductImage {
	id: string;
	url: string;
	altText: string | null;
	width: number;
	height: number;
}

export interface ProductVariant {
	id: string;
	title: string;
	availableForSale: boolean;
	quantityAvailable: number | null;
	price: Money;
	compareAtPrice: Money | null;
	selectedOptions: Array<{ name: string; value: string }>;
}

export interface Product {
	id: string;
	title: string;
	description: string;
	descriptionHtml: string;
	handle: string;
	productType: string;
	tags: string[];
	images: ProductImage[];
	variants: ProductVariant[];
}

export interface CartLineItem {
	id: string;
	quantity: number;
	variantId: string;
	variantTitle: string;
	productTitle: string;
	productHandle: string;
	price: Money;
	imageUrl: string | null;
	imageAlt: string | null;
}

export interface Cart {
	id: string;
	checkoutUrl: string;
	totalQuantity: number;
	subtotalAmount: Money;
	totalAmount: Money;
	lines: CartLineItem[];
}

// ---------------------------------------------------------------------------
// Helpers — flatten Shopify's edges/nodes
// ---------------------------------------------------------------------------

interface ShopifyEdge<T> {
	node: T;
}

function flattenEdges<T>(connection: { edges: ShopifyEdge<T>[] }): T[] {
	return connection.edges.map((edge) => edge.node);
}

/** Map a raw Shopify product node to our Product type. */
function normalizeProduct(raw: Record<string, any>): Product {
	return {
		id: raw.id,
		title: raw.title,
		description: raw.description,
		descriptionHtml: raw.descriptionHtml,
		handle: raw.handle,
		productType: raw.productType,
		tags: raw.tags,
		images: flattenEdges(raw.images),
		variants: flattenEdges(raw.variants)
	};
}

/** Map a raw Shopify cart to our Cart type. */
function normalizeCart(raw: Record<string, any>): Cart {
	const lines: CartLineItem[] = flattenEdges(raw.lines).map((line: any) => {
		const merch = line.merchandise;
		const firstImage = merch.product?.images?.edges?.[0]?.node;
		return {
			id: line.id,
			quantity: line.quantity,
			variantId: merch.id,
			variantTitle: merch.title,
			productTitle: merch.product?.title ?? '',
			productHandle: merch.product?.handle ?? '',
			price: merch.price,
			imageUrl: firstImage?.url ?? null,
			imageAlt: firstImage?.altText ?? null
		};
	});

	return {
		id: raw.id,
		checkoutUrl: raw.checkoutUrl,
		totalQuantity: raw.totalQuantity,
		subtotalAmount: raw.cost.subtotalAmount,
		totalAmount: raw.cost.totalAmount,
		lines
	};
}

// ---------------------------------------------------------------------------
// Public API
// ---------------------------------------------------------------------------

/** Fetch all products from the storefront. */
export async function getProducts(first = 10): Promise<Product[]> {
	const data = await shopifyFetch<{ products: { edges: ShopifyEdge<any>[] } }>({
		query: PRODUCTS_QUERY,
		variables: { first }
	});

	return flattenEdges(data.products).map(normalizeProduct);
}

/** Fetch a single product by its URL handle. */
export async function getProductByHandle(handle: string): Promise<Product | null> {
	const data = await shopifyFetch<{ productByHandle: Record<string, any> | null }>({
		query: PRODUCT_BY_HANDLE_QUERY,
		variables: { handle }
	});

	return data.productByHandle ? normalizeProduct(data.productByHandle) : null;
}

/** Create an empty cart and return the full Cart object. */
export async function createCart(): Promise<Cart> {
	const data = await shopifyFetch<{
		cartCreate: { cart: Record<string, any>; userErrors: Array<{ message: string }> };
	}>({
		query: CREATE_CART_MUTATION,
		variables: { input: {} }
	});

	if (data.cartCreate.userErrors.length > 0) {
		const msgs = data.cartCreate.userErrors.map((e) => e.message).join('; ');
		throw new Error(`Shopify cartCreate failed: ${msgs}`);
	}

	return normalizeCart(data.cartCreate.cart);
}

/** Add a line item to an existing cart. */
export async function addToCart(
	cartId: string,
	variantId: string,
	quantity = 1
): Promise<Cart> {
	const data = await shopifyFetch<{
		cartLinesAdd: { cart: Record<string, any>; userErrors: Array<{ message: string }> };
	}>({
		query: ADD_TO_CART_MUTATION,
		variables: {
			cartId,
			lines: [{ merchandiseId: variantId, quantity }]
		}
	});

	if (data.cartLinesAdd.userErrors.length > 0) {
		const msgs = data.cartLinesAdd.userErrors.map((e) => e.message).join('; ');
		throw new Error(`Shopify cartLinesAdd failed: ${msgs}`);
	}

	return normalizeCart(data.cartLinesAdd.cart);
}

/** Fetch an existing cart by ID. Returns null if the cart has expired. */
export async function getCart(cartId: string): Promise<Cart | null> {
	const data = await shopifyFetch<{ cart: Record<string, any> | null }>({
		query: GET_CART_QUERY,
		variables: { cartId }
	});

	return data.cart ? normalizeCart(data.cart) : null;
}

/** Get the Shopify-hosted checkout URL for a cart. */
export async function getCheckoutUrl(cartId: string): Promise<string | null> {
	const data = await shopifyFetch<{ cart: { id: string; checkoutUrl: string } | null }>({
		query: CREATE_CHECKOUT_MUTATION,
		variables: { cartId }
	});

	return data.cart?.checkoutUrl ?? null;
}
