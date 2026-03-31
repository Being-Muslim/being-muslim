<script lang="ts">
	import { withPrefix } from '$lib/data/utils.js';
	import { Heart, Globe, Users, BookOpen } from 'lucide-svelte';

	const p = (href: string) => withPrefix('/e', href);

	const donations = [
		{ id: '#DN-456', date: 'February 1, 2026', amount: 85, type: 'Sponsor 1 Boxed Set', status: 'Delivered' },
		{ id: '#DN-389', date: 'January 1, 2026', amount: 85, type: 'Sponsor 1 Boxed Set', status: 'Delivered' },
		{ id: '#DN-312', date: 'December 1, 2025', amount: 400, type: 'Sponsor 5 Boxed Sets', status: 'Delivered' }
	];

	const totalDonated = donations.reduce((sum, d) => sum + d.amount, 0);
	const totalSets = 7;
</script>

<svelte:head>
	<title>Donations — Being Muslim</title>
</svelte:head>

<div>
	<h1 class="font-display text-2xl font-semibold text-text-primary sm:text-3xl">Donations</h1>
	<p class="mt-1 text-text-secondary">Your generosity makes a difference. Thank you.</p>

	<!-- Impact Stats -->
	<div class="mt-8 grid gap-4 sm:grid-cols-3">
		<div class="glass-panel p-5 text-center">
			<Heart class="mx-auto h-6 w-6 text-accent-primary" />
			<p class="mt-2 font-display text-2xl font-bold text-accent-primary">${totalDonated}</p>
			<p class="mt-1 text-xs text-text-secondary">Total Donated</p>
		</div>
		<div class="glass-panel p-5 text-center">
			<BookOpen class="mx-auto h-6 w-6 text-accent-gold" />
			<p class="mt-2 font-display text-2xl font-bold text-accent-gold">{totalSets}</p>
			<p class="mt-1 text-xs text-text-secondary">Sets Sponsored</p>
		</div>
		<div class="glass-panel p-5 text-center">
			<Globe class="mx-auto h-6 w-6 text-accent-primary" />
			<p class="mt-2 font-display text-2xl font-bold text-accent-primary">5</p>
			<p class="mt-1 text-xs text-text-secondary">Countries Reached</p>
		</div>
	</div>

	<!-- Donation History -->
	<div class="mt-8">
		<h2 class="font-display text-lg font-semibold text-text-primary">Donation History</h2>
		<div class="mt-4 space-y-3">
			{#each donations as donation}
				<div class="glass-panel flex items-center justify-between p-5">
					<div class="flex items-center gap-4">
						<div class="flex h-10 w-10 items-center justify-center rounded-full bg-accent-primary/10">
							<Heart class="h-5 w-5 text-accent-primary" />
						</div>
						<div>
							<p class="text-sm font-medium text-text-primary">{donation.type}</p>
							<p class="text-xs text-text-secondary">{donation.id} &middot; {donation.date}</p>
						</div>
					</div>
					<div class="text-right">
						<p class="font-display text-lg font-bold text-accent-primary">${donation.amount}</p>
						<span class="rounded-full bg-accent-primary/10 px-2 py-0.5 text-xs font-medium text-accent-primary">{donation.status}</span>
					</div>
				</div>
			{/each}
		</div>
	</div>

	<!-- Donate More -->
	<div class="glass-panel mt-8 border-accent-gold/30 p-6 text-center">
		<h3 class="font-display text-lg font-semibold text-text-primary">Continue making an impact</h3>
		<p class="mt-2 text-sm text-text-secondary">Every boxed set you sponsor helps a new Muslim on their journey.</p>
		<a href={p('/give')} class="glow mt-4 inline-flex items-center gap-2 rounded-full bg-accent-primary px-6 py-2.5 text-sm font-medium text-white">
			Sponsor Another Set <Heart class="h-4 w-4" />
		</a>
	</div>
</div>
