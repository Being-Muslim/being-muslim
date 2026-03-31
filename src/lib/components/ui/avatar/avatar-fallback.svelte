<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { HTMLAttributes } from 'svelte/elements';
	import { cn } from '$lib/utils/cn.js';

	type Props = HTMLAttributes<HTMLSpanElement> & {
		class?: string;
		children?: Snippet;
	};

	let { class: className, children, ...restProps }: Props = $props();
</script>

<span
	class={cn(
		'flex h-full w-full items-center justify-center rounded-full bg-muted text-sm font-medium',
		className
	)}
	{...restProps}
>
	{@render children?.()}
</span>
