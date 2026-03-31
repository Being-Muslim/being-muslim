<script lang="ts">
	import { withPrefix } from '$lib/data/utils.js';
	import { courses, type Course } from '$lib/data/mock.js';
	import { ArrowRight, BookOpen, Clock, Play, Search, SlidersHorizontal, Users, GraduationCap } from 'lucide-svelte';

	const p = (href: string) => withPrefix('/e', href);

	const difficulties = ['All', 'Beginner', 'Intermediate', 'Advanced'] as const;
	const categories = ['All', ...new Set(courses.map((c) => c.category))];

	let selectedDifficulty = $state<string>('All');
	let selectedCategory = $state<string>('All');
	let searchQuery = $state('');

	const featuredCourse = $derived(courses.find((c) => c.featured));

	const filteredCourses = $derived(
		courses.filter((c) => {
			const matchesDifficulty = selectedDifficulty === 'All' || c.difficulty === selectedDifficulty;
			const matchesCategory = selectedCategory === 'All' || c.category === selectedCategory;
			const matchesSearch = searchQuery === '' || c.title.toLowerCase().includes(searchQuery.toLowerCase()) || c.description.toLowerCase().includes(searchQuery.toLowerCase());
			return matchesDifficulty && matchesCategory && matchesSearch;
		})
	);

	function getDifficultyColor(difficulty: Course['difficulty']): string {
		switch (difficulty) {
			case 'Beginner': return 'bg-accent-primary/10 text-accent-primary';
			case 'Intermediate': return 'bg-accent-gold/10 text-accent-gold';
			case 'Advanced': return 'bg-red-100 text-red-700';
		}
	}
</script>

<svelte:head>
	<title>Courses — Being Muslim</title>
	<meta name="description" content="Structured courses designed by scholars and educators to guide you step by step on your Islamic journey." />
</svelte:head>

<!-- Hero -->
<section class="flex items-center justify-center px-4 py-32 text-center">
	<div class="glass-panel mx-auto max-w-3xl p-10">
		<span class="inline-flex items-center rounded-full bg-accent-primary/10 px-3 py-1 text-xs font-medium text-accent-primary">Structured Learning</span>
		<h1 class="mt-4 font-display text-4xl font-semibold text-text-primary sm:text-5xl">Courses</h1>
		<p class="mt-4 text-lg text-text-secondary">
			Comprehensive, self-paced courses designed by scholars and educators. Learn the foundations
			of Islam, deepen your prayer, explore the Quran, and more.
		</p>
		<div class="relative mx-auto mt-8 max-w-lg">
			<Search class="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-text-secondary" />
			<input type="text" bind:value={searchQuery} placeholder="Search courses..." class="h-12 w-full rounded-full border border-border bg-white/80 pl-12 pr-4 text-base text-text-primary placeholder:text-text-secondary/60 focus:border-accent-primary focus:outline-none focus:ring-2 focus:ring-accent-primary/20" />
		</div>
		<div class="mt-6 flex flex-wrap justify-center gap-2">
			{#each difficulties as diff}
				<button onclick={() => (selectedDifficulty = diff)} class="glow rounded-full px-4 py-2 text-sm font-medium transition-all {selectedDifficulty === diff ? 'bg-accent-primary text-white' : 'border border-border text-text-secondary hover:text-text-primary'}">{diff}</button>
			{/each}
		</div>
	</div>
</section>

<div class="relative -mt-1"><svg viewBox="0 0 1440 60" fill="none" class="w-full"><path d="M0 30C240 50 480 10 720 30C960 50 1200 10 1440 30V60H0V30Z" fill="currentColor" class="text-bg-primary/30" /></svg></div>

<!-- Featured Course -->
{#if featuredCourse}
	<section class="py-12">
		<div class="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
			<a href={p('/courses/' + featuredCourse.slug)} class="glass-panel glow group block overflow-hidden transition-all">
				<div class="grid lg:grid-cols-5">
					<div class="relative aspect-[16/9] bg-gradient-to-br from-accent-primary/15 to-accent-gold/10 lg:col-span-2 lg:aspect-auto">
						<div class="flex h-full items-center justify-center"><Play class="h-16 w-16 text-accent-primary/30" /></div>
						<div class="absolute top-4 left-4"><span class="rounded-full bg-accent-gold/90 px-3 py-1 text-xs font-medium text-white">Featured Course</span></div>
					</div>
					<div class="flex flex-col justify-center p-6 sm:p-8 lg:col-span-3">
						<div class="flex flex-wrap items-center gap-2">
							<span class="rounded-full px-2.5 py-0.5 text-xs font-medium {getDifficultyColor(featuredCourse.difficulty)}">{featuredCourse.difficulty}</span>
							<span class="text-sm text-text-secondary">{featuredCourse.category}</span>
						</div>
						<h2 class="mt-3 font-display text-2xl font-semibold text-text-primary transition-colors group-hover:text-accent-primary sm:text-3xl">{featuredCourse.title}</h2>
						<p class="mt-3 leading-relaxed text-text-secondary">{featuredCourse.description}</p>
						<div class="mt-6 flex flex-wrap items-center gap-6 text-sm text-text-secondary">
							<span class="flex items-center gap-1.5"><BookOpen class="h-4 w-4" />{featuredCourse.lessonCount} lessons</span>
							<span class="flex items-center gap-1.5"><Clock class="h-4 w-4" />{featuredCourse.duration}</span>
							{#if featuredCourse.enrolled}<span class="flex items-center gap-1.5"><Users class="h-4 w-4" />{featuredCourse.enrolled.toLocaleString()} enrolled</span>{/if}
						</div>
						<div class="mt-4"><span class="text-sm font-medium text-text-primary">by {featuredCourse.instructor}</span></div>
						<div class="mt-6"><span class="inline-flex items-center gap-1.5 text-sm font-medium text-accent-primary">Start Learning <ArrowRight class="h-4 w-4 transition-transform group-hover:translate-x-1" /></span></div>
					</div>
				</div>
			</a>
		</div>
	</section>
{/if}

<!-- Course Grid -->
<section class="py-12 sm:py-16">
	<div class="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
		<div class="text-sm text-text-secondary">
			{filteredCourses.length} {filteredCourses.length === 1 ? 'course' : 'courses'} found
		</div>

		{#if filteredCourses.length === 0}
			<div class="glass-panel mx-auto mt-12 max-w-md p-12 text-center">
				<GraduationCap class="mx-auto h-12 w-12 text-text-secondary/40" />
				<h3 class="mt-4 font-display text-xl font-semibold text-text-primary">No courses found</h3>
				<p class="mt-2 text-text-secondary">Try adjusting your filters or search terms.</p>
				<button class="glow mt-6 rounded-full border border-border px-5 py-2 text-sm font-medium text-text-primary" onclick={() => { selectedDifficulty = 'All'; selectedCategory = 'All'; searchQuery = ''; }}>Clear Filters</button>
			</div>
		{:else}
			<div class="mx-auto mt-6 grid max-w-4xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
				{#each filteredCourses as course (course.slug)}
					<a href={p('/courses/' + course.slug)} class="glass-panel glow group overflow-hidden transition-all">
						<div class="relative aspect-[16/9] bg-gradient-to-br from-accent-primary/15 to-accent-primary/5">
							<div class="flex h-full items-center justify-center"><Play class="h-12 w-12 text-accent-primary/20" /></div>
							<div class="absolute top-3 left-3"><span class="rounded-full px-2.5 py-0.5 text-xs font-medium {getDifficultyColor(course.difficulty)}">{course.difficulty}</span></div>
						</div>
						<div class="p-5">
							<span class="text-xs font-medium text-accent-primary">{course.category}</span>
							<h3 class="mt-2 font-display text-lg font-semibold leading-snug text-text-primary group-hover:text-accent-primary">{course.title}</h3>
							<p class="mt-2 text-sm leading-relaxed text-text-secondary line-clamp-2">{course.description}</p>
							<div class="mt-4 flex items-center justify-between text-xs text-text-secondary">
								<span class="font-medium">{course.instructor}</span>
								<span class="flex items-center gap-3">
									<span class="flex items-center gap-1"><BookOpen class="h-3.5 w-3.5" />{course.lessonCount}</span>
									<span class="flex items-center gap-1"><Clock class="h-3.5 w-3.5" />{course.duration}</span>
								</span>
							</div>
							{#if course.enrolled}
								<div class="mt-3 border-t border-border/50 pt-3">
									<span class="flex items-center gap-1 text-xs text-text-secondary"><Users class="h-3.5 w-3.5" />{course.enrolled.toLocaleString()} enrolled</span>
								</div>
							{/if}
						</div>
					</a>
				{/each}
			</div>
		{/if}
	</div>
</section>
