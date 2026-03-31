<script lang="ts">
	import { Menu, X } from 'lucide-svelte';
	import { navLinks } from '$lib/data/mock';
	import { withPrefix } from '$lib/data/utils';

	const p = (href: string) => withPrefix('/b', href);

	let mobileOpen = $state(false);

	function toggleMobile() {
		mobileOpen = !mobileOpen;
	}

	function closeMobile() {
		mobileOpen = false;
	}
</script>

<!-- Static Navbar — scrolls with page, thick border bottom -->
<nav class="border-b-[3px] border-border bg-bg-primary">
	<div class="mx-auto flex max-w-[1200px] items-center justify-between px-6 py-4">
		<!-- Logo -->
		<a href={p('/')} class="font-display text-xl font-bold tracking-tight text-text-primary">
			BEING <span class="highlight">MUSLIM</span>
		</a>

		<!-- Desktop Nav Links — monospace uppercase -->
		<div class="hidden items-center gap-8 md:flex">
			{#each navLinks as link}
				<a
					href={p(link.href)}
					class="mono text-text-secondary transition-colors hover:text-text-primary"
				>
					{link.label}
				</a>
			{/each}
		</div>

		<!-- Desktop Auth -->
		<div class="hidden items-center gap-4 md:flex">
			<a
				href={p('/login')}
				class="mono text-text-secondary transition-colors hover:text-text-primary"
			>
				Login
			</a>
			<a
				href={p('/register')}
				class="border-[3px] border-border bg-accent-primary px-4 py-2 font-bold text-white transition-colors hover:bg-red-700"
			>
				Sign Up
			</a>
		</div>

		<!-- Mobile Menu Toggle -->
		<button
			onclick={toggleMobile}
			class="flex items-center justify-center md:hidden"
			aria-label="Toggle menu"
		>
			{#if mobileOpen}
				<X class="h-6 w-6" />
			{:else}
				<Menu class="h-6 w-6" />
			{/if}
		</button>
	</div>
</nav>

<!-- Full-screen black mobile overlay -->
{#if mobileOpen}
	<div class="fixed inset-0 z-50 flex flex-col bg-bg-dark md:hidden">
		<!-- Close button top-right -->
		<div class="flex justify-end px-6 py-5">
			<button onclick={closeMobile} aria-label="Close menu">
				<X class="h-8 w-8 text-white" />
			</button>
		</div>

		<!-- Huge stacked white text links -->
		<div class="flex flex-1 flex-col items-start justify-center gap-6 px-8">
			{#each navLinks as link}
				<a
					href={p(link.href)}
					onclick={closeMobile}
					class="font-display text-4xl font-bold text-white transition-colors hover:text-accent-gold"
				>
					{link.label}
				</a>
			{/each}

			<div class="mt-8 w-full border-t-[3px] border-white/20 pt-8">
				<a
					href={p('/login')}
					onclick={closeMobile}
					class="font-display text-2xl font-bold text-white/70 transition-colors hover:text-white"
				>
					Login
				</a>
			</div>
			<a
				href={p('/register')}
				onclick={closeMobile}
				class="border-[3px] border-white bg-accent-primary px-6 py-3 font-display text-xl font-bold text-white transition-colors hover:bg-red-700"
			>
				Sign Up
			</a>
		</div>
	</div>
{/if}
