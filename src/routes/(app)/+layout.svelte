<script lang="ts">
	import '../../app.css';
	import type { Snippet } from 'svelte';
	import { Navbar, Footer } from '$lib/components/layout/index.js';

	let { children }: { children: Snippet } = $props();
</script>

<Navbar />
<main class="min-h-screen pt-16">
	{@render children()}
</main>
<Footer />
