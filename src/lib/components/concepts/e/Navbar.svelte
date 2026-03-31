<script lang="ts">
	import { navLinks } from '$lib/data/mock.js';
	import { withPrefix } from '$lib/data/utils.js';
	import { Search, ShoppingBag, Menu, X } from 'lucide-svelte';

	const p = (href: string) => withPrefix('/e', href);

	let mobileOpen = $state(false);
	let scrolled = $state(false);

	function handleScroll() {
		scrolled = window.scrollY > 20;
	}
</script>

<svelte:window onscroll={handleScroll} />

<!-- Floating Glass Pill Navbar -->
<header class="fixed top-0 left-0 right-0 z-50 mx-4 mt-3">
	<nav
		class="glass-panel mx-auto flex h-14 max-w-[1200px] items-center justify-between px-6 transition-all duration-300 {scrolled
			? 'shadow-lg'
			: ''}"
	>
		<!-- Logo -->
		<a href={p('/')} class="flex items-center gap-2.5">
			<div class="flex h-8 w-8 items-center justify-center rounded-full bg-accent-primary">
				<svg viewBox="0 0 24 24" class="h-4 w-4 text-white" fill="currentColor">
					<path
						d="M12 2L9 7l-5 1 3.5 3.5L7 17l5-2.5L17 17l-.5-5.5L20 8l-5-1L12 2z"
					/>
				</svg>
			</div>
			<span class="font-display text-lg font-semibold text-text-primary">Being Muslim</span>
		</a>

		<!-- Desktop Nav -->
		<div class="hidden items-center gap-1 md:flex">
			{#each navLinks as link}
				<a
					href={p(link.href)}
					class="rounded-full px-3.5 py-1.5 text-sm font-medium text-text-secondary transition-colors hover:bg-accent-primary/10 hover:text-accent-primary"
				>
					{link.label}
				</a>
			{/each}
		</div>

		<!-- Right Actions -->
		<div class="hidden items-center gap-2 md:flex">
			<button
				class="rounded-full p-2 text-text-secondary transition-colors hover:bg-accent-primary/10 hover:text-accent-primary"
				aria-label="Search"
			>
				<Search class="h-4 w-4" />
			</button>
			<a
				href={p('/cart')}
				class="relative rounded-full p-2 text-text-secondary transition-colors hover:bg-accent-primary/10 hover:text-accent-primary"
				aria-label="Cart"
			>
				<ShoppingBag class="h-4 w-4" />
				<span
					class="absolute -top-0.5 -right-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-accent-primary text-[10px] font-bold text-white"
					>2</span
				>
			</a>
			<a
				href={p('/login')}
				class="glow ml-2 rounded-full bg-accent-primary px-5 py-2 text-sm font-medium text-white transition-colors hover:bg-accent-hover"
			>
				Sign In
			</a>
		</div>

		<!-- Mobile Toggle -->
		<button
			class="rounded-full p-2 text-text-primary md:hidden"
			onclick={() => (mobileOpen = !mobileOpen)}
			aria-label="Menu"
		>
			{#if mobileOpen}<X class="h-5 w-5" />{:else}<Menu class="h-5 w-5" />{/if}
		</button>
	</nav>

	{#if mobileOpen}
		<div class="glass-panel mx-auto mt-2 max-w-[1200px] p-4 md:hidden">
			<div class="flex flex-col gap-1">
				{#each navLinks as link}
					<a
						href={p(link.href)}
						class="rounded-2xl px-4 py-2.5 text-sm font-medium text-text-primary transition-colors hover:bg-accent-primary/10"
						onclick={() => (mobileOpen = false)}
					>
						{link.label}
					</a>
				{/each}
				<hr class="my-2 border-border" />
				<a
					href={p('/login')}
					class="glow rounded-full bg-accent-primary px-4 py-2.5 text-center text-sm font-medium text-white transition-colors hover:bg-accent-hover"
					onclick={() => (mobileOpen = false)}
				>
					Sign In
				</a>
			</div>
		</div>
	{/if}
</header>
