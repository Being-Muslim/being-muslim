<script lang="ts">
	import { Section } from '$lib/components/layout/index.js';
	import { Button } from '$lib/components/ui/button/index.js';
	import { Badge } from '$lib/components/ui/badge/index.js';
	import { products } from '$lib/data/mock.js';
	import {
		Star,
		BookOpen,
		ArrowRight,
		Heart,
		ShoppingCart
	} from 'lucide-svelte';
</script>

<svelte:head>
	<title>Shop — Being Muslim</title>
	<meta
		name="description"
		content="Browse books, boxed sets, prayer cards, and digital resources to support your Islamic journey."
	/>
</svelte:head>

<!-- ============================== -->
<!-- 1. HEADING — Simple, no hero   -->
<!-- ============================== -->
<Section>
	<div class="mx-auto max-w-3xl text-center">
		<Badge variant="gold">
			{#snippet children()}Our Resources{/snippet}
		</Badge>
		<h1 class="mt-4 font-display text-4xl font-bold sm:text-5xl">Shop</h1>
		<p class="mx-auto mt-4 max-w-xl text-lg text-text-secondary">
			Beautifully crafted resources to support your Islamic journey — from bestselling books
			to prayer essentials.
		</p>
	</div>
</Section>

<!-- ============================== -->
<!-- 2. PRODUCT GRID — 3 columns    -->
<!-- ============================== -->
<Section class="bg-secondary/50">
	<div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
		{#each products as product}
			<a href="/f/shop/{product.handle}" class="group">
				<div class="flex h-full flex-col overflow-hidden rounded-xl border border-border bg-surface transition-all duration-200 hover:border-accent-primary/30 hover:shadow-lg">
					<!-- Image Placeholder -->
					<div class="relative aspect-[4/3] bg-gradient-to-br from-accent-primary/10 to-accent-gold/10">
						<div class="flex h-full items-center justify-center">
							<BookOpen class="h-12 w-12 text-accent-primary/30" />
						</div>
						{#if product.badge}
							<div class="absolute left-3 top-3">
								<Badge variant="gold">
									{#snippet children()}{product.badge}{/snippet}
								</Badge>
							</div>
						{/if}
					</div>

					<!-- Product Info -->
					<div class="flex flex-1 flex-col p-5">
						<h3 class="font-display text-lg font-semibold leading-snug transition-colors group-hover:text-accent-primary">
							{product.title}
						</h3>

						<p class="mt-2 flex-1 text-sm leading-relaxed text-text-secondary line-clamp-2">
							{product.description}
						</p>

						<!-- Price -->
						<div class="mt-4 flex items-center justify-between">
							<span class="font-display text-xl font-bold text-accent-primary">
								${product.price.toFixed(2)}
							</span>

							<!-- Rating Stars -->
							<div class="flex items-center gap-1.5">
								<div class="flex items-center gap-0.5">
									{#each Array(5) as _, idx}
										<Star
											class="h-3.5 w-3.5 {idx < Math.floor(product.rating)
												? 'fill-accent-gold text-accent-gold'
												: 'text-border'}"
										/>
									{/each}
								</div>
								<span class="text-xs text-text-secondary">
									{product.rating} ({product.reviewCount})
								</span>
							</div>
						</div>
					</div>
				</div>
			</a>
		{/each}
	</div>

	<div class="mt-10 text-center">
		<a href="/f/give">
			<Button variant="outline">
				{#snippet children()}
					Sponsor a Set for a New Muslim
					<Heart class="ml-1 h-4 w-4" />
				{/snippet}
			</Button>
		</a>
	</div>
</Section>

<!-- ============================== -->
<!-- 3. SPONSOR CALLOUT BANNER      -->
<!-- ============================== -->
<section class="bg-bg-dark py-16">
	<div class="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
		<div class="flex flex-col items-center gap-8 rounded-2xl bg-gradient-to-r from-accent-primary/20 to-accent-gold/20 p-8 sm:flex-row sm:p-12">
			<div class="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-accent-gold/20">
				<Heart class="h-10 w-10 text-accent-gold" />
			</div>
			<div class="flex-1 text-center sm:text-left">
				<h2 class="font-display text-2xl font-bold text-text-cream sm:text-3xl">
					Sponsor this for a new Muslim
				</h2>
				<p class="mt-2 text-text-cream/70">
					Many new Muslims cannot afford the resources they need. Your sponsorship puts a complete
					Being Muslim boxed set in their hands — a gift that transforms lives.
				</p>
			</div>
			<a href="/f/give">
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
