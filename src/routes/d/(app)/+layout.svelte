<script lang="ts">
	import '$lib/styles/concept-d.css';
	import type { Snippet } from 'svelte';
	import Navbar from '$lib/components/concepts/d/Navbar.svelte';
	import Footer from '$lib/components/concepts/d/Footer.svelte';

	let { children }: { children: Snippet } = $props();
</script>

<div class="concept-d min-h-screen">
	<Navbar />
	<main class="pt-16">{@render children()}</main>
	<Footer />
</div>
