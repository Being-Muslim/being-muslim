<script lang="ts">
	import { cn } from '$lib/utils/cn.js';
	import { navLinks } from '$lib/data/mock.js';
	import { Button } from '$lib/components/ui/button/index.js';
	import { Menu, X, ShoppingBag, Search } from 'lucide-svelte';

	let { class: className }: { class?: string } = $props();

	let mobileOpen = $state(false);
	let scrolled = $state(false);

	function handleScroll() {
		scrolled = window.scrollY > 20;
	}
</script>

<svelte:window onscroll={handleScroll} />

<header
	class={cn(
		'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
		scrolled
			? 'bg-surface/95 backdrop-blur-md shadow-sm border-b border-border'
			: 'bg-transparent',
		className
	)}
>
	<nav class="mx-auto flex h-16 max-w-[1280px] items-center justify-between px-4 sm:px-6 lg:px-8">
		<!-- Logo -->
		<a href="/" class="flex items-center gap-2">
			<div class="flex h-9 w-9 items-center justify-center rounded-full bg-accent-primary">
				<svg viewBox="0 0 24 24" class="h-5 w-5 text-text-cream" fill="currentColor">
					<path d="M12 2C10.9 4.5 8 6 8 9c0 2 1 3.5 2.5 4.5C9.5 14 9 15 9 16.5c0 2 1.5 3.5 3 5.5 1.5-2 3-3.5 3-5.5 0-1.5-.5-2.5-1.5-3C14.9 12.5 16 11 16 9c0-3-2.9-4.5-4-7z" />
				</svg>
			</div>
			<span class={cn(
				'font-display text-lg font-bold transition-colors',
				scrolled ? 'text-text-primary' : 'text-text-cream'
			)}>Being Muslim</span>
		</a>

		<!-- Desktop Nav -->
		<div class="hidden items-center gap-1 md:flex">
			{#each navLinks as link}
				<a
					href={link.href}
					class={cn(
						'rounded-lg px-3 py-2 text-sm font-medium transition-colors hover:bg-white/10',
						scrolled
							? 'text-text-primary hover:bg-secondary'
							: 'text-text-cream/90 hover:text-text-cream'
					)}
				>
					{link.label}
				</a>
			{/each}
		</div>

		<!-- Desktop Actions -->
		<div class="hidden items-center gap-2 md:flex">
			<button
				class={cn(
					'rounded-lg p-2 transition-colors',
					scrolled
						? 'text-text-secondary hover:text-text-primary hover:bg-secondary'
						: 'text-text-cream/80 hover:text-text-cream hover:bg-white/10'
				)}
				aria-label="Search"
			>
				<Search class="h-5 w-5" />
			</button>
			<button
				class={cn(
					'relative rounded-lg p-2 transition-colors',
					scrolled
						? 'text-text-secondary hover:text-text-primary hover:bg-secondary'
						: 'text-text-cream/80 hover:text-text-cream hover:bg-white/10'
				)}
				aria-label="Cart"
			>
				<ShoppingBag class="h-5 w-5" />
				<span class="absolute -top-0.5 -right-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-accent-primary text-[10px] font-bold text-text-cream">
					2
				</span>
			</button>
			<Button variant="default" size="sm" class="ml-2">
				{#snippet children()}
					Sign In
				{/snippet}
			</Button>
		</div>

		<!-- Mobile Menu Button -->
		<button
			class={cn(
				'rounded-lg p-2 md:hidden',
				scrolled
					? 'text-text-primary hover:bg-secondary'
					: 'text-text-cream hover:bg-white/10'
			)}
			onclick={() => (mobileOpen = !mobileOpen)}
			aria-label="Toggle menu"
		>
			{#if mobileOpen}
				<X class="h-6 w-6" />
			{:else}
				<Menu class="h-6 w-6" />
			{/if}
		</button>
	</nav>

	<!-- Mobile Menu -->
	{#if mobileOpen}
		<div class="border-t border-border bg-surface p-4 shadow-lg md:hidden">
			<div class="flex flex-col gap-1">
				{#each navLinks as link}
					<a
						href={link.href}
						class="rounded-lg px-3 py-2.5 text-sm font-medium text-text-primary hover:bg-secondary"
						onclick={() => (mobileOpen = false)}
					>
						{link.label}
					</a>
				{/each}
				<hr class="my-2 border-border" />
				<div class="flex gap-2">
					<Button variant="outline" size="sm" class="flex-1">
						{#snippet children()}
							<Search class="mr-1 h-4 w-4" />
							Search
						{/snippet}
					</Button>
					<Button variant="outline" size="sm" class="flex-1">
						{#snippet children()}
							<ShoppingBag class="mr-1 h-4 w-4" />
							Cart (2)
						{/snippet}
					</Button>
				</div>
				<Button variant="default" size="default" class="mt-2 w-full">
					{#snippet children()}
						Sign In
					{/snippet}
				</Button>
			</div>
		</div>
	{/if}
</header>
