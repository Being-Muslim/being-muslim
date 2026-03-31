<script lang="ts">
	import { withPrefix } from '$lib/data/utils.js';
	import { sponsorshipTiers, donationStats } from '$lib/data/mock.js';
	import { Heart, ArrowRight, Users, Globe, BookOpen, ChevronDown, ChevronUp, Sparkles } from 'lucide-svelte';

	const p = (href: string) => withPrefix('/e', href);

	let customAmount = $state('');
	let selectedTier = $state<number | null>(null);
	let isMonthly = $state(false);

	const faqs = [
		{ question: 'How are sponsored boxed sets distributed?', answer: 'We work with mosques, Islamic centers, and convert support organizations worldwide. Each sponsored set is given directly to a new Muslim who has requested resources.' },
		{ question: 'Can I sponsor in honor of someone?', answer: 'Yes! During checkout, you can add a dedication message. We will include a beautiful card with your message in the boxed set.' },
		{ question: 'Is my donation tax-deductible?', answer: 'Yes. The Being Muslim Project is a registered 501(c)(3) nonprofit organization. You will receive a tax receipt for your donation.' },
		{ question: 'Can I set up a recurring donation?', answer: 'Absolutely. You can choose monthly giving at any tier. Monthly donors receive quarterly impact reports and exclusive updates.' }
	];

	let openFaq = $state<number | null>(null);

	const donorWall = [
		{ name: 'Anonymous', amount: 5, message: 'For my daughter who just took her shahada' },
		{ name: 'The Rahman Family', amount: 10, message: 'In memory of our mother' },
		{ name: 'Khalid M.', amount: 1, message: 'Every bit counts. MashaAllah for this project.' },
		{ name: 'Sarah & Ahmed', amount: 5, message: 'May Allah bless every recipient.' },
		{ name: 'Islamic Center of Portland', amount: 20, message: 'For our convert support program' },
		{ name: 'Anonymous', amount: 3, message: 'JazakAllah khair for this beautiful initiative.' }
	];
</script>

<svelte:head>
	<title>Give — Being Muslim</title>
	<meta name="description" content="Sponsor a Being Muslim boxed set for a new Muslim. Your donation makes a difference." />
</svelte:head>

<!-- Hero -->
<section class="flex items-center justify-center px-4 py-32 text-center">
	<div class="glass-panel mx-auto max-w-3xl p-10">
		<Sparkles class="mx-auto h-10 w-10 text-accent-gold" />
		<h1 class="mt-4 font-display text-4xl font-semibold text-text-primary sm:text-5xl">Plant Seeds of Knowledge</h1>
		<p class="mt-4 text-lg text-text-secondary">Your generosity puts essential Islamic resources in the hands of new Muslims around the world. Every boxed set sponsored is a life touched by knowledge.</p>
	</div>
</section>

<div class="relative -mt-1"><svg viewBox="0 0 1440 60" fill="none" class="w-full"><path d="M0 30C240 50 480 10 720 30C960 50 1200 10 1440 30V60H0V30Z" fill="currentColor" class="text-bg-primary/30" /></svg></div>

<!-- Impact Stats -->
<section class="py-12">
	<div class="mx-auto max-w-[900px] px-4 sm:px-6">
		<div class="glass-panel grid grid-cols-2 gap-4 p-6 sm:grid-cols-4 sm:p-8">
			<div class="text-center">
				<p class="font-display text-2xl font-bold text-accent-primary">{donationStats.totalSponsored.toLocaleString()}</p>
				<p class="mt-1 text-xs text-text-secondary">Sets Sponsored</p>
			</div>
			<div class="text-center">
				<p class="font-display text-2xl font-bold text-accent-primary">{donationStats.communitiesReached}</p>
				<p class="mt-1 text-xs text-text-secondary">Communities</p>
			</div>
			<div class="text-center">
				<p class="font-display text-2xl font-bold text-accent-primary">{donationStats.countriesReached}</p>
				<p class="mt-1 text-xs text-text-secondary">Countries</p>
			</div>
			<div class="text-center">
				<p class="font-display text-2xl font-bold text-accent-primary">{donationStats.monthlyDonors}</p>
				<p class="mt-1 text-xs text-text-secondary">Monthly Donors</p>
			</div>
		</div>
	</div>
</section>

<!-- Sponsorship Tiers -->
<section class="py-12 sm:py-16">
	<div class="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
		<div class="mx-auto max-w-3xl text-center">
			<h2 class="font-display text-3xl font-semibold text-text-primary sm:text-4xl">Choose your impact</h2>
			<p class="mt-4 text-text-secondary">Select a sponsorship tier or enter a custom amount below.</p>
			<div class="mt-6 inline-flex rounded-full border border-border bg-white/80 p-1">
				<button onclick={() => (isMonthly = false)} class="rounded-full px-4 py-2 text-sm font-medium transition-colors {!isMonthly ? 'bg-accent-primary text-white' : 'text-text-secondary'}">One-time</button>
				<button onclick={() => (isMonthly = true)} class="rounded-full px-4 py-2 text-sm font-medium transition-colors {isMonthly ? 'bg-accent-primary text-white' : 'text-text-secondary'}">Monthly</button>
			</div>
		</div>

		<div class="mx-auto mt-12 grid max-w-4xl gap-6 sm:grid-cols-3">
			{#each sponsorshipTiers as tier, i}
				<button onclick={() => (selectedTier = i)} class="glass-panel glow relative flex flex-col p-6 text-left transition-all {selectedTier === i ? 'ring-2 ring-accent-primary' : ''} {tier.popular ? 'ring-2 ring-accent-primary' : ''}">
					{#if tier.popular}<div class="absolute -top-3 left-1/2 -translate-x-1/2"><span class="rounded-full bg-accent-primary px-3 py-1 text-xs font-medium text-white">Most Popular</span></div>{/if}
					<h3 class="font-display text-lg font-semibold text-text-primary">{tier.name}</h3>
					<p class="mt-2 flex-1 text-sm text-text-secondary">{tier.description}</p>
					<p class="mt-4 font-display text-3xl font-bold text-accent-primary">${tier.price}{isMonthly ? '/mo' : ''}</p>
					<p class="mt-1 text-xs text-text-secondary">{tier.impact}</p>
				</button>
			{/each}
		</div>

		<div class="mx-auto mt-8 max-w-md">
			<label class="block text-sm font-medium text-text-primary" for="custom-amount">Or enter a custom amount</label>
			<div class="relative mt-2">
				<span class="absolute left-4 top-1/2 -translate-y-1/2 text-text-secondary">$</span>
				<input id="custom-amount" type="number" bind:value={customAmount} placeholder="0.00" class="w-full rounded-full border border-border bg-white/80 py-3 pl-8 pr-4 text-lg font-semibold text-text-primary placeholder:text-text-secondary/40 focus:border-accent-primary focus:outline-none focus:ring-2 focus:ring-accent-primary/20" />
			</div>
			<button class="glow mt-4 flex w-full items-center justify-center gap-2 rounded-full bg-accent-primary py-3 text-sm font-medium text-white"><Heart class="h-4 w-4" /> Donate Now</button>
		</div>
	</div>
</section>

<!-- SVG Wave -->
<div class="relative -mb-1"><svg viewBox="0 0 1440 60" fill="none" class="w-full"><path d="M0 30C240 50 480 10 720 30C960 50 1200 10 1440 30V60H0V30Z" fill="currentColor" class="text-white/20" /></svg></div>

<!-- Donor Wall -->
<section class="py-20 md:py-32">
	<div class="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
		<div class="text-center">
			<h2 class="font-display text-3xl font-semibold text-text-primary">Recent Supporters</h2>
			<p class="mt-2 text-text-secondary">Join these generous donors in making a difference</p>
		</div>
		<div class="mx-auto mt-10 grid max-w-4xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
			{#each donorWall as donor}
				<div class="glass-panel p-5">
					<div class="flex items-center justify-between">
						<span class="font-semibold text-text-primary">{donor.name}</span>
						<span class="rounded-full bg-accent-primary/10 px-2.5 py-0.5 text-xs font-medium text-accent-primary">{donor.amount} sets</span>
					</div>
					<p class="mt-2 text-sm text-text-secondary">"{donor.message}"</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- FAQ -->
<section class="py-20 md:py-32">
	<div class="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
		<h2 class="font-display text-2xl font-semibold text-text-primary sm:text-3xl">Frequently Asked Questions</h2>
		<div class="mt-8 space-y-3">
			{#each faqs as faq, i}
				<div class="glass-panel">
					<button class="flex w-full items-center justify-between p-5 text-left" onclick={() => openFaq = openFaq === i ? null : i}>
						<span class="font-display font-semibold text-text-primary">{faq.question}</span>
						{#if openFaq === i}<ChevronUp class="h-5 w-5 shrink-0 text-text-secondary" />{:else}<ChevronDown class="h-5 w-5 shrink-0 text-text-secondary" />{/if}
					</button>
					{#if openFaq === i}
						<div class="border-t border-border px-5 py-4"><p class="leading-relaxed text-text-secondary">{faq.answer}</p></div>
					{/if}
				</div>
			{/each}
		</div>
	</div>
</section>
