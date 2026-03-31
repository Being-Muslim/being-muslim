<script lang="ts">
	import { Accordion } from 'bits-ui';
	import type { Snippet } from 'svelte';
	import { cn } from '$lib/utils/cn.js';

	type Props = Accordion.ItemProps & {
		class?: string;
		children?: Snippet;
	};

	let { class: className, children, ...restProps }: Props = $props();
</script>

<Accordion.Item class={cn('border-b border-border', className)} {...restProps}>
	{@render children?.()}
</Accordion.Item>
