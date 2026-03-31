/**
 * Prefixes an internal href with the concept's base path.
 * e.g. withPrefix('/b', '/articles') → '/b/articles'
 */
export function withPrefix(prefix: string, href: string): string {
	return `${prefix}${href}`;
}
