<script lang="ts">
	import { Dialog } from 'bits-ui';
	import type { Snippet } from 'svelte';

	type Props = Dialog.RootProps & {
		children?: Snippet;
	};

	let { children, ...restProps }: Props = $props();
</script>

<Dialog.Root {...restProps}>
	{@render children?.()}
</Dialog.Root>
