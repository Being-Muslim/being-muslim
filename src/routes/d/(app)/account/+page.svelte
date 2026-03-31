<script lang="ts">
	import { withPrefix } from '$lib/data/utils.js';
	import { BookOpen, ShoppingBag, Heart, Play, ArrowRight, Clock } from 'lucide-svelte';

	const p = (href: string) => withPrefix('/d', href);

	const quickStats = [
		{ label: 'Courses in Progress', value: '2', icon: BookOpen },
		{ label: 'Orders', value: '3', icon: ShoppingBag },
		{ label: 'Donations', value: '$240', icon: Heart }
	];

	const recentActivity = [
		{ type: 'course', title: 'Continued "Foundations of Faith"', time: '2 hours ago' },
		{ type: 'order', title: 'Order #BM-1234 delivered', time: 'Yesterday' },
		{ type: 'donation', title: 'Sponsored 5 boxed sets', time: '3 days ago' },
		{ type: 'course', title: 'Completed "Prayer Mastery" Module 1', time: '1 week ago' }
	];
</script>

<svelte:head>
	<title>Dashboard — Being Muslim</title>
</svelte:head>

<div>
	<!-- Header -->
	<div>
		<span class="text-xs font-medium uppercase tracking-[0.2em] text-accent-primary"
			>Dashboard</span
		>
		<h1 class="mt-2 font-display text-3xl font-light md:text-4xl">
			Salaam, Aminah
		</h1>
		<hr class="bronze-rule my-5 w-12" />
		<p class="text-text-secondary">Welcome back. Here is an overview of your journey.</p>
	</div>

	<!-- Quick Stats -->
	<div class="mt-8 grid gap-4 sm:grid-cols-3">
		{#each quickStats as stat}
			{@const Icon = stat.icon}
			<div class="rounded-sm border border-border bg-surface p-5">
				<Icon class="h-5 w-5 text-accent-primary/60" />
				<p class="mt-3 font-display text-2xl font-light text-text-primary">{stat.value}</p>
				<p class="mt-0.5 text-xs text-text-secondary">{stat.label}</p>
			</div>
		{/each}
	</div>

	<hr class="bronze-rule my-8" />

	<!-- Continue Learning -->
	<div>
		<h2 class="font-display text-xl font-light text-text-primary">Continue Learning</h2>
		<div class="mt-4 rounded-sm border border-border bg-surface p-5">
			<div class="flex items-center gap-4">
				<div
					class="flex h-14 w-14 shrink-0 items-center justify-center rounded-sm bg-accent-primary/10"
				>
					<Play class="h-6 w-6 text-accent-primary" />
				</div>
				<div class="flex-1">
					<h3 class="font-display text-base font-light text-text-primary">
						Foundations of Faith
					</h3>
					<p class="mt-0.5 text-xs text-text-secondary">Module 2: The Five Pillars</p>
					<div class="mt-2 h-1 w-full overflow-hidden rounded-sm bg-border">
						<div class="h-full w-[35%] rounded-sm bg-accent-primary"></div>
					</div>
					<p class="mt-1 text-xs text-text-secondary">35% complete</p>
				</div>
				<a
					href={p('/learn/foundations-of-faith/pillar-2-salah')}
					class="rounded-sm border border-accent-primary px-4 py-2 text-xs text-accent-primary transition-colors hover:bg-accent-primary hover:text-bg-primary"
				>
					Resume
				</a>
			</div>
		</div>
	</div>

	<hr class="bronze-rule my-8" />

	<!-- Recent Activity -->
	<div>
		<h2 class="font-display text-xl font-light text-text-primary">Recent Activity</h2>
		<div class="mt-4 space-y-2">
			{#each recentActivity as activity}
				<div class="flex items-center gap-3 rounded-sm border border-border bg-surface p-4">
					<div
						class="flex h-8 w-8 shrink-0 items-center justify-center rounded-sm bg-accent-primary/10"
					>
						{#if activity.type === 'course'}
							<BookOpen class="h-4 w-4 text-accent-primary" />
						{:else if activity.type === 'order'}
							<ShoppingBag class="h-4 w-4 text-accent-primary" />
						{:else}
							<Heart class="h-4 w-4 text-accent-primary" />
						{/if}
					</div>
					<div class="flex-1">
						<p class="text-sm text-text-primary">{activity.title}</p>
					</div>
					<span class="text-xs text-text-secondary">{activity.time}</span>
				</div>
			{/each}
		</div>
	</div>
</div>
