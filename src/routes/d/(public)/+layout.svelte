<script lang="ts">
	import type { Snippet } from 'svelte';
	import { beforeNavigate, afterNavigate } from '$app/navigation';
	import '../styles.css';
	import NavbarD from '../NavbarD.svelte';
	import FooterD from '../FooterD.svelte';
	let { children }: { children: Snippet } = $props();

	beforeNavigate(() => {
		document.documentElement.style.scrollBehavior = 'auto';
		window.scrollTo(0, 0);
	});

	afterNavigate(() => {
		window.scrollTo(0, 0);
		requestAnimationFrame(() => {
			document.documentElement.style.scrollBehavior = '';
		});
	});
</script>

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
	<link href="https://fonts.googleapis.com/css2?family=Albert+Sans:ital,wght@0,300..700;1,300..700&family=Newsreader:ital,opsz,wght@0,6..72,200..800;1,6..72,200..800&display=swap" rel="stylesheet" />
</svelte:head>

<div class="bm-root">
	<NavbarD />
	<main>{@render children()}</main>
	<FooterD />
</div>
