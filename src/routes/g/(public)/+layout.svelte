<script lang="ts">
	import type { Snippet } from 'svelte';
	import { beforeNavigate, afterNavigate } from '$app/navigation';
	import '../styles.css';
	import NavbarG from '../NavbarG.svelte';
	import FooterG from '../FooterG.svelte';
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
	<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300..700;1,300..700&family=Manrope:wght@300..700&display=swap" rel="stylesheet" />
</svelte:head>

<div class="bm-root">
	<NavbarG />
	<main>{@render children()}</main>
	<FooterG />
</div>
