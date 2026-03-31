<script lang="ts">
	import { Section } from '$lib/components/layout/index.js';
	import { Button } from '$lib/components/ui/button/index.js';
	import { Badge } from '$lib/components/ui/badge/index.js';
	import { products } from '$lib/data/mock.js';
	import {
		Star,
		ShoppingCart,
		Heart,
		BookOpen,
		ArrowRight,
		Package
	} from 'lucide-svelte';

	const featured = products[0];
	const remaining = products.slice(1);
</script>

<svelte:head>
	<title>Shop — Being Muslim</title>
	<meta
		name="description"
		content="Browse books, boxed sets, prayer cards, and digital resources to support your Islamic journey."
	/>
</svelte:head>

<!-- ============================== -->
<!-- 1. FEATURED PRODUCT HERO       -->
<!-- ============================== -->
<section class="relative overflow-hidden bg-bg-dark">
	<!-- Background Pattern -->
	<div class="absolute inset-0 opacity-[0.03]">
		<svg class="h-full w-full" xmlns="http://www.w3.org/2000/svg">
			<defs>
				<pattern id="geo-g-shop" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
					<path
						d="M30 0L60 30L30 60L0 30Z"
						fill="none"
						stroke="currentColor"
						stroke-width="0.5"
						class="text-text-cream"
					/>
				</pattern>
			</defs>
			<rect width="100%" height="100%" fill="url(#geo-g-shop)" />
		</svg>
	</div>

	<div class="relative mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
		<div class="grid items-center gap-10 py-16 sm:py-20 lg:grid-cols-2 lg:gap-16 lg:py-24">
			<!-- Left: Text content -->
			<div>
				<Badge variant="gold">
					{#snippet children()}
						<Package class="mr-1 h-3 w-3" />
						Free shipping on orders over $50
					{/snippet}
				</Badge>
				<h1 class="mt-4 font-display text-3xl font-bold leading-tight text-text-cream sm:text-4xl lg:text-5xl">
					Shop
				</h1>
				<p class="mt-3 max-w-lg text-base text-text-cream/70 sm:text-lg">
					Beautifully crafted resources to support your Islamic journey.
				</p>

				<!-- Featured product inline -->
				<div class="mt-8 rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
					<div class="flex items-center gap-2">
						{#if featured.badge}
							<Badge variant="gold">
								{#snippet children()}{featured.badge}{/snippet}
							</Badge>
						{/if}
						<span class="flex items-center gap-0.5 text-xs text-accent-gold">
							<Star class="h-3 w-3 fill-current" />
							{featured.rating} ({featured.reviewCount} reviews)
						</span>
					</div>
					<h2 class="mt-3 font-display text-xl font-bold text-text-cream sm:text-2xl">
						{featured.title}
					</h2>
					<p class="mt-2 text-sm leading-relaxed text-text-cream/60 line-clamp-2">
						{featured.description}
					</p>
					<div class="mt-4 flex items-center gap-4">
						<span class="font-display text-2xl font-bold text-accent-gold">
							${featured.price.toFixed(2)}
						</span>
						<a href="/g/shop/{featured.handle}">
							<Button class="bg-accent-primary text-text-cream hover:bg-accent-hover">
								{#snippet children()}
									<ShoppingCart class="h-4 w-4" />
									Add to Cart
								{/snippet}
							</Button>
						</a>
					</div>
				</div>
			</div>

			<!-- Right: Large product visual -->
			<div class="hidden lg:block">
				<div class="aspect-[4/5] overflow-hidden rounded-2xl bg-gradient-to-br from-accent-primary/20 to-accent-gold/20">
					<div class="flex h-full flex-col items-center justify-center text-center">
						<BookOpen class="mb-6 h-20 w-20 text-accent-primary/30" />
						<p class="font-display text-3xl font-bold text-text-cream/20">Being Muslim</p>
						<p class="mt-1 text-text-cream/10">A Practical Guide</p>
					</div>
				</div>
			</div>
		</div>
	</div>

	<div class="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-bg-primary to-transparent"></div>
</section>

<!-- ============================== -->
<!-- 2. PRODUCTS — 2-column grid    -->
<!-- ============================== -->
<Section>
	<div class="flex items-end justify-between">
		<h2 class="font-display text-2xl font-bold sm:text-3xl">All Products</h2>
		<span class="text-sm text-text-secondary">{products.length} items</span>
	</div>

	<div class="mt-8 grid gap-4 sm:grid-cols-2">
		{#each remaining as product}
			<a href="/g/shop/{product.handle}" class="group">
				<div
					class="flex gap-5 overflow-hidden rounded-xl border border-border bg-surface p-4 transition-all duration-200 hover:border-accent-primary/30 hover:shadow-lg"
				>
					<!-- Compact image placeholder -->
					<div
						class="relative flex h-28 w-28 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-accent-primary/10 to-accent-gold/10 sm:h-32 sm:w-32"
					>
						<BookOpen class="h-8 w-8 text-accent-primary/30" />
						{#if product.badge}
							<div class="absolute left-1.5 top-1.5">
								<Badge variant="gold" class="text-[10px]">
									{#snippet children()}{product.badge}{/snippet}
								</Badge>
							</div>
						{/if}
					</div>

					<!-- Product info — inline, compact -->
					<div class="flex flex-1 flex-col justify-between py-0.5">
						<div>
							<h3 class="font-display text-base font-semibold leading-snug transition-colors group-hover:text-accent-primary">
								{product.title}
							</h3>
							<p class="mt-1 text-xs leading-relaxed text-text-secondary line-clamp-2">
								{product.description}
							</p>
						</div>

						<!-- Price + Rating row -->
						<div class="mt-2 flex items-center justify-between">
							<span class="font-display text-lg font-bold text-accent-primary">
								${product.price.toFixed(2)}
							</span>
							<div class="flex items-center gap-1">
								<div class="flex items-center gap-0.5">
									{#each Array(5) as _, idx}
										<Star
											class="h-3 w-3 {idx < Math.floor(product.rating)
												? 'fill-accent-gold text-accent-gold'
												: 'text-border'}"
										/>
									{/each}
								</div>
								<span class="text-[10px] text-text-secondary">
									({product.reviewCount})
								</span>
							</div>
						</div>
					</div>
				</div>
			</a>
		{/each}
	</div>
</Section>

<!-- ============================== -->
<!-- 3. SPONSOR CALLOUT             -->
<!-- ============================== -->
<section class="bg-bg-dark py-12 sm:py-16">
	<div class="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
		<div
			class="flex flex-col items-center gap-6 rounded-xl bg-gradient-to-r from-accent-primary/20 to-accent-gold/20 p-6 sm:flex-row sm:p-8"
		>
			<div class="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-accent-gold/20">
				<Heart class="h-7 w-7 text-accent-gold" />
			</div>
			<div class="flex-1 text-center sm:text-left">
				<h2 class="font-display text-xl font-bold text-text-cream sm:text-2xl">
					Sponsor this for a new Muslim
				</h2>
				<p class="mt-1 text-sm text-text-cream/60">
					Many new Muslims cannot afford the resources they need. Your sponsorship puts a complete
					boxed set in their hands.
				</p>
			</div>
			<a href="/g/give">
				<Button size="lg" class="shrink-0 bg-accent-gold text-bg-dark hover:bg-accent-gold/90">
					{#snippet children()}
						Sponsor Now
						<Heart class="h-4 w-4" />
					{/snippet}
				</Button>
			</a>
		</div>
	</div>
</section>
