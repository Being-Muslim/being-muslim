<script lang="ts">
	import { withPrefix } from '$lib/data/utils.js';
	import { courses } from '$lib/data/mock.js';
	import { BookOpen, Clock, Play, Trophy, ArrowRight } from 'lucide-svelte';

	const p = (href: string) => withPrefix('/e', href);

	let activeTab = $state<'in-progress' | 'completed' | 'saved'>('in-progress');

	const inProgressCourses = courses.slice(0, 2).map((c) => ({ ...c, progress: Math.floor(Math.random() * 60 + 20) }));
	const completedCourses = courses.slice(2, 3).map((c) => ({ ...c, progress: 100 }));
	const savedCourses = courses.slice(3);
</script>

<svelte:head>
	<title>My Learning — Being Muslim</title>
</svelte:head>

<div>
	<h1 class="font-display text-2xl font-semibold text-text-primary sm:text-3xl">My Learning</h1>
	<p class="mt-1 text-text-secondary">Track your progress and continue learning.</p>

	<!-- Tabs -->
	<div class="glass-panel mt-6 flex gap-1 p-1">
		{#each [
			{ key: 'in-progress', label: 'In Progress', count: inProgressCourses.length },
			{ key: 'completed', label: 'Completed', count: completedCourses.length },
			{ key: 'saved', label: 'Saved', count: savedCourses.length }
		] as tab}
			<button
				onclick={() => (activeTab = tab.key as typeof activeTab)}
				class="flex-1 rounded-full px-3 py-2 text-sm font-medium transition-colors {activeTab === tab.key ? 'bg-accent-primary text-white' : 'text-text-secondary hover:text-text-primary'}"
			>
				{tab.label} ({tab.count})
			</button>
		{/each}
	</div>

	<!-- Course List -->
	<div class="mt-6 space-y-4">
		{#if activeTab === 'in-progress'}
			{#each inProgressCourses as course}
				<a href={p('/courses/' + course.slug)} class="glass-panel glow group flex gap-4 p-5 transition-all">
					<div class="flex h-20 w-20 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-accent-primary/10 to-accent-gold/10">
						<Play class="h-8 w-8 text-accent-primary/40" />
					</div>
					<div class="flex-1">
						<h3 class="font-display text-lg font-semibold text-text-primary group-hover:text-accent-primary">{course.title}</h3>
						<p class="mt-1 text-sm text-text-secondary">{course.instructor} &middot; {course.lessonCount} lessons &middot; {course.duration}</p>
						<div class="mt-3 flex items-center gap-3">
							<div class="h-2 flex-1 overflow-hidden rounded-full bg-border">
								<div class="h-full rounded-full bg-accent-primary" style="width: {course.progress}%"></div>
							</div>
							<span class="text-xs font-medium text-text-primary">{course.progress}%</span>
						</div>
					</div>
					<div class="flex items-center">
						<span class="glow inline-flex items-center gap-1 rounded-full bg-accent-primary px-4 py-2 text-xs font-medium text-white">Continue <ArrowRight class="h-3 w-3" /></span>
					</div>
				</a>
			{/each}
		{:else if activeTab === 'completed'}
			{#each completedCourses as course}
				<div class="glass-panel flex gap-4 p-5">
					<div class="flex h-20 w-20 shrink-0 items-center justify-center rounded-xl bg-accent-primary/10">
						<Trophy class="h-8 w-8 text-accent-primary" />
					</div>
					<div class="flex-1">
						<h3 class="font-display text-lg font-semibold text-text-primary">{course.title}</h3>
						<p class="mt-1 text-sm text-text-secondary">{course.instructor} &middot; Completed</p>
						<div class="mt-2 flex items-center gap-2">
							<span class="rounded-full bg-accent-primary/10 px-2.5 py-0.5 text-xs font-medium text-accent-primary">Certificate Available</span>
						</div>
					</div>
				</div>
			{/each}
		{:else}
			{#each savedCourses as course}
				<a href={p('/courses/' + course.slug)} class="glass-panel glow group flex gap-4 p-5 transition-all">
					<div class="flex h-20 w-20 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-accent-primary/10 to-accent-gold/10">
						<BookOpen class="h-8 w-8 text-accent-primary/40" />
					</div>
					<div class="flex-1">
						<h3 class="font-display text-lg font-semibold text-text-primary group-hover:text-accent-primary">{course.title}</h3>
						<p class="mt-1 text-sm text-text-secondary">{course.instructor} &middot; {course.lessonCount} lessons</p>
					</div>
					<div class="flex items-center">
						<span class="glow inline-flex items-center gap-1 rounded-full border border-border px-4 py-2 text-xs font-medium text-text-primary">Start <ArrowRight class="h-3 w-3" /></span>
					</div>
				</a>
			{/each}
		{/if}
	</div>
</div>
