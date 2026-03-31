<script lang="ts">
	import { Search, Menu, X, ShoppingBag, User } from 'lucide-svelte';
	import { withPrefix } from '$lib/data/utils.js';
	import { navLinks } from '$lib/data/mock.js';

	const p = (href: string) => withPrefix('/c', href);

	let mobileOpen = $state(false);
	let searchQuery = $state('');
</script>

<nav class="sticky top-0 z-50 h-12 border-b border-[#E5E5EA] bg-white/80 backdrop-blur-xl">
	<div class="mx-auto flex h-full max-w-[1400px] items-center gap-3 px-4 sm:px-6">
		<!-- Logo -->
		<a href={p('/')} class="flex shrink-0 items-center gap-1.5">
			<span class="flex h-6 w-6 items-center justify-center rounded-full bg-[#007AFF]">
				<span class="text-[10px] font-bold text-white">BM</span>
			</span>
			<span class="hidden font-display text-sm font-bold text-[#1C1C1E] sm:block">Being Muslim</span>
		</a>

		<!-- Desktop nav links -->
		<div class="hidden items-center gap-0.5 md:flex">
			{#each navLinks as link}
				<a
					href={p(link.href)}
					class="rounded-[10px] px-3 py-1.5 text-[13px] font-medium text-[#8E8E93] transition-colors hover:bg-[#F2F2F7] hover:text-[#1C1C1E]"
				>
					{link.label}
				</a>
			{/each}
		</div>

		<!-- Search (always visible) -->
		<div class="relative ml-auto max-w-[240px] flex-1">
			<Search class="pointer-events-none absolute left-2.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-[#8E8E93]" />
			<input
				type="text"
				bind:value={searchQuery}
				placeholder="Search..."
				class="h-[30px] w-full rounded-[20px] bg-[#F2F2F7] pl-8 pr-3 text-[13px] text-[#1C1C1E] placeholder:text-[#8E8E93] focus:outline-none focus:ring-2 focus:ring-[#007AFF]/30"
			/>
		</div>

		<!-- Right actions -->
		<div class="flex items-center gap-0.5">
			<a href={p('/cart')} class="flex h-8 w-8 items-center justify-center rounded-[10px] text-[#8E8E93] transition-colors hover:bg-[#F2F2F7] hover:text-[#1C1C1E]">
				<ShoppingBag class="h-4 w-4" />
			</a>
			<a href={p('/login')} class="flex h-8 w-8 items-center justify-center rounded-[10px] text-[#8E8E93] transition-colors hover:bg-[#F2F2F7] hover:text-[#1C1C1E]">
				<User class="h-4 w-4" />
			</a>
			<button
				onclick={() => (mobileOpen = !mobileOpen)}
				class="flex h-8 w-8 items-center justify-center rounded-[10px] text-[#8E8E93] transition-colors hover:bg-[#F2F2F7] hover:text-[#1C1C1E] md:hidden"
				aria-label="Toggle menu"
			>
				{#if mobileOpen}
					<X class="h-4 w-4" />
				{:else}
					<Menu class="h-4 w-4" />
				{/if}
			</button>
		</div>
	</div>

	<!-- Mobile dropdown -->
	{#if mobileOpen}
		<div class="absolute left-0 right-0 top-12 border-b border-[#E5E5EA] bg-white/95 backdrop-blur-xl md:hidden">
			<div class="mx-auto max-w-[1400px] px-4 py-3">
				<div class="flex flex-col gap-0.5">
					{#each navLinks as link}
						<a
							href={p(link.href)}
							onclick={() => (mobileOpen = false)}
							class="rounded-[14px] px-4 py-2.5 text-sm font-medium text-[#8E8E93] transition-colors hover:bg-[#F2F2F7] hover:text-[#1C1C1E]"
						>
							{link.label}
						</a>
					{/each}
				</div>
			</div>
		</div>
	{/if}
</nav>
