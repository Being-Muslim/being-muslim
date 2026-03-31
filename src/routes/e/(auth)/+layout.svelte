<script lang="ts">
	import '$lib/styles/concept-e.css';
	import type { Snippet } from 'svelte';
	let { children }: { children: Snippet } = $props();
</script>

<div class="concept-e relative flex min-h-screen flex-col items-center justify-center px-4 py-12">
	<!-- Gradient mesh background -->
	<div class="mesh-blob bg-[#6366F1] top-[-100px] right-[-100px] w-[500px] h-[500px]"></div>
	<div class="mesh-blob bg-[#06B6D4] bottom-[200px] left-[-150px] w-[400px] h-[400px]"></div>
	<div class="mesh-blob bg-[#F59E0B] top-[50%] left-[40%] w-[300px] h-[300px]"></div>

	<div class="relative z-10 flex flex-col items-center">
		<a href="/e" class="mb-8 flex items-center gap-2.5">
			<div class="flex h-10 w-10 items-center justify-center rounded-full bg-accent-primary">
				<svg viewBox="0 0 24 24" class="h-5 w-5 text-white" fill="currentColor">
					<path d="M12 2L9 7l-5 1 3.5 3.5L7 17l5-2.5L17 17l-.5-5.5L20 8l-5-1L12 2z" />
				</svg>
			</div>
			<span class="font-display text-xl font-semibold text-text-primary">Being Muslim</span>
		</a>
		{@render children()}
	</div>
</div>
