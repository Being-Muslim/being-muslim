<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';
	import { cn } from '$lib/utils/cn.js';

	type Props = HTMLAttributes<HTMLDivElement> & {
		value?: number;
		max?: number;
		class?: string;
	};

	let { value = 0, max = 100, class: className, ...restProps }: Props = $props();

	let percentage = $derived(Math.min(Math.max((value / max) * 100, 0), 100));
</script>

<div
	role="progressbar"
	aria-valuemin={0}
	aria-valuemax={max}
	aria-valuenow={value}
	class={cn('relative h-2 w-full overflow-hidden rounded-full bg-secondary', className)}
	{...restProps}
>
	<div
		class="bg-primary rounded-full transition-all duration-300 absolute inset-y-0 left-0"
		style="width: {percentage}%"
	></div>
</div>
