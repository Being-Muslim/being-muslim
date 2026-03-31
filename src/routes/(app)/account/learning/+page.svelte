<script lang="ts">
	import { Button } from '$lib/components/ui/button/index.js';
	import { Badge } from '$lib/components/ui/badge/index.js';
	import { Progress } from '$lib/components/ui/progress/index.js';
	import * as Tabs from '$lib/components/ui/tabs/index.js';
	import { Play, Clock, BookOpen, Bookmark } from 'lucide-svelte';

	const inProgressCourses = [
		{
			title: 'Foundations of Faith',
			instructor: 'Dr. Asad Tarsin',
			progress: 65,
			lessonsCompleted: 16,
			totalLessons: 24,
			lastAccessed: '2 hours ago',
			difficulty: 'Beginner' as const,
			duration: '6 hours',
			slug: 'foundations-of-faith'
		},
		{
			title: 'Prayer Mastery',
			instructor: 'Imam Ahmad',
			progress: 30,
			lessonsCompleted: 5,
			totalLessons: 16,
			lastAccessed: '1 day ago',
			difficulty: 'Beginner' as const,
			duration: '4 hours',
			slug: 'prayer-mastery'
		},
		{
			title: 'Your Quran Journey',
			instructor: 'Ustadha Fatima',
			progress: 10,
			lessonsCompleted: 3,
			totalLessons: 32,
			lastAccessed: '5 days ago',
			difficulty: 'Beginner' as const,
			duration: '10 hours',
			slug: 'quran-journey'
		}
	];

	const completedCourses: typeof inProgressCourses = [];
	const savedCourses: typeof inProgressCourses = [];
</script>

<svelte:head>
	<title>My Learning - Being Muslim</title>
</svelte:head>

<div class="space-y-6">
	<div>
		<h1 class="font-display text-2xl font-bold text-text-primary sm:text-3xl">My Learning</h1>
		<p class="mt-1 text-text-secondary">Track your progress and continue where you left off.</p>
	</div>

	<Tabs.Root value="in-progress">
		<Tabs.List>
			{#snippet children()}
				<Tabs.Trigger value="in-progress">
					{#snippet children()}
						In Progress ({inProgressCourses.length})
					{/snippet}
				</Tabs.Trigger>
				<Tabs.Trigger value="completed">
					{#snippet children()}
						Completed ({completedCourses.length})
					{/snippet}
				</Tabs.Trigger>
				<Tabs.Trigger value="saved">
					{#snippet children()}
						Saved ({savedCourses.length})
					{/snippet}
				</Tabs.Trigger>
			{/snippet}
		</Tabs.List>

		<!-- In Progress Tab -->
		<Tabs.Content value="in-progress">
			{#snippet children()}
				<div class="mt-4 space-y-4">
					{#each inProgressCourses as course}
						<div class="rounded-xl border border-border bg-surface p-5 transition-all hover:shadow-md">
							<div class="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
								<div class="flex gap-4">
									<div class="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-accent-green/20 to-accent-primary/20">
										<Play class="h-6 w-6 text-accent-green/60" />
									</div>
									<div>
										<div class="flex flex-wrap items-center gap-2">
											<h3 class="font-display text-lg font-semibold text-text-primary">{course.title}</h3>
											<Badge variant={course.difficulty === 'Beginner' ? 'green' : 'secondary'}>
												{#snippet children()}{course.difficulty}{/snippet}
											</Badge>
										</div>
										<p class="mt-0.5 text-sm text-text-secondary">{course.instructor}</p>
										<div class="mt-2 flex flex-wrap items-center gap-3 text-xs text-text-secondary">
											<span class="flex items-center gap-1">
												<BookOpen class="h-3 w-3" />
												{course.lessonsCompleted}/{course.totalLessons} lessons
											</span>
											<span class="flex items-center gap-1">
												<Clock class="h-3 w-3" />
												{course.duration}
											</span>
											<span>Last accessed: {course.lastAccessed}</span>
										</div>
									</div>
								</div>
								<Button variant="default" size="sm" class="shrink-0">
									{#snippet children()}
										Continue
									{/snippet}
								</Button>
							</div>
							<div class="mt-4">
								<div class="flex items-center justify-between text-xs text-text-secondary">
									<span>{course.progress}% complete</span>
								</div>
								<Progress value={course.progress} class="mt-1.5 h-2" />
							</div>
						</div>
					{/each}
				</div>
			{/snippet}
		</Tabs.Content>

		<!-- Completed Tab -->
		<Tabs.Content value="completed">
			{#snippet children()}
				<div class="mt-8 flex flex-col items-center justify-center rounded-xl border border-dashed border-border bg-secondary/30 py-16 text-center">
					<div class="flex h-14 w-14 items-center justify-center rounded-full bg-secondary">
						<BookOpen class="h-7 w-7 text-text-secondary" />
					</div>
					<h3 class="mt-4 font-display text-lg font-semibold text-text-primary">No completed courses yet</h3>
					<p class="mt-2 max-w-sm text-sm text-text-secondary">
						Keep going with your current courses. You'll see them here once you finish.
					</p>
					<Button variant="outline" class="mt-6">
						{#snippet children()}
							Browse Courses
						{/snippet}
					</Button>
				</div>
			{/snippet}
		</Tabs.Content>

		<!-- Saved Tab -->
		<Tabs.Content value="saved">
			{#snippet children()}
				<div class="mt-8 flex flex-col items-center justify-center rounded-xl border border-dashed border-border bg-secondary/30 py-16 text-center">
					<div class="flex h-14 w-14 items-center justify-center rounded-full bg-secondary">
						<Bookmark class="h-7 w-7 text-text-secondary" />
					</div>
					<h3 class="mt-4 font-display text-lg font-semibold text-text-primary">No saved courses</h3>
					<p class="mt-2 max-w-sm text-sm text-text-secondary">
						Save courses you're interested in to come back to later.
					</p>
					<Button variant="outline" class="mt-6">
						{#snippet children()}
							Explore Courses
						{/snippet}
					</Button>
				</div>
			{/snippet}
		</Tabs.Content>
	</Tabs.Root>
</div>
