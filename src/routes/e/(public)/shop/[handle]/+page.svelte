<script lang="ts">
	import { withPrefix } from '$lib/data/utils.js';
	import { products, type Product } from '$lib/data/mock.js';
	import { Star, ShoppingCart, Heart, BookOpen, Minus, Plus, Check, ChevronLeft, ArrowRight, Truck, Shield, RotateCcw } from 'lucide-svelte';

	const p = (href: string) => withPrefix('/e', href);

	let { data } = $props();
	let product: Product = $derived(data.product);

	let quantity = $state(1);
	let selectedImageIndex = $state(0);
	let sponsorOption = $state(false);

	function decrementQty() { if (quantity > 1) quantity--; }
	function incrementQty() { if (quantity < 10) quantity++; }

	const features = [
		'Beautifully designed with full-color illustrations',
		'Written by acclaimed Islamic educator Dr. Asad Tarsin',
		'Practical guidance for daily Muslim life',
		'Covers the five pillars, prayer, fasting, and more',
		'Suitable for new Muslims and those reconnecting with faith',
		'Available in multiple languages'
	];

	const reviews = [
		{ id: 1, name: 'Aminah R.', rating: 5, date: 'January 15, 2026', text: 'This book changed my life. As a new Muslim, I was overwhelmed with information. Being Muslim organized everything beautifully.', verified: true },
		{ id: 2, name: 'Omar K.', rating: 5, date: 'January 3, 2026', text: 'I bought this for my wife who recently converted. The prayer section is especially helpful — clear and non-judgmental.', verified: true },
		{ id: 3, name: 'Sarah M.', rating: 4, date: 'December 20, 2025', text: 'Great resource for beginners. The writing is warm and accessible. Best introductory book I have found.', verified: true },
		{ id: 4, name: 'Ibrahim J.', rating: 5, date: 'December 8, 2025', text: 'I have been Muslim my whole life but bought this to understand what new converts experience. Beautiful book inside and out.', verified: false }
	];

	const averageRating = reviews.reduce((acc, r) => acc + r.rating, 0) / reviews.length;
	const relatedProducts = products.filter((pr) => pr.handle !== product.handle).slice(0, 3);
</script>

<svelte:head>
	<title>{product.title} — Being Muslim Shop</title>
	<meta name="description" content={product.description} />
</svelte:head>

<!-- Breadcrumb -->
<div class="px-4 pt-24 pb-4">
	<div class="mx-auto max-w-[1200px]">
		<nav class="flex items-center gap-2 text-sm text-text-secondary">
			<a href={p('/shop')} class="inline-flex items-center gap-1 transition-colors hover:text-accent-primary"><ChevronLeft class="h-4 w-4" />Back to Shop</a>
			<span>/</span>
			<span class="text-text-primary">{product.title}</span>
		</nav>
	</div>
</div>

<!-- Product Detail -->
<section class="py-12 sm:py-16">
	<div class="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
		<div class="grid gap-10 lg:grid-cols-2 lg:gap-16">
			<!-- Image Gallery -->
			<div>
				<div class="glass-panel aspect-square overflow-hidden">
					<div class="flex h-full flex-col items-center justify-center bg-gradient-to-br from-accent-primary/10 to-accent-gold/10 text-center">
						<BookOpen class="h-24 w-24 text-accent-primary/20" />
						<p class="mt-4 font-display text-lg font-semibold text-accent-primary/30">Product Image</p>
					</div>
				</div>
				<div class="mt-4 flex gap-3">
					{#each [0, 1, 2, 3] as idx}
						<button onclick={() => (selectedImageIndex = idx)} class="glass-panel aspect-square w-20 overflow-hidden transition-all {selectedImageIndex === idx ? 'ring-2 ring-accent-primary' : ''}">
							<div class="flex h-full items-center justify-center bg-gradient-to-br from-accent-primary/5 to-accent-gold/5"><BookOpen class="h-6 w-6 text-accent-primary/15" /></div>
						</button>
					{/each}
				</div>
			</div>

			<!-- Product Details -->
			<div>
				<div class="flex items-center gap-2">
					{#if product.badge}<span class="rounded-full bg-accent-gold/10 px-3 py-1 text-xs font-medium text-accent-gold">{product.badge}</span>{/if}
					<span class="rounded-full bg-accent-primary/10 px-2.5 py-0.5 text-xs font-medium text-accent-primary">{product.category}</span>
				</div>
				<h1 class="mt-4 font-display text-3xl font-semibold text-text-primary sm:text-4xl">{product.title}</h1>
				<div class="mt-3 flex items-center gap-3">
					<div class="flex items-center gap-0.5">{#each Array(5) as _, idx}<Star class="h-5 w-5 {idx < Math.floor(product.rating) ? 'fill-accent-gold text-accent-gold' : 'text-border'}" />{/each}</div>
					<span class="text-sm font-medium text-text-primary">{product.rating}</span>
					<a href="#reviews" class="text-sm text-text-secondary hover:text-accent-primary hover:underline">({product.reviewCount} reviews)</a>
				</div>
				<div class="mt-4 flex items-baseline gap-3">
					<span class="font-display text-3xl font-bold text-accent-primary">${product.price.toFixed(2)}</span>
					{#if product.compareAtPrice}
						<span class="text-lg text-text-secondary line-through">${product.compareAtPrice.toFixed(2)}</span>
						<span class="rounded-full bg-accent-primary/10 px-2 py-0.5 text-xs font-medium text-accent-primary">Save ${(product.compareAtPrice - product.price).toFixed(2)}</span>
					{/if}
				</div>
				<p class="mt-6 text-base leading-relaxed text-text-secondary">{product.description}</p>

				<hr class="my-6 border-border" />

				<div class="flex flex-col gap-4 sm:flex-row sm:items-center">
					<div class="flex items-center gap-1">
						<span class="mr-3 text-sm font-medium text-text-primary">Quantity</span>
						<button onclick={decrementQty} disabled={quantity <= 1} class="glow flex h-10 w-10 items-center justify-center rounded-full border border-border bg-white/80 disabled:opacity-40" aria-label="Decrease"><Minus class="h-4 w-4" /></button>
						<span class="flex h-10 w-12 items-center justify-center rounded-full border border-border bg-white/80 text-sm font-semibold text-text-primary">{quantity}</span>
						<button onclick={incrementQty} disabled={quantity >= 10} class="glow flex h-10 w-10 items-center justify-center rounded-full border border-border bg-white/80 disabled:opacity-40" aria-label="Increase"><Plus class="h-4 w-4" /></button>
					</div>
				</div>

				<div class="mt-6 flex flex-col gap-3 sm:flex-row">
					<button disabled={!product.inStock} class="glow flex flex-1 items-center justify-center gap-2 rounded-full bg-accent-primary py-3 text-sm font-medium text-white disabled:opacity-50">
						<ShoppingCart class="h-5 w-5" /> {product.inStock ? 'Add to Cart' : 'Out of Stock'}
					</button>
				</div>

				<button onclick={() => (sponsorOption = !sponsorOption)} class="glass-panel glow mt-4 flex w-full items-center gap-3 p-4 text-left transition-all {sponsorOption ? 'ring-2 ring-accent-gold' : ''}">
					<div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full {sponsorOption ? 'bg-accent-gold text-white' : 'bg-accent-gold/15 text-accent-gold'}"><Heart class="h-5 w-5" /></div>
					<div class="flex-1">
						<p class="text-sm font-semibold text-text-primary">Sponsor this for a new Muslim</p>
						<p class="text-xs text-text-secondary">Add ${product.price.toFixed(2)} to send this to someone beginning their journey</p>
					</div>
					<div class="flex h-5 w-5 items-center justify-center rounded-full border-2 {sponsorOption ? 'border-accent-gold bg-accent-gold' : 'border-border'}">
						{#if sponsorOption}<Check class="h-3 w-3 text-white" />{/if}
					</div>
				</button>

				<hr class="my-6 border-border" />

				<div class="grid grid-cols-3 gap-4">
					<div class="flex flex-col items-center text-center"><Truck class="h-5 w-5 text-accent-primary" /><span class="mt-1.5 text-xs text-text-secondary">Free Shipping</span></div>
					<div class="flex flex-col items-center text-center"><Shield class="h-5 w-5 text-accent-primary" /><span class="mt-1.5 text-xs text-text-secondary">Secure Checkout</span></div>
					<div class="flex flex-col items-center text-center"><RotateCcw class="h-5 w-5 text-accent-primary" /><span class="mt-1.5 text-xs text-text-secondary">30-Day Returns</span></div>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- SVG Wave -->
<div class="relative -mb-1"><svg viewBox="0 0 1440 60" fill="none" class="w-full"><path d="M0 30C240 50 480 10 720 30C960 50 1200 10 1440 30V60H0V30Z" fill="currentColor" class="text-white/20" /></svg></div>

<!-- Product Features -->
<section class="py-20 md:py-32">
	<div class="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
		<h2 class="font-display text-2xl font-semibold text-text-primary sm:text-3xl">Product Features</h2>
		<ul class="mt-8 space-y-4">
			{#each features as feature}
				<li class="flex items-start gap-3">
					<div class="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent-primary/15"><Check class="h-3 w-3 text-accent-primary" /></div>
					<span class="text-text-secondary">{feature}</span>
				</li>
			{/each}
		</ul>
	</div>
</section>

<!-- Reviews -->
<section id="reviews" class="py-20 md:py-32">
	<div class="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
		<div class="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
			<div>
				<h2 class="font-display text-2xl font-semibold text-text-primary sm:text-3xl">Customer Reviews</h2>
				<div class="mt-2 flex items-center gap-3">
					<div class="flex items-center gap-0.5">{#each Array(5) as _, idx}<Star class="h-5 w-5 {idx < Math.floor(averageRating) ? 'fill-accent-gold text-accent-gold' : 'text-border'}" />{/each}</div>
					<span class="text-sm text-text-secondary">Based on {product.reviewCount} reviews</span>
				</div>
			</div>
			<button class="glow rounded-full border border-border px-5 py-2 text-sm font-medium text-text-primary">Write a Review</button>
		</div>
		<div class="mt-8 space-y-6">
			{#each reviews as review}
				<div class="glass-panel p-6">
					<div class="flex items-start justify-between">
						<div>
							<div class="flex items-center gap-2">
								<span class="font-semibold text-text-primary">{review.name}</span>
								{#if review.verified}<span class="inline-flex items-center rounded-full bg-accent-primary/10 px-2 py-0.5 text-xs font-medium text-accent-primary"><Check class="mr-0.5 h-3 w-3" />Verified</span>{/if}
							</div>
							<div class="mt-1 flex items-center gap-2">
								<div class="flex items-center gap-0.5">{#each Array(5) as _, idx}<Star class="h-3.5 w-3.5 {idx < review.rating ? 'fill-accent-gold text-accent-gold' : 'text-border'}" />{/each}</div>
								<span class="text-xs text-text-secondary">{review.date}</span>
							</div>
						</div>
					</div>
					<p class="mt-3 text-sm leading-relaxed text-text-secondary">{review.text}</p>
				</div>
			{/each}
		</div>
		<div class="mt-8 text-center">
			<button class="glow rounded-full border border-border px-5 py-2 text-sm font-medium text-text-primary">Load More Reviews</button>
		</div>
	</div>
</section>

<!-- Related Products -->
<section class="py-20 md:py-32">
	<div class="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
		<h2 class="font-display text-2xl font-semibold text-text-primary sm:text-3xl">You might also like</h2>
		<div class="mx-auto mt-8 grid max-w-4xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
			{#each relatedProducts as related}
				<a href={p('/shop/' + related.handle)} class="glass-panel glow group overflow-hidden transition-all">
					<div class="relative aspect-[4/3] bg-gradient-to-br from-accent-primary/10 to-accent-gold/10">
						<div class="flex h-full items-center justify-center"><BookOpen class="h-10 w-10 text-accent-primary/20" /></div>
						{#if related.badge}<div class="absolute left-3 top-3"><span class="rounded-full bg-accent-gold/90 px-2.5 py-0.5 text-xs font-medium text-white">{related.badge}</span></div>{/if}
					</div>
					<div class="p-5">
						<h3 class="font-display text-base font-semibold text-text-primary group-hover:text-accent-primary">{related.title}</h3>
						<div class="mt-2 flex items-center gap-1.5">
							<div class="flex items-center gap-0.5">{#each Array(5) as _, idx}<Star class="h-3.5 w-3.5 {idx < Math.floor(related.rating) ? 'fill-accent-gold text-accent-gold' : 'text-border'}" />{/each}</div>
							<span class="text-xs text-text-secondary">{related.rating}</span>
						</div>
						<div class="mt-auto pt-3"><span class="text-lg font-bold text-accent-primary">${related.price.toFixed(2)}</span></div>
					</div>
				</a>
			{/each}
		</div>
		<div class="mt-8 text-center">
			<a href={p('/shop')} class="inline-flex items-center gap-1 text-sm font-medium text-accent-primary hover:underline">View all products <ArrowRight class="h-4 w-4" /></a>
		</div>
	</div>
</section>
