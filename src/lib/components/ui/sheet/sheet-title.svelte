<script lang="ts">
	import { Dialog } from 'bits-ui';
	import type { Snippet } from 'svelte';
	import { cn } from '$lib/utils/cn.js';

	type Props = Dialog.TitleProps & {
		class?: string;
		children?: Snippet;
	};

	let { class: className, children, ...restProps }: Props = $props();
</script>

<Dialog.Title class={cn('text-lg font-semibold', className)} {...restProps}>
	{@render children?.()}
</Dialog.Title>
