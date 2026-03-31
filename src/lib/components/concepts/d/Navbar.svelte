<script lang="ts">
	import { cn } from '$lib/utils/cn.js';
	import { navLinks } from '$lib/data/mock.js';
	import { withPrefix } from '$lib/data/utils.js';
	import { ShoppingBag, Menu, X } from 'lucide-svelte';

	const p = (href: string) => withPrefix('/d', href);

	let mobileOpen = $state(false);
	let scrolled = $state(false);

	function handleScroll() {
		scrolled = window.scrollY > 60;
	}
</script>

<svelte:window onscroll={handleScroll} />

<header
	class={cn(
		'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
		scrolled
			? 'h-10 bg-bg-primary/90 backdrop-blur-md border-b border-border'
			: 'h-16 bg-transparent'
	)}
>
	<nav
		class={cn(
			'mx-auto flex max-w-[1100px] items-center justify-between px-6 transition-all duration-500',
			scrolled ? 'h-10' : 'h-16'
		)}
	>
		<!-- Logo -->
		<a href={p('/')} class="font-display text-base font-light tracking-wide text-text-primary">
			Being Muslim
		</a>

		<!-- Desktop Nav -->
		<div class="hidden items-center gap-6 md:flex">
			{#each navLinks as link}
				<a
					href={p(link.href)}
					class={cn(
						'text-text-secondary transition-colors hover:text-accent-primary',
						scrolled ? 'text-xs' : 'text-sm'
					)}
				>
					{link.label}
				</a>
			{/each}
		</div>

		<!-- Right Actions -->
		<div class="hidden items-center gap-4 md:flex">
			<a
				href={p('/cart')}
				class="relative text-text-secondary transition-colors hover:text-text-primary"
				aria-label="Cart"
			>
				<ShoppingBag class={cn(scrolled ? 'h-4 w-4' : 'h-5 w-5')} />
				<span
					class="absolute -top-1.5 -right-1.5 flex h-3.5 w-3.5 items-center justify-center rounded-full bg-accent-primary text-[9px] font-bold text-bg-primary"
					>2</span
				>
			</a>
			<a
				href={p('/login')}
				class={cn(
					'rounded-sm border border-accent-primary text-accent-primary transition-colors hover:bg-accent-primary hover:text-bg-primary',
					scrolled ? 'px-3 py-1 text-xs' : 'px-4 py-1.5 text-sm'
				)}
			>
				Sign In
			</a>
		</div>

		<!-- Mobile Toggle -->
		<button
			class="text-text-primary md:hidden"
			onclick={() => (mobileOpen = !mobileOpen)}
			aria-label="Menu"
		>
			{#if mobileOpen}<X class="h-5 w-5" />{:else}<Menu class="h-5 w-5" />{/if}
		</button>
	</nav>

	<!-- Mobile Menu -->
	{#if mobileOpen}
		<div class="border-t border-border bg-bg-primary/95 backdrop-blur-md px-6 py-6 md:hidden">
			<div class="flex flex-col gap-1">
				{#each navLinks as link}
					<a
						href={p(link.href)}
						class="rounded-sm px-3 py-2.5 text-sm text-text-secondary hover:text-accent-primary"
						onclick={() => (mobileOpen = false)}
					>
						{link.label}
					</a>
				{/each}
				<hr class="bronze-rule my-3" />
				<div class="flex items-center gap-3">
					<a
						href={p('/cart')}
						class="rounded-sm border border-border px-4 py-2 text-sm text-text-secondary hover:text-text-primary"
						onclick={() => (mobileOpen = false)}
					>
						Cart (2)
					</a>
					<a
						href={p('/login')}
						class="rounded-sm border border-accent-primary px-4 py-2 text-sm text-accent-primary hover:bg-accent-primary hover:text-bg-primary"
						onclick={() => (mobileOpen = false)}
					>
						Sign In
					</a>
				</div>
			</div>
		</div>
	{/if}
</header>
