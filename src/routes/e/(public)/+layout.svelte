<script lang="ts">
	import type { Snippet } from 'svelte';
	import '$lib/styles/concept-e.css';
	import Navbar from '$lib/components/concepts/e/Navbar.svelte';
	import Footer from '$lib/components/concepts/e/Footer.svelte';
	import ChatWidget from '$lib/components/common/ChatWidget.svelte';
	let { children }: { children: Snippet } = $props();
</script>

<div class="concept-e relative min-h-screen">
	<!-- Gradient mesh background -->
	<div class="mesh-blob bg-[#6366F1] top-[-100px] right-[-100px] w-[500px] h-[500px]"></div>
	<div class="mesh-blob bg-[#06B6D4] bottom-[200px] left-[-150px] w-[400px] h-[400px]"></div>
	<div class="mesh-blob bg-[#F59E0B] top-[50%] left-[40%] w-[300px] h-[300px]"></div>

	<div class="relative z-10">
		<Navbar />
		<main>{@render children()}</main>
		<Footer />
		<ChatWidget />
	</div>
</div>
