<script lang="ts">
	import { Tabs } from 'bits-ui';
	import type { Snippet } from 'svelte';
	import { cn } from '$lib/utils/cn.js';

	type Props = Tabs.ListProps & {
		class?: string;
		children?: Snippet;
	};

	let { class: className, children, ...restProps }: Props = $props();
</script>

<Tabs.List
	class={cn(
		'inline-flex h-10 items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground',
		className
	)}
	{...restProps}
>
	{@render children?.()}
</Tabs.List>
