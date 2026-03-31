<script lang="ts">
	import { Menu, X } from 'lucide-svelte';

	let mobileOpen = $state(false);
	let scrolled = $state(false);

	function handleScroll() {
		scrolled = window.scrollY > 20;
	}
</script>

<svelte:window onscroll={handleScroll} />

<header
	class="fixed top-0 left-0 right-0 z-50 border-b transition-all duration-300 {scrolled
		? 'bg-white/95 backdrop-blur-md shadow-sm border-border'
		: 'bg-transparent border-transparent'}"
>
	<nav class="mx-auto flex h-[72px] max-w-[1400px] items-center justify-between px-6 lg:px-10">
		<!-- Logo -->
		<a href="/d" class="flex items-center gap-2.5">
			<img
				src="https://www.beingmuslim.org/wp-content/uploads/2022/01/tree-logo-inverse.png"
				alt="Being Muslim"
				class="h-8 w-8 {scrolled ? 'invert' : ''}"
				style="transition: filter 0.3s;"
			/>
			<span class="text-lg font-bold transition-colors font-display {scrolled ? 'text-text-primary' : 'text-white'}">
				Being Muslim
			</span>
		</a>

		<!-- Desktop Nav -->
		<div class="hidden items-center gap-8 md:flex">
			{#each [
				{ label: 'Home', href: '/b' },
				{ label: 'Learn', href: '/b/learn' },
				{ label: 'Convert', href: '/b/convert' },
				{ label: 'Shop', href: '/b/shop' },
				{ label: 'Support', href: '/b/support' }
			] as link}
				<a
					href={link.href}
					class="text-[14px] font-medium transition-colors {scrolled
						? 'text-text-secondary hover:text-text-primary'
						: 'text-white/80 hover:text-white'}"
				>
					{link.label}
				</a>
			{/each}
		</div>

		<!-- Desktop CTA -->
		<a
			href="/d/contact"
			class="hidden md:inline-flex items-center px-6 py-2.5 rounded-full text-[14px] font-medium transition-all {scrolled
				? 'bg-text-primary text-white hover:bg-black'
				: 'bg-white text-text-primary hover:bg-white/90'}"
		>
			Contact
		</a>

		<!-- Mobile Menu Button -->
		<button
			class="rounded-lg p-2 md:hidden {scrolled ? 'text-text-primary' : 'text-white'}"
			onclick={() => (mobileOpen = !mobileOpen)}
			aria-label="Toggle menu"
		>
			{#if mobileOpen}<X class="h-6 w-6" />{:else}<Menu class="h-6 w-6" />{/if}
		</button>
	</nav>

	{#if mobileOpen}
		<div class="md:hidden bg-white border-t border-border px-6 py-4 shadow-lg">
			{#each [
				{ label: 'Home', href: '/b' },
				{ label: 'Learn', href: '/b/learn' },
				{ label: 'Convert', href: '/b/convert' },
				{ label: 'Shop', href: '/b/shop' },
				{ label: 'Support', href: '/b/support' }
			] as link}
				<a href={link.href} class="block py-2.5 text-text-primary font-medium" onclick={() => (mobileOpen = false)}>{link.label}</a>
			{/each}
			<a href="/d/contact" class="block mt-3 text-center bg-text-primary text-white py-2.5 rounded-full font-medium">Contact</a>
		</div>
	{/if}
</header>
