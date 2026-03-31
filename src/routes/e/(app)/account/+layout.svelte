<script lang="ts">
	import type { Snippet } from 'svelte';
	import { page } from '$app/state';
	import { withPrefix } from '$lib/data/utils.js';
	import {
		LayoutDashboard,
		BookOpen,
		ShoppingBag,
		Heart,
		User,
		Settings,
	} from 'lucide-svelte';

	let { children }: { children: Snippet } = $props();

	const p = (href: string) => withPrefix('/e', href);

	const sidebarLinks = [
		{ label: 'Dashboard', href: p('/account'), icon: LayoutDashboard },
		{ label: 'My Learning', href: p('/account/learning'), icon: BookOpen },
		{ label: 'Orders', href: p('/account/orders'), icon: ShoppingBag },
		{ label: 'Donations', href: p('/account/donations'), icon: Heart },
		{ label: 'Profile', href: p('/account/profile'), icon: User },
		{ label: 'Settings', href: p('/account/settings'), icon: Settings }
	];

	function isActive(href: string): boolean {
		return page.url.pathname === href;
	}
</script>

<div class="mx-auto max-w-[1200px] px-4 py-8 pt-28 sm:px-6 lg:px-8">
	<div class="flex flex-col gap-8 lg:flex-row">
		<!-- Sidebar -->
		<aside class="w-full shrink-0 lg:w-56">
			<nav class="glass-panel flex flex-row gap-1 overflow-x-auto p-2 lg:flex-col lg:overflow-x-visible">
				{#each sidebarLinks as link}
					{@const Icon = link.icon}
					<a
						href={link.href}
						class="flex items-center gap-2 whitespace-nowrap rounded-2xl px-3 py-2.5 text-sm transition-all {isActive(link.href)
							? 'bg-accent-primary/10 font-medium text-accent-primary'
							: 'text-text-secondary hover:bg-accent-primary/5 hover:text-text-primary'}"
					>
						<Icon class="h-4 w-4 shrink-0" />
						<span>{link.label}</span>
					</a>
				{/each}
			</nav>
		</aside>

		<!-- Main Content -->
		<div class="min-w-0 flex-1">
			{@render children()}
		</div>
	</div>
</div>
