<script lang="ts">
	import { withPrefix } from '$lib/data/utils.js';
	import { Play, Clock, BookOpen, Bookmark, ArrowRight } from 'lucide-svelte';

	const p = (href: string) => withPrefix('/d', href);

	const enrolledCourses = [
		{
			slug: 'foundations-of-faith',
			title: 'Foundations of Faith',
			instructor: 'Dr. Asad Tarsin',
			progress: 35,
			lastLesson: 'The Shahada: Declaration of Faith',
			nextLessonSlug: 'the-shahada'
		},
		{
			slug: 'prayer-mastery',
			title: 'Prayer Mastery',
			instructor: 'Imam Ahmad',
			progress: 12,
			lastLesson: 'Module 1: Getting Started',
			nextLessonSlug: 'pillar-1-shahada'
		}
	];

	const savedArticles = [
		{ title: 'Understanding the Five Pillars of Islam', slug: 'understanding-the-five-pillars' },
		{ title: 'Your First Prayer: A Gentle Step-by-Step Guide', slug: 'your-first-prayer' }
	];
</script>

<svelte:head>
	<title>My Learning — Being Muslim</title>
</svelte:head>

<div>
	<span class="text-xs font-medium uppercase tracking-[0.2em] text-accent-primary">Account</span>
	<h1 class="mt-2 font-display text-3xl font-light">My Learning</h1>
	<hr class="bronze-rule my-5 w-12" />

	<!-- Enrolled Courses -->
	<h2 class="font-display text-xl font-light text-text-primary">Enrolled Courses</h2>
	<div class="mt-4 space-y-4">
		{#each enrolledCourses as course}
			<div class="rounded-sm border border-border bg-surface p-5">
				<div class="flex items-start gap-4">
					<div
						class="flex h-14 w-14 shrink-0 items-center justify-center rounded-sm bg-accent-primary/10"
					>
						<Play class="h-6 w-6 text-accent-primary" />
					</div>
					<div class="flex-1">
						<h3 class="font-display text-base font-light text-text-primary">
							{course.title}
						</h3>
						<p class="mt-0.5 text-xs text-text-secondary">{course.instructor}</p>
						<div class="mt-3 h-1 w-full overflow-hidden rounded-sm bg-border">
							<div
								class="h-full rounded-sm bg-accent-primary"
								style="width: {course.progress}%"
							></div>
						</div>
						<div class="mt-1 flex items-center justify-between text-xs text-text-secondary">
							<span>{course.progress}% complete</span>
							<span>Next: {course.lastLesson}</span>
						</div>
					</div>
				</div>
				<div class="mt-4 flex gap-2">
					<a
						href={p('/learn/' + course.slug + '/' + course.nextLessonSlug)}
						class="rounded-sm border border-accent-primary px-4 py-2 text-xs text-accent-primary transition-colors hover:bg-accent-primary hover:text-bg-primary"
					>
						Continue
					</a>
					<a
						href={p('/courses/' + course.slug)}
						class="rounded-sm border border-border px-4 py-2 text-xs text-text-secondary hover:text-text-primary"
					>
						View Course
					</a>
				</div>
			</div>
		{/each}
	</div>

	<hr class="bronze-rule my-8" />

	<!-- Saved Articles -->
	<h2 class="font-display text-xl font-light text-text-primary">Saved Articles</h2>
	<div class="mt-4 space-y-2">
		{#each savedArticles as article}
			<a
				href={p('/articles/' + article.slug)}
				class="group flex items-center gap-3 rounded-sm border border-border bg-surface p-4 transition-all hover:border-accent-primary/30"
			>
				<Bookmark class="h-4 w-4 text-accent-primary" />
				<span
					class="flex-1 text-sm text-text-primary group-hover:text-accent-primary"
					>{article.title}</span
				>
				<ArrowRight class="h-3.5 w-3.5 text-text-secondary" />
			</a>
		{/each}
	</div>

	<hr class="bronze-rule my-8" />

	<a
		href={p('/courses')}
		class="inline-flex items-center gap-2 rounded-sm border border-accent-primary px-5 py-2.5 text-sm text-accent-primary transition-colors hover:bg-accent-primary hover:text-bg-primary"
	>
		Browse More Courses <ArrowRight class="h-4 w-4" />
	</a>
</div>
