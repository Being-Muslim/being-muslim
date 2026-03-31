/**
 * Shopify Storefront API client.
 *
 * Uses plain fetch — no external dependencies required.
 * Configure via VITE_SHOPIFY_STORE_DOMAIN and VITE_SHOPIFY_STOREFRONT_TOKEN
 * environment variables.
 */

interface ShopifyFetchOptions {
	query: string;
	variables?: Record<string, unknown>;
}

interface ShopifyResponse<T = unknown> {
	data: T;
	errors?: Array<{ message: string; locations?: Array<{ line: number; column: number }> }>;
}

const SHOPIFY_API_VERSION = '2024-01';

/** Returns the configured store domain, or throws if missing. */
function getDomain(): string {
	const domain = import.meta.env.VITE_SHOPIFY_STORE_DOMAIN;
	if (!domain) {
		throw new Error(
			'Missing VITE_SHOPIFY_STORE_DOMAIN. Set it in your .env file.'
		);
	}
	return domain;
}

/** Returns the configured Storefront access token, or throws if missing. */
function getToken(): string {
	const token = import.meta.env.VITE_SHOPIFY_STOREFRONT_TOKEN;
	if (!token) {
		throw new Error(
			'Missing VITE_SHOPIFY_STOREFRONT_TOKEN. Set it in your .env file.'
		);
	}
	return token;
}

/**
 * Execute a GraphQL request against the Shopify Storefront API.
 *
 * @param options.query   - GraphQL query or mutation string
 * @param options.variables - Optional variables for the query
 * @returns The `data` portion of the Shopify response
 * @throws On network errors or GraphQL errors returned by Shopify
 */
export async function shopifyFetch<T = unknown>(
	options: ShopifyFetchOptions
): Promise<T> {
	const domain = getDomain();
	const token = getToken();
	const endpoint = `https://${domain}/api/${SHOPIFY_API_VERSION}/graphql.json`;

	const response = await fetch(endpoint, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			'X-Shopify-Storefront-Access-Token': token
		},
		body: JSON.stringify({
			query: options.query,
			variables: options.variables ?? {}
		})
	});

	if (!response.ok) {
		throw new Error(
			`Shopify Storefront API error: ${response.status} ${response.statusText}`
		);
	}

	const json: ShopifyResponse<T> = await response.json();

	if (json.errors?.length) {
		const messages = json.errors.map((e) => e.message).join('; ');
		throw new Error(`Shopify GraphQL errors: ${messages}`);
	}

	return json.data;
}
