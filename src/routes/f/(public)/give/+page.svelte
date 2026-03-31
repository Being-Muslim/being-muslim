<script lang="ts">
	import { Section } from '$lib/components/layout/index.js';
	import { Button } from '$lib/components/ui/button/index.js';
	import { Badge } from '$lib/components/ui/badge/index.js';
	import {
		sponsorshipTiers,
		donationStats,
		testimonials
	} from '$lib/data/mock.js';
	import {
		Heart,
		Gift,
		Users,
		Globe,
		ArrowRight,
		Star,
		ChevronLeft,
		ChevronRight,
		Quote
	} from 'lucide-svelte';

	let testimonialIndex = $state(0);

	function nextTestimonial() {
		testimonialIndex = (testimonialIndex + 1) % testimonials.length;
	}
	function prevTestimonial() {
		testimonialIndex = (testimonialIndex - 1 + testimonials.length) % testimonials.length;
	}
</script>

<svelte:head>
	<title>Give — Sponsor a Boxed Set | Being Muslim</title>
	<meta
		name="description"
		content="Sponsor a Being Muslim boxed set for a new Muslim. Your generosity puts essential resources in the hands of those who need them most."
	/>
</svelte:head>

<!-- ============================== -->
<!-- 1. HERO — Dark, centered       -->
<!-- ============================== -->
<section class="relative flex min-h-[60vh] items-center overflow-hidden bg-bg-dark">
	<!-- Background Pattern -->
	<div class="absolute inset-0 opacity-[0.03]">
		<svg class="h-full w-full" xmlns="http://www.w3.org/2000/svg">
			<defs>
				<pattern id="geo-f-give" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
					<path
						d="M30 0L60 30L30 60L0 30Z"
						fill="none"
						stroke="currentColor"
						stroke-width="0.5"
						class="text-text-cream"
					/>
				</pattern>
			</defs>
			<rect width="100%" height="100%" fill="url(#geo-f-give)" />
		</svg>
	</div>

	<!-- Radial glow -->
	<div class="absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-accent-primary/5 blur-3xl"></div>

	<div class="relative mx-auto max-w-[1280px] px-4 py-32 text-center sm:px-6 lg:px-8">
		<div class="mx-auto max-w-3xl">
			<Badge variant="gold">
				{#snippet children()}
					<Heart class="mr-1 h-3 w-3" />
					Make an Impact
				{/snippet}
			</Badge>
			<h1 class="mt-6 font-display text-4xl font-bold leading-tight text-text-cream sm:text-5xl lg:text-6xl">
				Sponsor a boxed set for a
				<span class="text-accent-gold">new Muslim</span>
			</h1>
			<p class="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-text-cream/80 sm:text-xl">
				Many new Muslims can't afford the resources they need. Your sponsorship puts a complete
				Being Muslim boxed set in their hands — a gift that transforms lives.
			</p>

			<div class="mt-10">
				<Button size="lg" class="bg-accent-primary text-text-cream hover:bg-accent-hover">
					{#snippet children()}
						Sponsor Now
						<Heart class="ml-1 h-5 w-5" />
					{/snippet}
				</Button>
			</div>
		</div>
	</div>

	<div class="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-bg-primary to-transparent"></div>
</section>

<!-- ============================== -->
<!-- 2. IMPACT STATS — Row          -->
<!-- ============================== -->
<section class="-mt-12 relative z-10">
	<div class="mx-auto max-w-[1080px] px-4 sm:px-6">
		<div class="grid grid-cols-2 gap-4 rounded-2xl bg-surface p-6 shadow-lg sm:grid-cols-4 sm:p-8">
			{#each [
				{ icon: Gift, value: donationStats.totalSponsored.toLocaleString(), label: 'Sets Sponsored' },
				{ icon: Users, value: donationStats.communitiesReached.toString(), label: 'Communities' },
				{ icon: Globe, value: donationStats.countriesReached.toString(), label: 'Countries' },
				{ icon: Heart, value: donationStats.monthlyDonors.toString(), label: 'Monthly Donors' }
			] as stat}
				<div class="text-center">
					<svelte:component this={stat.icon} class="mx-auto mb-2 h-5 w-5 text-accent-gold" />
					<p class="font-display text-2xl font-bold text-accent-primary sm:text-3xl">{stat.value}</p>
					<p class="mt-1 text-sm text-text-secondary">{stat.label}</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- ============================== -->
<!-- 3. SPONSORSHIP TIERS — 3 cols  -->
<!-- ============================== -->
<Section>
	<div class="mx-auto max-w-3xl text-center">
		<h2 class="font-display text-3xl font-bold sm:text-4xl">Choose Your Impact</h2>
		<p class="mt-4 text-lg text-text-secondary">
			Every sponsorship puts essential resources into the hands of someone who needs them.
		</p>
	</div>

	<div class="mt-12 grid gap-6 sm:grid-cols-3">
		{#each sponsorshipTiers as tier}
			<div
				class="relative flex flex-col rounded-xl border bg-surface p-6 transition-all hover:shadow-lg {tier.popular
					? 'border-accent-primary shadow-md'
					: 'border-border'}"
			>
				{#if tier.popular}
					<div class="absolute -top-3 left-1/2 -translate-x-1/2">
						<Badge variant="default">
							{#snippet children()}Most Popular{/snippet}
						</Badge>
					</div>
				{/if}
				<h3 class="font-display text-lg font-semibold">{tier.name}</h3>
				<p class="mt-2 flex-1 text-sm text-text-secondary">{tier.description}</p>
				<p class="mt-4 font-display text-3xl font-bold text-accent-primary">
					${tier.price}
				</p>
				<p class="mt-1 text-xs text-text-secondary">{tier.impact}</p>
				<Button variant={tier.popular ? 'default' : 'outline'} class="mt-6 w-full">
					{#snippet children()}
						Sponsor Now
						<Heart class="ml-1 h-4 w-4" />
					{/snippet}
				</Button>
			</div>
		{/each}
	</div>

	<div class="mt-8 text-center">
		<p class="text-sm text-text-secondary">
			All donations are tax-deductible. You'll receive a receipt for your records.
		</p>
	</div>
</Section>

<!-- ============================== -->
<!-- 4. TESTIMONIALS — Dark section -->
<!-- ============================== -->
<section class="relative overflow-hidden bg-bg-dark py-20 sm:py-28">
	<!-- Background Pattern -->
	<div class="absolute inset-0 opacity-[0.02]">
		<svg class="h-full w-full" xmlns="http://www.w3.org/2000/svg">
			<defs>
				<pattern id="geo-f-give-test" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
					<path
						d="M30 0L60 30L30 60L0 30Z"
						fill="none"
						stroke="currentColor"
						stroke-width="0.5"
						class="text-text-cream"
					/>
				</pattern>
			</defs>
			<rect width="100%" height="100%" fill="url(#geo-f-give-test)" />
		</svg>
	</div>

	<div class="relative mx-auto max-w-3xl px-4 text-center sm:px-6">
		<div class="flex justify-center gap-1">
			{#each Array(5) as _}
				<Star class="h-5 w-5 fill-accent-gold text-accent-gold" />
			{/each}
		</div>

		<blockquote class="mt-8 font-display text-2xl leading-relaxed text-text-cream sm:text-3xl">
			"{testimonials[testimonialIndex].quote}"
		</blockquote>

		<div class="mt-8">
			<p class="font-semibold text-text-cream">{testimonials[testimonialIndex].name}</p>
			<p class="text-sm text-text-cream/50">{testimonials[testimonialIndex].role}</p>
		</div>

		<!-- Navigation -->
		<div class="mt-8 flex items-center justify-center gap-4">
			<button
				onclick={prevTestimonial}
				class="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-text-cream/50 transition-colors hover:border-white/30 hover:text-text-cream"
				aria-label="Previous testimonial"
			>
				<ChevronLeft class="h-5 w-5" />
			</button>
			<div class="flex gap-2">
				{#each testimonials as _, i}
					<button
						class="h-2 w-2 rounded-full transition-colors {i === testimonialIndex
							? 'bg-accent-gold'
							: 'bg-white/15'}"
						onclick={() => (testimonialIndex = i)}
						aria-label="Go to testimonial {i + 1}"
					></button>
				{/each}
			</div>
			<button
				onclick={nextTestimonial}
				class="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-text-cream/50 transition-colors hover:border-white/30 hover:text-text-cream"
				aria-label="Next testimonial"
			>
				<ChevronRight class="h-5 w-5" />
			</button>
		</div>
	</div>
</section>

<!-- ============================== -->
<!-- 5. CTA — Final push            -->
<!-- ============================== -->
<Section>
	<div class="mx-auto max-w-3xl text-center">
		<Heart class="mx-auto h-10 w-10 text-accent-gold" />
		<h2 class="mt-4 font-display text-3xl font-bold sm:text-4xl">
			Every gift makes a difference
		</h2>
		<p class="mx-auto mt-4 max-w-xl text-lg text-text-secondary">
			Whether you sponsor one set or ten, your generosity reaches someone at the most
			transformative moment of their life.
		</p>
		<div class="mt-8 flex flex-wrap justify-center gap-4">
			<Button size="lg" class="bg-accent-primary text-text-cream hover:bg-accent-hover">
				{#snippet children()}
					Sponsor a Boxed Set
					<Heart class="ml-1 h-5 w-5" />
				{/snippet}
			</Button>
			<a href="/f/shop">
				<Button variant="outline" size="lg">
					{#snippet children()}
						Browse the Shop
						<ArrowRight class="ml-1 h-5 w-5" />
					{/snippet}
				</Button>
			</a>
		</div>
	</div>
</Section>
