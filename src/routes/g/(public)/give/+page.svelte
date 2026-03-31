<script lang="ts">
	import { Section } from '$lib/components/layout/index.js';
	import { Button } from '$lib/components/ui/button/index.js';
	import { Badge } from '$lib/components/ui/badge/index.js';
	import { sponsorshipTiers, donationStats, testimonials } from '$lib/data/mock.js';
	import {
		Heart,
		ArrowRight,
		Package,
		Users,
		Globe,
		Repeat,
		Quote
	} from 'lucide-svelte';
</script>

<svelte:head>
	<title>Give — Support New Muslims with the Gift of Knowledge | Being Muslim</title>
	<meta
		name="description"
		content="Sponsor a Being Muslim boxed set for a new Muslim in need. Your donation puts essential resources into the hands of those beginning their Islamic journey."
	/>
</svelte:head>

<!-- ============================== -->
<!-- 1. SPLIT HERO                  -->
<!-- ============================== -->
<section class="relative overflow-hidden bg-bg-dark">
	<!-- Background Pattern -->
	<div class="absolute inset-0 opacity-[0.03]">
		<svg class="h-full w-full" xmlns="http://www.w3.org/2000/svg">
			<defs>
				<pattern id="geo-g-give" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
					<path
						d="M30 0L60 30L30 60L0 30Z"
						fill="none"
						stroke="currentColor"
						stroke-width="0.5"
						class="text-text-cream"
					/>
				</pattern>
			</defs>
			<rect width="100%" height="100%" fill="url(#geo-g-give)" />
		</svg>
	</div>

	<div class="relative mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
		<div class="grid items-center gap-10 py-16 sm:py-20 lg:grid-cols-2 lg:gap-16 lg:py-24">
			<!-- Left: Text content -->
			<div>
				<div class="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs text-text-cream/70">
					<Heart class="h-3.5 w-3.5 text-accent-gold" />
					<span>{donationStats.totalSponsored.toLocaleString()} boxed sets sponsored</span>
				</div>

				<h1 class="font-display text-3xl font-bold leading-tight text-text-cream sm:text-4xl lg:text-5xl">
					Change a life with the
					<span class="text-accent-gold">gift of knowledge</span>
				</h1>

				<p class="mt-4 max-w-lg text-base leading-relaxed text-text-cream/70 sm:text-lg">
					When someone embraces Islam, they deserve more than just a handshake. A sponsored
					boxed set gives new Muslims the resources and encouragement they need.
				</p>

				<div class="mt-8 flex flex-wrap gap-3">
					<Button size="lg" class="bg-accent-primary text-text-cream hover:bg-accent-hover">
						{#snippet children()}
							Sponsor a Boxed Set
							<Heart class="ml-1 h-5 w-5" />
						{/snippet}
					</Button>
					<Button
						variant="outline"
						size="lg"
						class="border-text-cream/30 text-text-cream hover:bg-white/10 hover:text-text-cream"
					>
						{#snippet children()}
							Learn How It Works
							<ArrowRight class="ml-1 h-5 w-5" />
						{/snippet}
					</Button>
				</div>
			</div>

			<!-- Right: Stats cards grid -->
			<div class="grid grid-cols-2 gap-4">
				<div class="rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
					<Package class="mb-2 h-5 w-5 text-accent-gold/60" />
					<p class="font-display text-2xl font-bold text-accent-gold sm:text-3xl">
						{donationStats.totalSponsored.toLocaleString()}
					</p>
					<p class="mt-1 text-xs text-text-cream/50">Boxed Sets Sponsored</p>
				</div>
				<div class="rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
					<Users class="mb-2 h-5 w-5 text-accent-gold/60" />
					<p class="font-display text-2xl font-bold text-accent-gold sm:text-3xl">
						{donationStats.communitiesReached}
					</p>
					<p class="mt-1 text-xs text-text-cream/50">Communities Reached</p>
				</div>
				<div class="rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
					<Globe class="mb-2 h-5 w-5 text-accent-gold/60" />
					<p class="font-display text-2xl font-bold text-accent-gold sm:text-3xl">
						{donationStats.countriesReached}
					</p>
					<p class="mt-1 text-xs text-text-cream/50">Countries Reached</p>
				</div>
				<div class="rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
					<Repeat class="mb-2 h-5 w-5 text-accent-gold/60" />
					<p class="font-display text-2xl font-bold text-accent-gold sm:text-3xl">
						{donationStats.monthlyDonors}
					</p>
					<p class="mt-1 text-xs text-text-cream/50">Monthly Donors</p>
				</div>
			</div>
		</div>
	</div>

	<div class="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-bg-primary to-transparent"></div>
</section>

<!-- ============================== -->
<!-- 2. SPONSORSHIP TIERS — Row     -->
<!-- ============================== -->
<Section>
	<div class="text-center">
		<Badge variant="gold">
			{#snippet children()}Sponsorship Tiers{/snippet}
		</Badge>
		<h2 class="mt-3 font-display text-2xl font-bold sm:text-3xl">
			Choose how you want to give
		</h2>
		<p class="mx-auto mt-3 max-w-xl text-sm text-text-secondary">
			Every sponsored boxed set includes the book, prayer reference cards,
			a quick-reference guide, and a heartfelt welcome letter.
		</p>
	</div>

	<!-- Single row of tiers -->
	<div class="mt-10 grid gap-4 sm:grid-cols-3">
		{#each sponsorshipTiers as rawTier}
			{@const tier = rawTier as { name: string; price: number; description: string; impact: string; popular?: boolean }}
			<div
				class="relative flex flex-col rounded-xl border bg-surface p-6 transition-all hover:shadow-lg {tier.popular
					? 'border-accent-primary ring-2 ring-accent-primary/20'
					: 'border-border hover:border-accent-primary/30'}"
			>
				{#if tier.popular}
					<div class="absolute -top-2.5 left-1/2 -translate-x-1/2">
						<Badge variant="default">
							{#snippet children()}Most Popular{/snippet}
						</Badge>
					</div>
				{/if}

				<div class="flex items-baseline justify-between">
					<h3 class="font-display text-base font-semibold">{tier.name}</h3>
					<span class="font-display text-2xl font-bold text-accent-primary">${tier.price}</span>
				</div>

				<p class="mt-2 flex-1 text-sm leading-relaxed text-text-secondary">{tier.description}</p>

				<div class="mt-4 flex items-center justify-between border-t border-border pt-4">
					<p class="flex items-center gap-1.5 text-xs text-accent-green">
						<Heart class="h-3 w-3" />
						{tier.impact}
					</p>
					<Button variant={tier.popular ? 'default' : 'outline'} size="sm">
						{#snippet children()}
							Sponsor
							<Heart class="ml-1 h-3.5 w-3.5" />
						{/snippet}
					</Button>
				</div>
			</div>
		{/each}
	</div>
</Section>

<!-- ============================== -->
<!-- 3. TESTIMONIAL — Compact quote -->
<!-- ============================== -->
<Section class="bg-secondary/50">
	<div class="mx-auto max-w-3xl">
		<div class="flex items-start gap-5 rounded-xl border border-border bg-surface p-6 sm:p-8">
			<Quote class="hidden h-8 w-8 shrink-0 text-accent-gold/40 sm:block" />
			<div>
				<p class="font-display text-base leading-relaxed text-text-primary sm:text-lg">
					"{testimonials[0].quote}"
				</p>
				<div class="mt-4 flex items-center gap-3">
					<div class="flex h-8 w-8 items-center justify-center rounded-full bg-accent-primary/10 text-xs font-bold text-accent-primary">
						{testimonials[0].name[0]}
					</div>
					<div>
						<p class="text-sm font-semibold">{testimonials[0].name}</p>
						<p class="text-xs text-text-secondary">{testimonials[0].role}</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</Section>

<!-- ============================== -->
<!-- 4. CTA — Dark compact band     -->
<!-- ============================== -->
<section class="relative overflow-hidden bg-bg-dark py-14 sm:py-20">
	<!-- Background Pattern -->
	<div class="absolute inset-0 opacity-[0.03]">
		<svg class="h-full w-full" xmlns="http://www.w3.org/2000/svg">
			<defs>
				<pattern id="geo-g-give-cta" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
					<path
						d="M30 0L60 30L30 60L0 30Z"
						fill="none"
						stroke="currentColor"
						stroke-width="0.5"
						class="text-text-cream"
					/>
				</pattern>
			</defs>
			<rect width="100%" height="100%" fill="url(#geo-g-give-cta)" />
		</svg>
	</div>

	<div class="relative mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
		<div class="mx-auto max-w-2xl text-center">
			<Heart class="mx-auto h-10 w-10 text-accent-gold" />
			<h2 class="mt-4 font-display text-2xl font-bold text-text-cream sm:text-3xl">
				Every gift is a seed planted
			</h2>
			<p class="mt-3 text-base leading-relaxed text-text-cream/70">
				The Prophet Muhammad (peace be upon him) said: <em>"The best of people are those who
				are most beneficial to others."</em> Your donation does not just send a book -- it tells
				someone that their journey matters.
			</p>
			<div class="mt-8 flex flex-wrap justify-center gap-3">
				<Button size="lg" class="bg-accent-primary text-text-cream hover:bg-accent-hover">
					{#snippet children()}
						Sponsor a Boxed Set
						<Heart class="ml-1 h-5 w-5" />
					{/snippet}
				</Button>
				<Button
					variant="outline"
					size="lg"
					class="border-text-cream/30 text-text-cream hover:bg-white/10 hover:text-text-cream"
				>
					{#snippet children()}
						Share This Page
						<ArrowRight class="ml-1 h-5 w-5" />
					{/snippet}
				</Button>
			</div>
			<p class="mt-5 text-xs text-text-cream/40">
				Being Muslim is a 501(c)(3) nonprofit. All donations are tax-deductible.
			</p>
		</div>
	</div>
</section>
