<script lang="ts">
	import { withPrefix } from '$lib/data/utils.js';
	import {
		ArrowLeft,
		ArrowRight,
		Check,
		CheckCircle,
		ChevronDown,
		ChevronUp,
		Circle,
		Clock,
		FileText,
		HelpCircle,
		Menu,
		Play,
		Video,
		X
	} from 'lucide-svelte';
	import { cn } from '$lib/utils/cn.js';

	const p = (href: string) => withPrefix('/d', href);

	let { data } = $props();
	let sidebarOpen = $state(false);
	let expandedModule = $state(data.currentModuleIndex);

	const progressPct = Math.round((data.completedCount / data.totalLessons) * 100);

	const lessonTypeIcon = (type: string) => {
		if (type === 'video') return Video;
		if (type === 'quiz') return HelpCircle;
		return FileText;
	};
</script>

<svelte:head>
	<title>{data.currentLesson.title} — {data.course.title}</title>
</svelte:head>

<div class="flex min-h-screen">
	<!-- Sidebar -->
	<aside
		class={cn(
			'fixed inset-y-0 left-0 z-40 w-72 shrink-0 overflow-y-auto border-r border-border bg-surface transition-transform lg:relative lg:translate-x-0',
			sidebarOpen ? 'translate-x-0' : '-translate-x-full'
		)}
	>
		<div class="p-5">
			<div class="flex items-center justify-between">
				<a
					href={p('/courses/' + data.course.slug)}
					class="inline-flex items-center gap-1 text-xs text-text-secondary hover:text-accent-primary"
				>
					<ArrowLeft class="h-3 w-3" /> Course
				</a>
				<button
					class="text-text-secondary lg:hidden"
					onclick={() => (sidebarOpen = false)}
				>
					<X class="h-5 w-5" />
				</button>
			</div>
			<h2 class="mt-4 font-display text-base font-light text-text-primary">
				{data.course.title}
			</h2>

			<!-- Progress -->
			<div class="mt-3">
				<div class="flex items-center justify-between text-xs text-text-secondary">
					<span>{data.completedCount}/{data.totalLessons} lessons</span>
					<span class="text-accent-primary">{progressPct}%</span>
				</div>
				<div class="mt-1.5 h-1 w-full overflow-hidden rounded-sm bg-border">
					<div
						class="h-full rounded-sm bg-accent-primary"
						style="width: {progressPct}%"
					></div>
				</div>
			</div>
		</div>

		<hr class="bronze-rule" />

		<!-- Module list -->
		<nav class="p-3">
			{#each data.modules as mod, mi}
				<div class="mb-1">
					<button
						onclick={() => (expandedModule = expandedModule === mi ? -1 : mi)}
						class="flex w-full items-center justify-between rounded-sm px-3 py-2 text-left text-xs {mi === data.currentModuleIndex
							? 'text-accent-primary'
							: 'text-text-secondary'}"
					>
						<span>Module {mi + 1}: {mod.title}</span>
						{#if expandedModule === mi}
							<ChevronUp class="h-3 w-3" />
						{:else}
							<ChevronDown class="h-3 w-3" />
						{/if}
					</button>
					{#if expandedModule === mi}
						<ul class="mt-1 ml-3 space-y-0.5">
							{#each mod.lessons as lesson}
								{@const Icon = lessonTypeIcon(lesson.type)}
								{@const isCurrent = lesson.slug === data.currentLesson.slug}
								<li>
									<a
										href={p(
											'/learn/' + data.course.slug + '/' + lesson.slug
										)}
										class={cn(
											'flex items-center gap-2 rounded-sm px-2 py-1.5 text-xs transition-colors',
											isCurrent
												? 'bg-accent-primary/10 text-accent-primary'
												: lesson.completed
													? 'text-text-secondary/60'
													: 'text-text-secondary hover:text-text-primary'
										)}
									>
										{#if lesson.completed}
											<CheckCircle class="h-3 w-3 shrink-0 text-accent-green" />
										{:else if isCurrent}
											<Play class="h-3 w-3 shrink-0" />
										{:else}
											<Circle class="h-3 w-3 shrink-0 text-text-secondary/30" />
										{/if}
										<span class="flex-1 truncate">{lesson.title}</span>
										<span class="text-[10px] text-text-secondary/50"
											>{lesson.duration}</span
										>
									</a>
								</li>
							{/each}
						</ul>
					{/if}
				</div>
			{/each}
		</nav>
	</aside>

	<!-- Overlay for mobile sidebar -->
	{#if sidebarOpen}
		<!-- svelte-ignore a11y_no_static_element_interactions -->
		<!-- svelte-ignore a11y_click_events_have_key_events -->
		<div
			class="fixed inset-0 z-30 bg-black/60 lg:hidden"
			onclick={() => (sidebarOpen = false)}
		></div>
	{/if}

	<!-- Main Content -->
	<div class="flex-1">
		<!-- Top bar -->
		<div class="flex items-center gap-3 border-b border-border px-4 py-3">
			<button
				class="text-text-secondary lg:hidden"
				onclick={() => (sidebarOpen = true)}
			>
				<Menu class="h-5 w-5" />
			</button>
			<div class="flex-1">
				<p class="text-xs text-text-secondary">
					Lesson {data.currentLessonNumber} of {data.totalLessons}
				</p>
				<h1 class="font-display text-base font-light text-text-primary">
					{data.currentLesson.title}
				</h1>
			</div>
			<span
				class="rounded-sm border border-border px-2 py-0.5 text-[10px] uppercase tracking-wider text-text-secondary"
			>
				{data.currentLesson.type}
			</span>
		</div>

		<!-- Lesson content -->
		<div class="mx-auto max-w-[900px] px-6 py-12">
			{#if data.currentLesson.type === 'video'}
				<div
					class="flex aspect-video items-center justify-center rounded-sm bg-surface"
				>
					<div class="text-center">
						<Play class="mx-auto h-16 w-16 text-accent-primary/30" />
						<p class="mt-3 text-sm text-text-secondary">Video player placeholder</p>
					</div>
				</div>
			{:else if data.currentLesson.type === 'quiz'}
				<div class="rounded-sm border border-border bg-surface p-8 text-center">
					<HelpCircle class="mx-auto h-12 w-12 text-accent-primary/30" />
					<h2 class="mt-4 font-display text-xl font-light text-text-primary">
						{data.currentLesson.title}
					</h2>
					<hr class="bronze-rule mx-auto my-4 w-10" />
					<p class="text-sm text-text-secondary">
						Test your understanding of the material covered in this module.
					</p>
					<button
						class="mt-6 rounded-sm bg-accent-primary px-6 py-2.5 text-sm text-bg-primary hover:bg-accent-hover"
					>
						Start Quiz
					</button>
				</div>
			{:else}
				<div class="rounded-sm border border-border bg-surface p-8">
					<FileText class="h-8 w-8 text-accent-primary/30" />
					<h2 class="mt-4 font-display text-xl font-light text-text-primary">
						{data.currentLesson.title}
					</h2>
					<hr class="bronze-rule my-4 w-10" />
					<p class="text-sm text-text-secondary leading-relaxed">
						This reading provides supplementary material to deepen your understanding of the
						topics covered in this module. Take your time and reflect on the key points.
					</p>
				</div>
			{/if}

			<!-- Description -->
			<div class="mt-8">
				<h3 class="font-display text-lg font-light text-text-primary">About This Lesson</h3>
				<hr class="bronze-rule my-3 w-10" />
				<p class="text-sm text-text-secondary leading-relaxed">
					This lesson is part of the "{data.currentModule.title}" module in {data.course
						.title}. Take your time to understand the material before moving on.
				</p>
				<div class="mt-3 flex items-center gap-3 text-xs text-text-secondary">
					<span class="flex items-center gap-1"
						><Clock class="h-3 w-3" /> {data.currentLesson.duration}</span
					>
					<span>{data.course.instructor}</span>
				</div>
			</div>

			<!-- Mark Complete + Navigation -->
			<div class="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
				<button
					class="inline-flex items-center gap-2 rounded-sm border border-accent-green px-5 py-2.5 text-sm text-accent-green transition-colors hover:bg-accent-green hover:text-bg-primary"
				>
					<Check class="h-4 w-4" /> Mark as Complete
				</button>

				<div class="flex gap-2">
					{#if data.prevLesson}
						<a
							href={p('/learn/' + data.course.slug + '/' + data.prevLesson.slug)}
							class="inline-flex items-center gap-1 rounded-sm border border-border px-4 py-2 text-xs text-text-secondary hover:text-text-primary"
						>
							<ArrowLeft class="h-3 w-3" /> Previous
						</a>
					{/if}
					{#if data.nextLesson}
						<a
							href={p('/learn/' + data.course.slug + '/' + data.nextLesson.slug)}
							class="inline-flex items-center gap-1 rounded-sm border border-accent-primary px-4 py-2 text-xs text-accent-primary hover:bg-accent-primary hover:text-bg-primary"
						>
							Next <ArrowRight class="h-3 w-3" />
						</a>
					{/if}
				</div>
			</div>
		</div>
	</div>
</div>
