<script lang="ts">
	import '$lib/styles/concept-d.css';
	import type { Snippet } from 'svelte';

	let { children }: { children: Snippet } = $props();
</script>

<div class="concept-d min-h-screen bg-bg-primary">
	{@render children()}
</div>
