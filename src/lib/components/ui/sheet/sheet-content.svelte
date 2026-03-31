<script lang="ts">
	import { Dialog } from 'bits-ui';
	import type { Snippet } from 'svelte';
	import { cn } from '$lib/utils/cn.js';
	import X from 'lucide-svelte/icons/x';

	type Props = Dialog.ContentProps & {
		side?: 'left' | 'right';
		class?: string;
		children?: Snippet;
	};

	let { side = 'right', class: className, children, ...restProps }: Props = $props();

	const sideClasses = {
		right: 'inset-y-0 right-0 h-full w-3/4 max-w-sm border-l',
		left: 'inset-y-0 left-0 h-full w-3/4 max-w-sm border-r'
	};
</script>

<Dialog.Portal>
	<Dialog.Overlay class="fixed inset-0 z-50 bg-black/50" />
	<Dialog.Content
		class={cn(
			'fixed z-50 gap-4 bg-background p-6 shadow-lg transition-transform',
			sideClasses[side],
			className
		)}
		{...restProps}
	>
		{@render children?.()}
		<Dialog.Close
			class="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none"
		>
			<X class="h-4 w-4" />
			<span class="sr-only">Close</span>
		</Dialog.Close>
	</Dialog.Content>
</Dialog.Portal>
