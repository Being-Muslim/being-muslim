<script lang="ts">
	import { withPrefix } from '$lib/data/utils.js';
	import { products } from '$lib/data/mock.js';
	import { Star, ShoppingCart, Heart, BookOpen, ArrowRight, Package, Search } from 'lucide-svelte';

	const p = (href: string) => withPrefix('/e', href);

	const categories = ['All', 'Books', 'Boxed Sets', 'Cards', 'Digital'] as const;
	let activeCategory = $state<string>('All');
	let searchQuery = $state('');

	let filteredProducts = $derived(
		products.filter((prod) => {
			const matchesCategory = activeCategory === 'All' || prod.category === activeCategory;
			const matchesSearch = searchQuery === '' || prod.title.toLowerCase().includes(searchQuery.toLowerCase()) || prod.description.toLowerCase().includes(searchQuery.toLowerCase());
			return matchesCategory && matchesSearch;
		})
	);
</script>

<svelte:head>
	<title>Shop — Being Muslim</title>
	<meta name="description" content="Browse books, boxed sets, prayer cards, and digital resources to support your Islamic journey." />
</svelte:head>

<!-- Hero -->
<section class="flex items-center justify-center px-4 py-32 text-center">
	<div class="glass-panel mx-auto max-w-3xl p-10">
		<span class="inline-flex items-center gap-1.5 rounded-full bg-accent-gold/10 px-3 py-1 text-xs font-medium text-accent-gold">
			<Package class="h-3 w-3" /> Free shipping on orders over $50
		</span>
		<h1 class="mt-4 font-display text-4xl font-semibold text-text-primary sm:text-5xl">Shop</h1>
		<p class="mt-4 text-lg text-text-secondary">Beautifully crafted resources to nourish your Islamic journey — from bestselling books to prayer essentials.</p>
		<div class="relative mx-auto mt-8 max-w-lg">
			<Search class="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-text-secondary" />
			<input type="text" bind:value={searchQuery} placeholder="Search products..." class="h-12 w-full rounded-full border border-border bg-white/80 pl-12 pr-4 text-base text-text-primary placeholder:text-text-secondary/60 focus:border-accent-primary focus:outline-none focus:ring-2 focus:ring-accent-primary/20" />
		</div>
		<div class="mt-6 flex flex-wrap justify-center gap-2">
			{#each categories as category}
				<button onclick={() => (activeCategory = category)} class="glow rounded-full px-4 py-2 text-sm font-medium transition-all {activeCategory === category ? 'bg-accent-primary text-white' : 'border border-border text-text-secondary hover:text-text-primary'}">{category}</button>
			{/each}
		</div>
	</div>
</section>

<div class="relative -mt-1"><svg viewBox="0 0 1440 60" fill="none" class="w-full"><path d="M0 30C240 50 480 10 720 30C960 50 1200 10 1440 30V60H0V30Z" fill="currentColor" class="text-bg-primary/30" /></svg></div>

<!-- Products Grid -->
<section class="py-12 sm:py-16">
	<div class="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
		{#if filteredProducts.length === 0}
			<div class="glass-panel mx-auto max-w-md p-12 text-center">
				<Package class="mx-auto h-12 w-12 text-text-secondary/40" />
				<h3 class="mt-4 font-display text-xl font-semibold text-text-primary">No products found</h3>
				<p class="mt-2 text-text-secondary">Try adjusting your search or filter criteria.</p>
				<button class="glow mt-6 rounded-full border border-border px-5 py-2 text-sm font-medium text-text-primary" onclick={() => { activeCategory = 'All'; searchQuery = ''; }}>Clear Filters</button>
			</div>
		{:else}
			<div class="mx-auto grid max-w-4xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
				{#each filteredProducts as product, i}
					{#if i === 2}
						<div class="glass-panel flex flex-col items-center justify-center p-6 text-center sm:col-span-2 lg:col-span-1">
							<div class="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-accent-gold/15"><Heart class="h-6 w-6 text-accent-gold" /></div>
							<h3 class="font-display text-lg font-semibold text-text-primary">Sponsor a New Muslim</h3>
							<p class="mt-2 text-sm text-text-secondary">Gift a boxed set to someone beginning their Islamic journey.</p>
							<a href={p('/give')} class="mt-4 inline-flex items-center gap-1 text-sm font-medium text-accent-primary hover:underline">Learn more <ArrowRight class="h-4 w-4" /></a>
						</div>
					{/if}
					<a href={p('/shop/' + product.handle)} class="glass-panel glow group overflow-hidden transition-all">
						<div class="relative aspect-[4/3] bg-gradient-to-br from-accent-primary/10 to-accent-gold/10">
							<div class="flex h-full items-center justify-center"><BookOpen class="h-12 w-12 text-accent-primary/20" /></div>
							{#if product.badge}<div class="absolute left-3 top-3"><span class="rounded-full bg-accent-gold/90 px-2.5 py-0.5 text-xs font-medium text-white">{product.badge}</span></div>{/if}
							{#if !product.inStock}<div class="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm"><span class="rounded-full bg-black/70 px-3 py-1 text-sm font-medium text-white">Out of Stock</span></div>{/if}
						</div>
						<div class="p-5">
							<h3 class="font-display text-base font-semibold leading-snug text-text-primary group-hover:text-accent-primary">{product.title}</h3>
							<div class="mt-2 flex items-center gap-1.5">
								<div class="flex items-center gap-0.5">
									{#each Array(5) as _, idx}<Star class="h-3.5 w-3.5 {idx < Math.floor(product.rating) ? 'fill-accent-gold text-accent-gold' : 'text-border'}" />{/each}
								</div>
								<span class="text-xs text-text-secondary">{product.rating} ({product.reviewCount})</span>
							</div>
							<div class="mt-3 flex items-center gap-2">
								<span class="text-lg font-bold text-accent-primary">${product.price.toFixed(2)}</span>
								{#if product.compareAtPrice}<span class="text-sm text-text-secondary line-through">${product.compareAtPrice.toFixed(2)}</span>{/if}
							</div>
							<div class="mt-4">
								<button class="glow flex w-full items-center justify-center gap-2 rounded-full bg-accent-primary py-2.5 text-sm font-medium text-white" onclick={(e) => e.preventDefault()}>
									<ShoppingCart class="h-4 w-4" /> Add to Cart
								</button>
							</div>
						</div>
					</a>
				{/each}
			</div>
		{/if}
	</div>
</section>

<!-- SVG Wave -->
<div class="relative -mb-1"><svg viewBox="0 0 1440 60" fill="none" class="w-full"><path d="M0 30C240 50 480 10 720 30C960 50 1200 10 1440 30V60H0V30Z" fill="currentColor" class="text-white/20" /></svg></div>

<!-- Sponsor Banner -->
<section class="bg-[#1A2332] py-20 md:py-32">
	<div class="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
		<div class="glass-panel-dark flex flex-col items-center gap-8 p-8 sm:flex-row sm:p-12">
			<div class="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-accent-gold/20"><Heart class="h-10 w-10 text-accent-gold" /></div>
			<div class="flex-1 text-center sm:text-left">
				<h2 class="font-display text-2xl font-semibold text-white sm:text-3xl">Sponsor this for a new Muslim</h2>
				<p class="mt-2 text-white/70">Many new Muslims cannot afford the resources they need. Your sponsorship puts a complete Being Muslim boxed set in their hands.</p>
			</div>
			<a href={p('/give')} class="glow inline-flex shrink-0 items-center gap-2 rounded-full bg-accent-gold px-6 py-3 text-sm font-medium text-[#1A2332]">Sponsor Now <Heart class="h-4 w-4" /></a>
		</div>
	</div>
</section>
