<script lang="ts">
	import { Accordion } from 'bits-ui';
	import type { Snippet } from 'svelte';
	import { cn } from '$lib/utils/cn.js';
	import ChevronDown from 'lucide-svelte/icons/chevron-down';

	type Props = Accordion.TriggerProps & {
		class?: string;
		children?: Snippet;
	};

	let { class: className, children, ...restProps }: Props = $props();
</script>

<Accordion.Header>
	<Accordion.Trigger
		class={cn(
			'flex flex-1 items-center justify-between py-4 text-sm font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180',
			className
		)}
		{...restProps}
	>
		{@render children?.()}
		<ChevronDown class="h-4 w-4 shrink-0 transition-transform duration-200" />
	</Accordion.Trigger>
</Accordion.Header>
