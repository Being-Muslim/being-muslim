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
	style="
		position: fixed; top: 0; left: 0; right: 0; z-index: 50;
		height: 64px;
		border-bottom: 1px solid {scrolled || mobileOpen ? 'rgba(44,62,44,0.08)' : 'transparent'};
		background: {scrolled || mobileOpen ? 'rgba(253,250,245,0.97)' : 'transparent'};
		backdrop-filter: {scrolled || mobileOpen ? 'blur(12px)' : 'none'};
		-webkit-backdrop-filter: {scrolled || mobileOpen ? 'blur(12px)' : 'none'};
		box-shadow: {scrolled || mobileOpen ? '0 1px 8px rgba(0,0,0,0.04)' : 'none'};
		transition: all 0.3s ease;
	"
>
	<nav style="max-width: 1400px; margin: 0 auto; display: flex; align-items: center; justify-content: space-between; height: 64px; padding: 0 24px;">
		<!-- Logo -->
		<a href="/d" style="display: flex; align-items: center; gap: 10px; text-decoration: none;">
			<img
				src="https://www.beingmuslim.org/wp-content/uploads/2022/01/tree-logo-inverse.png"
				alt="Being Muslim"
				style="height: 28px; width: 28px; {scrolled || mobileOpen ? 'filter: invert(1);' : ''} transition: filter 0.3s;"
			/>
			<span style="font-family: 'Newsreader', serif; font-size: 18px; font-weight: 500; color: {scrolled || mobileOpen ? '#2C3E2C' : '#2C3E2C'}; transition: color 0.3s;">
				Being Muslim
			</span>
		</a>

		<!-- Desktop Nav -->
		<div style="display: none; align-items: center; gap: 32px;" class="desktop-nav">
			{#each [
				{ label: 'Learn', href: '/d' },
				{ label: 'Convert', href: '/d' },
				{ label: 'Shop', href: '/d' },
				{ label: 'Community', href: '/d' },
				{ label: 'Support', href: '/d' }
			] as link}
				<a
					href={link.href}
					style="font-family: 'Albert Sans', sans-serif; font-size: 14px; font-weight: 450; color: {scrolled ? '#2C3E2C' : '#2C3E2C'}; text-decoration: none; transition: color 0.2s; opacity: 0.75;"
					onmouseenter={(e) => e.currentTarget.style.opacity = '1'}
					onmouseleave={(e) => e.currentTarget.style.opacity = '0.75'}
				>
					{link.label}
				</a>
			{/each}
		</div>

		<!-- Desktop CTA -->
		<a
			href="/d"
			class="desktop-nav"
			style="display: none; align-items: center; padding: 9px 22px; border-radius: 999px; background: #7A9E7E; color: #fff; font-family: 'Albert Sans', sans-serif; font-size: 13px; font-weight: 500; text-decoration: none; transition: all 0.2s;"
			onmouseenter={(e) => { e.currentTarget.style.background = '#6b8e6f'; e.currentTarget.style.boxShadow = '0 4px 16px rgba(122,158,126,0.3)'; }}
			onmouseleave={(e) => { e.currentTarget.style.background = '#7A9E7E'; e.currentTarget.style.boxShadow = 'none'; }}
		>
			Start Your Journey
		</a>

		<!-- Mobile Menu Button -->
		<button
			style="display: flex; align-items: center; justify-content: center; padding: 8px; border: none; background: none; cursor: pointer; color: #2C3E2C;"
			class="mobile-menu-btn"
			onclick={() => (mobileOpen = !mobileOpen)}
			aria-label="Toggle menu"
		>
			{#if mobileOpen}<X style="width: 24px; height: 24px;" />{:else}<Menu style="width: 24px; height: 24px;" />{/if}
		</button>
	</nav>

	<!-- Mobile Menu -->
	{#if mobileOpen}
		<div style="background: rgba(253,250,245,0.98); border-top: 1px solid rgba(44,62,44,0.06); padding: 16px 24px; box-shadow: 0 8px 24px rgba(0,0,0,0.06);" class="mobile-menu-panel">
			{#each [
				{ label: 'Learn', href: '/d' },
				{ label: 'Convert', href: '/d' },
				{ label: 'Shop', href: '/d' },
				{ label: 'Community', href: '/d' },
				{ label: 'Support', href: '/d' }
			] as link}
				<a
					href={link.href}
					style="display: block; padding: 10px 0; font-family: 'Albert Sans', sans-serif; font-size: 15px; font-weight: 500; color: #2C3E2C; text-decoration: none;"
					onclick={() => (mobileOpen = false)}
				>
					{link.label}
				</a>
			{/each}
			<a
				href="/d"
				style="display: block; margin-top: 12px; text-align: center; background: #7A9E7E; color: #fff; padding: 12px 24px; border-radius: 999px; font-family: 'Albert Sans', sans-serif; font-size: 14px; font-weight: 500; text-decoration: none;"
				onclick={() => (mobileOpen = false)}
			>
				Start Your Journey
			</a>
		</div>
	{/if}
</header>

<style>
	@media (min-width: 768px) {
		.desktop-nav {
			display: flex !important;
		}
		.mobile-menu-btn {
			display: none !important;
		}
	}
	@media (max-width: 767px) {
		.desktop-nav {
			display: none !important;
		}
	}
</style>
