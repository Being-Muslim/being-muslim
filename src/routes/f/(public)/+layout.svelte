<script lang="ts">
	import type { Snippet } from 'svelte';
	import { Navbar, Footer } from '$lib/components/layout/index.js';
	import ChatWidget from '$lib/components/common/ChatWidget.svelte';

	let { children }: { children: Snippet } = $props();
</script>

<Navbar />
<main class="min-h-screen">
	{@render children()}
</main>
<Footer />
<ChatWidget />
