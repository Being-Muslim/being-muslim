<script lang="ts">
	import { withPrefix } from '$lib/data/utils.js';
	import { Heart, Gift, Calendar, ArrowRight } from 'lucide-svelte';

	const p = (href: string) => withPrefix('/d', href);

	const donations = [
		{
			date: 'February 5, 2026',
			amount: '$400',
			description: 'Sponsor 5 Boxed Sets',
			status: 'Completed'
		},
		{
			date: 'January 10, 2026',
			amount: '$85',
			description: 'Sponsor 1 Boxed Set',
			status: 'Completed'
		},
		{
			date: 'December 15, 2025',
			amount: '$85',
			description: 'Sponsor 1 Boxed Set',
			status: 'Completed'
		}
	];

	const totalDonated = '$570';
	const setsSponsored = 7;
</script>

<svelte:head>
	<title>Donations — Being Muslim</title>
</svelte:head>

<div>
	<span class="text-xs font-medium uppercase tracking-[0.2em] text-accent-primary">Account</span>
	<h1 class="mt-2 font-display text-3xl font-light">Donations</h1>
	<hr class="bronze-rule my-5 w-12" />

	<!-- Stats -->
	<div class="grid gap-4 sm:grid-cols-2">
		<div class="rounded-sm border border-border bg-surface p-5">
			<Heart class="h-5 w-5 text-accent-primary/60" />
			<p class="mt-3 font-display text-2xl font-light text-accent-primary">{totalDonated}</p>
			<p class="mt-0.5 text-xs text-text-secondary">Total Donated</p>
		</div>
		<div class="rounded-sm border border-border bg-surface p-5">
			<Gift class="h-5 w-5 text-accent-primary/60" />
			<p class="mt-3 font-display text-2xl font-light text-accent-primary">{setsSponsored}</p>
			<p class="mt-0.5 text-xs text-text-secondary">Sets Sponsored</p>
		</div>
	</div>

	<hr class="bronze-rule my-8" />

	<!-- History -->
	<h2 class="font-display text-xl font-light text-text-primary">Donation History</h2>
	<div class="mt-4 space-y-3">
		{#each donations as donation}
			<div class="flex items-center gap-4 rounded-sm border border-border bg-surface p-5">
				<div
					class="flex h-10 w-10 shrink-0 items-center justify-center rounded-sm bg-accent-primary/10"
				>
					<Heart class="h-5 w-5 text-accent-primary" />
				</div>
				<div class="flex-1">
					<p class="text-sm text-text-primary">{donation.description}</p>
					<p class="mt-0.5 flex items-center gap-1 text-xs text-text-secondary">
						<Calendar class="h-3 w-3" />
						{donation.date}
					</p>
				</div>
				<div class="text-right">
					<p class="text-sm text-accent-primary">{donation.amount}</p>
					<span
						class="text-xs text-accent-green"
						>{donation.status}</span
					>
				</div>
			</div>
		{/each}
	</div>

	<hr class="bronze-rule my-8" />

	<a
		href={p('/give')}
		class="inline-flex items-center gap-2 rounded-sm border border-accent-primary px-5 py-2.5 text-sm text-accent-primary transition-colors hover:bg-accent-primary hover:text-bg-primary"
	>
		Make Another Donation <ArrowRight class="h-4 w-4" />
	</a>
</div>
