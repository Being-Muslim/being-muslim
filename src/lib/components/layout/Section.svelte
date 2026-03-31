<script lang="ts">
	import type { Snippet } from 'svelte';
	import { cn } from '$lib/utils/cn.js';

	let {
		class: className,
		children,
		id,
		dark = false,
		narrow = false,
		full = false
	}: {
		class?: string;
		children: Snippet;
		id?: string;
		dark?: boolean;
		narrow?: boolean;
		full?: boolean;
	} = $props();
</script>

<section
	{id}
	class={cn(
		'py-16 md:py-24',
		dark && 'bg-bg-dark text-text-cream',
		className
	)}
>
	<div
		class={cn(
			'mx-auto px-4 sm:px-6 lg:px-8',
			full ? 'max-w-[1440px]' : narrow ? 'max-w-3xl' : 'max-w-[1280px]'
		)}
	>
		{@render children()}
	</div>
</section>
