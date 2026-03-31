<script lang="ts">
	import { Dialog } from 'bits-ui';
	import type { Snippet } from 'svelte';
	import { cn } from '$lib/utils/cn.js';

	type Props = Dialog.TriggerProps & {
		class?: string;
		children?: Snippet;
	};

	let { class: className, children, ...restProps }: Props = $props();
</script>

<Dialog.Trigger class={cn(className)} {...restProps}>
	{@render children?.()}
</Dialog.Trigger>
