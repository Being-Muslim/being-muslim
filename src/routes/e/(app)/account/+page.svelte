<script lang="ts">
	import { withPrefix } from '$lib/data/utils.js';
	import { courses } from '$lib/data/mock.js';
	import { BookOpen, ShoppingBag, Heart, Trophy, ArrowRight, Clock, Play } from 'lucide-svelte';

	const p = (href: string) => withPrefix('/e', href);

	const enrolledCourses = courses.slice(0, 2);

	const recentOrders = [
		{ id: '#BM-1234', date: 'Feb 10, 2026', total: '$84.99', status: 'Delivered', item: 'Being Muslim Boxed Set' },
		{ id: '#BM-1189', date: 'Jan 25, 2026', total: '$24.99', status: 'Delivered', item: 'Being Muslim Book' }
	];

	const activityFeed = [
		{ type: 'course', text: 'Completed "The Shahada: Declaration of Faith"', time: '2 hours ago' },
		{ type: 'forum', text: 'Replied to "Tips for staying consistent with prayers"', time: '1 day ago' },
		{ type: 'donation', text: 'Sponsored 1 boxed set for a new Muslim', time: '3 days ago' },
		{ type: 'course', text: 'Started "Prayer Mastery" course', time: '1 week ago' }
	];
</script>

<svelte:head>
	<title>Dashboard — Being Muslim</title>
</svelte:head>

<div>
	<h1 class="font-display text-2xl font-semibold text-text-primary sm:text-3xl">Dashboard</h1>
	<p class="mt-1 text-text-secondary">Welcome back! Here's an overview of your journey.</p>

	<!-- Stats -->
	<div class="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
		{#each [
			{ label: 'Courses Enrolled', value: '2', icon: BookOpen, color: 'bg-accent-primary/10 text-accent-primary' },
			{ label: 'Lessons Completed', value: '12', icon: Trophy, color: 'bg-accent-gold/10 text-accent-gold' },
			{ label: 'Orders', value: '3', icon: ShoppingBag, color: 'bg-blue-50 text-blue-600' },
			{ label: 'Sets Sponsored', value: '2', icon: Heart, color: 'bg-red-50 text-red-500' }
		] as stat}
			{@const Icon = stat.icon}
			<div class="glass-panel p-5">
				<div class="flex items-center gap-3">
					<div class="flex h-10 w-10 items-center justify-center rounded-xl {stat.color}">
						<Icon class="h-5 w-5" />
					</div>
					<div>
						<p class="font-display text-2xl font-bold text-text-primary">{stat.value}</p>
						<p class="text-xs text-text-secondary">{stat.label}</p>
					</div>
				</div>
			</div>
		{/each}
	</div>

	<!-- Continue Learning -->
	<div class="mt-8">
		<div class="flex items-center justify-between">
			<h2 class="font-display text-lg font-semibold text-text-primary">Continue Learning</h2>
			<a href={p('/account/learning')} class="text-sm font-medium text-accent-primary hover:underline">View all</a>
		</div>
		<div class="mt-4 grid gap-4 sm:grid-cols-2">
			{#each enrolledCourses as course}
				<a href={p('/courses/' + course.slug)} class="glass-panel glow group flex gap-4 p-4 transition-all">
					<div class="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-accent-primary/10 to-accent-gold/10">
						<Play class="h-6 w-6 text-accent-primary/50" />
					</div>
					<div class="flex-1">
						<h3 class="font-display text-sm font-semibold text-text-primary group-hover:text-accent-primary">{course.title}</h3>
						<p class="mt-1 text-xs text-text-secondary">{course.instructor} &middot; {course.lessonCount} lessons</p>
						<div class="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-border">
							<div class="h-full w-[35%] rounded-full bg-accent-primary"></div>
						</div>
						<p class="mt-1 text-xs text-text-secondary">35% complete</p>
					</div>
				</a>
			{/each}
		</div>
	</div>

	<!-- Recent Orders -->
	<div class="mt-8">
		<div class="flex items-center justify-between">
			<h2 class="font-display text-lg font-semibold text-text-primary">Recent Orders</h2>
			<a href={p('/account/orders')} class="text-sm font-medium text-accent-primary hover:underline">View all</a>
		</div>
		<div class="glass-panel mt-4 overflow-hidden">
			{#each recentOrders as order, i}
				<div class="flex items-center justify-between px-5 py-4 {i > 0 ? 'border-t border-border' : ''}">
					<div>
						<p class="text-sm font-medium text-text-primary">{order.item}</p>
						<p class="text-xs text-text-secondary">{order.id} &middot; {order.date}</p>
					</div>
					<div class="text-right">
						<p class="text-sm font-semibold text-text-primary">{order.total}</p>
						<span class="rounded-full bg-accent-primary/10 px-2 py-0.5 text-xs font-medium text-accent-primary">{order.status}</span>
					</div>
				</div>
			{/each}
		</div>
	</div>

	<!-- Activity -->
	<div class="mt-8">
		<h2 class="font-display text-lg font-semibold text-text-primary">Recent Activity</h2>
		<div class="mt-4 space-y-3">
			{#each activityFeed as activity}
				<div class="glass-panel flex items-start gap-3 p-4">
					<div class="mt-0.5 h-2 w-2 shrink-0 rounded-full bg-accent-primary"></div>
					<div>
						<p class="text-sm text-text-primary">{activity.text}</p>
						<p class="mt-0.5 text-xs text-text-secondary">{activity.time}</p>
					</div>
				</div>
			{/each}
		</div>
	</div>
</div>
