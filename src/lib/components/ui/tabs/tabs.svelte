<script lang="ts">
	import { Tabs } from 'bits-ui';
	import type { Snippet } from 'svelte';
	import { cn } from '$lib/utils/cn.js';

	type Props = Tabs.RootProps & {
		class?: string;
		children?: Snippet;
	};

	let { class: className, children, ...restProps }: Props = $props();
</script>

<Tabs.Root class={cn(className)} {...restProps}>
	{@render children?.()}
</Tabs.Root>
