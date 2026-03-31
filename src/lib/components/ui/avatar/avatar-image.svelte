<script lang="ts">
	import type { HTMLImgAttributes } from 'svelte/elements';
	import { cn } from '$lib/utils/cn.js';

	type Props = HTMLImgAttributes & {
		class?: string;
	};

	let { class: className, ...restProps }: Props = $props();
</script>

<img class={cn('aspect-square h-full w-full', className)} {...restProps} />
