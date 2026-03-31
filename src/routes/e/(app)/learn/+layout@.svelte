<script lang="ts">
	import '$lib/styles/concept-e.css';
	import type { Snippet } from 'svelte';
	let { children }: { children: Snippet } = $props();
</script>

<div class="concept-e relative min-h-screen">
	<!-- Subtle gradient mesh for lesson player -->
	<div class="mesh-blob bg-[#6366F1] top-[-200px] right-[-200px] w-[400px] h-[400px] opacity-20"></div>
	<div class="mesh-blob bg-[#06B6D4] bottom-[100px] left-[-200px] w-[300px] h-[300px] opacity-20"></div>

	<div class="relative z-10">
		{@render children()}
	</div>
</div>
