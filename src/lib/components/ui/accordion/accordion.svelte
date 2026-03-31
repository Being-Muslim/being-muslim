<script lang="ts">
	import { Accordion } from 'bits-ui';
	import type { Snippet } from 'svelte';
	import { cn } from '$lib/utils/cn.js';

	type Props = Accordion.RootProps & {
		class?: string;
		children?: Snippet;
	};

	let { class: className, children, ...restProps }: Props = $props();
</script>

<Accordion.Root class={cn(className)} {...restProps}>
	{@render children?.()}
</Accordion.Root>
