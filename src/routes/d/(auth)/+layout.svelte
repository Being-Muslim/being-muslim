<script lang="ts">
	import '$lib/styles/concept-d.css';
	import type { Snippet } from 'svelte';

	let { children }: { children: Snippet } = $props();
</script>

<div class="concept-d flex min-h-screen flex-col items-center justify-center bg-bg-primary px-4 py-12">
	<!-- Logo -->
	<a href="/d" class="mb-10 flex flex-col items-center gap-3">
		<span class="font-display text-3xl font-light text-text-primary">Being Muslim</span>
		<hr class="bronze-rule w-8" />
	</a>

	{@render children()}
</div>
