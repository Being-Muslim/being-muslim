<script lang="ts">
	import type { Snippet } from 'svelte';
	import { cn } from '$lib/utils/cn.js';
	import { badgeVariants, type Props } from './index.js';

	let {
		class: className,
		variant = 'default',
		children,
		...restProps
	}: Props & { children?: Snippet } = $props();
</script>

<span class={cn(badgeVariants({ variant }), className)} {...restProps}>
	{@render children?.()}
</span>
