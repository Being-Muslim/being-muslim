<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';
	import { cn } from '$lib/utils/cn.js';

	type Props = HTMLAttributes<HTMLDivElement> & {
		orientation?: 'horizontal' | 'vertical';
		class?: string;
	};

	let { orientation = 'horizontal', class: className, ...restProps }: Props = $props();
</script>

<div
	role="separator"
	aria-orientation={orientation}
	class={cn(
		'shrink-0 bg-border',
		orientation === 'horizontal' ? 'h-px w-full' : 'h-full w-px',
		className
	)}
	{...restProps}
></div>
