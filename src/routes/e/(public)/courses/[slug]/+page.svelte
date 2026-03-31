<script lang="ts">
	import { withPrefix } from '$lib/data/utils.js';
	import type { Course, Module } from '$lib/data/mock.js';
	import { testimonials } from '$lib/data/mock.js';
	import {
		ArrowRight, BookOpen, Check, CheckCircle, ChevronDown, ChevronUp,
		Circle, Clock, FileText, GraduationCap, HelpCircle, Play, Star,
		Trophy, Users, Video
	} from 'lucide-svelte';

	const p = (href: string) => withPrefix('/e', href);

	let { data } = $props();
	let course: Course = $derived(data.course);
	let modules: Module[] = $derived(data.modules);

	let expandedModules = $state<Set<number>>(new Set([0]));

	function toggleModule(index: number) {
		const newSet = new Set(expandedModules);
		if (newSet.has(index)) newSet.delete(index);
		else newSet.add(index);
		expandedModules = newSet;
	}

	function getModuleDuration(mod: Module): string {
		let totalMinutes = 0;
		for (const lesson of mod.lessons) {
			const parts = lesson.duration.split(':');
			totalMinutes += parseInt(parts[0]) + (parseInt(parts[1]) || 0) / 60;
		}
		return `${Math.round(totalMinutes)} min`;
	}

	function getDifficultyColor(difficulty: Course['difficulty']): string {
		switch (difficulty) {
			case 'Beginner': return 'bg-accent-primary/10 text-accent-primary';
			case 'Intermediate': return 'bg-accent-gold/10 text-accent-gold';
			case 'Advanced': return 'bg-red-100 text-red-700';
		}
	}

	const lessonIcons = { video: Video, reading: FileText, quiz: HelpCircle } as const;
	const totalLessons = $derived(modules.reduce((sum, m) => sum + m.lessons.length, 0));
	const completedLessons = $derived(modules.reduce((sum, m) => sum + m.lessons.filter((l) => l.completed).length, 0));

	const learningPoints = [
		'Understand the core beliefs and practices of Islam',
		'Build a consistent and meaningful prayer routine',
		'Navigate daily life with confidence as a Muslim',
		'Connect with a supportive community of fellow learners',
		'Develop a deeper relationship with the Quran',
		'Learn practical guidance for modern challenges'
	];

	const faqs = [
		{ question: 'Do I need any prior knowledge to take this course?', answer: 'Not at all. This course is designed for absolute beginners. We start from the very basics and build up gradually.' },
		{ question: 'How long do I have access to the course?', answer: 'Once you enroll, you have lifetime access to all course materials. You can revisit any lesson as many times as you need.' },
		{ question: 'Is there a certificate upon completion?', answer: 'Yes! When you complete all modules and pass the quizzes, you will receive a certificate of completion.' },
		{ question: 'Can I interact with the instructor?', answer: 'Absolutely. Each lesson has a discussion section where you can ask questions. The instructor regularly monitors and responds.' }
	];

	let openFaq = $state<number | null>(null);
</script>

<svelte:head>
	<title>{course.title} — Being Muslim Courses</title>
	<meta name="description" content={course.description} />
</svelte:head>

<!-- Hero -->
<section class="flex items-center justify-center px-4 py-32">
	<div class="glass-panel mx-auto max-w-4xl p-10">
		<div class="grid items-center gap-8 lg:grid-cols-5">
			<div class="lg:col-span-3">
				<div class="flex items-center gap-3">
					<a href={p('/courses')} class="text-sm text-text-secondary transition-colors hover:text-accent-primary">Courses</a>
					<span class="text-text-secondary/40">/</span>
					<span class="text-sm text-text-secondary">{course.category}</span>
				</div>
				<h1 class="mt-4 font-display text-3xl font-semibold text-text-primary sm:text-4xl lg:text-5xl">{course.title}</h1>
				<p class="mt-4 text-lg leading-relaxed text-text-secondary">{course.description}</p>
				<div class="mt-6 flex flex-wrap items-center gap-4">
					<span class="rounded-full px-2.5 py-0.5 text-xs font-medium {getDifficultyColor(course.difficulty)}">{course.difficulty}</span>
					<span class="flex items-center gap-1.5 text-sm text-text-secondary"><BookOpen class="h-4 w-4" />{course.lessonCount} lessons</span>
					<span class="flex items-center gap-1.5 text-sm text-text-secondary"><Clock class="h-4 w-4" />{course.duration}</span>
					{#if course.enrolled}<span class="flex items-center gap-1.5 text-sm text-text-secondary"><Users class="h-4 w-4" />{course.enrolled.toLocaleString()} enrolled</span>{/if}
				</div>
				<div class="mt-6 flex items-center gap-3">
					<div class="flex h-10 w-10 items-center justify-center rounded-full bg-accent-primary/10 text-sm font-bold text-accent-primary">{course.instructor.split(' ').map((n) => n[0]).join('')}</div>
					<div>
						<p class="text-sm font-medium text-text-primary">{course.instructor}</p>
						<p class="text-xs text-text-secondary">Course Instructor</p>
					</div>
				</div>
				<div class="mt-8 flex flex-wrap gap-3">
					<button onclick={() => { const el = document.getElementById('curriculum'); el?.scrollIntoView({ behavior: 'smooth' }); }} class="glow inline-flex items-center gap-2 rounded-full bg-accent-primary px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-accent-primary/90">Enroll Now — Free <ArrowRight class="h-5 w-5" /></button>
					<button class="glow inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium text-text-primary"><Play class="h-5 w-5" /> Preview Course</button>
				</div>
			</div>
			<div class="lg:col-span-2">
				<div class="glass-panel overflow-hidden">
					<div class="relative aspect-video bg-gradient-to-br from-accent-primary/15 to-accent-gold/10">
						<div class="flex h-full items-center justify-center">
							<button class="flex h-16 w-16 items-center justify-center rounded-full bg-white/20 backdrop-blur transition-transform hover:scale-110"><Play class="ml-1 h-8 w-8 text-accent-primary" /></button>
						</div>
						<div class="absolute bottom-3 right-3 rounded-full bg-black/60 px-2 py-1 text-xs text-white">Preview</div>
					</div>
					<div class="p-5">
						<div class="space-y-3 text-sm text-text-secondary">
							<div class="flex items-center justify-between"><span class="flex items-center gap-2"><BookOpen class="h-4 w-4 text-accent-gold" />Lessons</span><span class="font-medium text-text-primary">{course.lessonCount}</span></div>
							<div class="flex items-center justify-between"><span class="flex items-center gap-2"><Clock class="h-4 w-4 text-accent-gold" />Duration</span><span class="font-medium text-text-primary">{course.duration}</span></div>
							<div class="flex items-center justify-between"><span class="flex items-center gap-2"><GraduationCap class="h-4 w-4 text-accent-gold" />Level</span><span class="font-medium text-text-primary">{course.difficulty}</span></div>
							<div class="flex items-center justify-between"><span class="flex items-center gap-2"><Trophy class="h-4 w-4 text-accent-gold" />Certificate</span><span class="font-medium text-text-primary">Yes</span></div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<div class="relative -mt-1"><svg viewBox="0 0 1440 60" fill="none" class="w-full"><path d="M0 30C240 50 480 10 720 30C960 50 1200 10 1440 30V60H0V30Z" fill="currentColor" class="text-bg-primary/30" /></svg></div>

<!-- What You'll Learn -->
<section class="py-20 md:py-32">
	<div class="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
		<h2 class="font-display text-2xl font-semibold text-text-primary sm:text-3xl">What you'll learn</h2>
		<div class="mt-8 grid gap-4 sm:grid-cols-2">
			{#each learningPoints as point}
				<div class="flex items-start gap-3">
					<div class="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent-primary/15"><Check class="h-3 w-3 text-accent-primary" /></div>
					<span class="text-sm leading-relaxed text-text-secondary">{point}</span>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- SVG Wave -->
<div class="relative -mb-1"><svg viewBox="0 0 1440 60" fill="none" class="w-full"><path d="M0 30C240 50 480 10 720 30C960 50 1200 10 1440 30V60H0V30Z" fill="currentColor" class="text-white/20" /></svg></div>

<!-- Curriculum -->
<section id="curriculum" class="py-20 md:py-32">
	<div class="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
		<div class="flex items-end justify-between">
			<div>
				<h2 class="font-display text-2xl font-semibold text-text-primary sm:text-3xl">Course Curriculum</h2>
				<p class="mt-2 text-sm text-text-secondary">{modules.length} modules &middot; {totalLessons} lessons &middot; {course.duration}</p>
			</div>
			{#if completedLessons > 0}
				<div class="text-right">
					<p class="text-sm font-medium text-text-primary">{completedLessons} of {totalLessons} complete</p>
					<div class="mt-1.5 h-1.5 w-32 overflow-hidden rounded-full bg-border">
						<div class="h-full rounded-full bg-accent-primary" style="width: {(completedLessons / totalLessons) * 100}%"></div>
					</div>
				</div>
			{/if}
		</div>
		<div class="mt-8 space-y-3">
			{#each modules as mod, moduleIndex}
				{@const isExpanded = expandedModules.has(moduleIndex)}
				{@const moduleCompletedCount = mod.lessons.filter((l) => l.completed).length}
				<div class="glass-panel overflow-hidden">
					<button class="flex w-full items-center justify-between p-5 text-left transition-colors hover:bg-white/40" onclick={() => toggleModule(moduleIndex)}>
						<div class="flex items-center gap-4">
							<div class="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-accent-primary/10 text-sm font-bold text-accent-primary">{moduleIndex + 1}</div>
							<div>
								<h3 class="font-display text-base font-semibold text-text-primary">{mod.title}</h3>
								<p class="mt-0.5 text-xs text-text-secondary">{mod.lessons.length} lessons &middot; {getModuleDuration(mod)}{#if moduleCompletedCount > 0} &middot; <span class="text-accent-primary">{moduleCompletedCount}/{mod.lessons.length} complete</span>{/if}</p>
							</div>
						</div>
						{#if isExpanded}<ChevronUp class="h-5 w-5 shrink-0 text-text-secondary" />{:else}<ChevronDown class="h-5 w-5 shrink-0 text-text-secondary" />{/if}
					</button>
					{#if isExpanded}
						<div class="border-t border-border">
							{#each mod.lessons as lesson}
								{@const LessonIcon = lessonIcons[lesson.type]}
								<a href={p('/learn/' + course.slug + '/' + lesson.slug)} class="flex items-center gap-4 border-b border-border/50 px-5 py-3.5 transition-colors last:border-b-0 hover:bg-white/30">
									<div class="shrink-0">{#if lesson.completed}<CheckCircle class="h-5 w-5 text-accent-primary" />{:else}<Circle class="h-5 w-5 text-border" />{/if}</div>
									<div class="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg {lesson.type === 'video' ? 'bg-blue-50 text-blue-500' : lesson.type === 'reading' ? 'bg-amber-50 text-amber-600' : 'bg-purple-50 text-purple-500'}"><LessonIcon class="h-4 w-4" /></div>
									<div class="min-w-0 flex-1">
										<p class="text-sm font-medium {lesson.completed ? 'text-text-secondary line-through' : 'text-text-primary'}">{lesson.title}</p>
										<p class="text-xs text-text-secondary capitalize">{lesson.type}</p>
									</div>
									<span class="shrink-0 text-xs text-text-secondary">{lesson.duration}</span>
								</a>
							{/each}
						</div>
					{/if}
				</div>
			{/each}
		</div>
		<div class="mt-4 text-center">
			<button class="text-sm font-medium text-accent-primary hover:underline" onclick={() => { if (expandedModules.size === modules.length) expandedModules = new Set(); else expandedModules = new Set(modules.map((_, i) => i)); }}>
				{expandedModules.size === modules.length ? 'Collapse All' : 'Expand All'}
			</button>
		</div>
	</div>
</section>

<!-- Instructor -->
<section class="py-20 md:py-32">
	<div class="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
		<h2 class="font-display text-2xl font-semibold text-text-primary sm:text-3xl">Your Instructor</h2>
		<div class="glass-panel mt-8 flex flex-col items-start gap-6 p-8 sm:flex-row">
			<div class="flex h-24 w-24 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-accent-primary/20 to-accent-gold/20">
				<span class="font-display text-2xl font-bold text-accent-primary">{course.instructor.split(' ').map((n) => n[0]).join('')}</span>
			</div>
			<div>
				<h3 class="font-display text-xl font-semibold text-text-primary">{course.instructor}</h3>
				<p class="mt-1 text-sm text-accent-primary">Scholar & Educator</p>
				<p class="mt-3 leading-relaxed text-text-secondary">A dedicated educator with over 15 years of experience teaching Islamic studies. Known for making complex topics accessible and relatable, especially for those new to the faith.</p>
				<div class="mt-4 flex flex-wrap gap-4 text-sm text-text-secondary">
					<span class="flex items-center gap-1.5"><GraduationCap class="h-4 w-4 text-accent-gold" />4 courses</span>
					<span class="flex items-center gap-1.5"><Users class="h-4 w-4 text-accent-gold" />3,000+ students</span>
					<span class="flex items-center gap-1.5"><Star class="h-4 w-4 fill-accent-gold text-accent-gold" />4.9 rating</span>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- SVG Wave -->
<div class="relative -mb-1"><svg viewBox="0 0 1440 60" fill="none" class="w-full"><path d="M0 30C240 50 480 10 720 30C960 50 1200 10 1440 30V60H0V30Z" fill="currentColor" class="text-white/20" /></svg></div>

<!-- Testimonials -->
<section class="py-20 md:py-32">
	<div class="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
		<h2 class="font-display text-2xl font-semibold text-text-primary sm:text-3xl">What students are saying</h2>
		<div class="mt-8 grid gap-6 sm:grid-cols-3">
			{#each testimonials.slice(0, 3) as testimonial}
				<div class="glass-panel p-6">
					<div class="flex gap-0.5">{#each Array(5) as _}<Star class="h-4 w-4 fill-accent-gold text-accent-gold" />{/each}</div>
					<blockquote class="mt-4 text-sm leading-relaxed text-text-secondary">"{testimonial.quote}"</blockquote>
					<div class="mt-4 flex items-center gap-3">
						<div class="flex h-8 w-8 items-center justify-center rounded-full bg-accent-primary/10 text-xs font-bold text-accent-primary">{testimonial.name[0]}</div>
						<div>
							<p class="text-sm font-medium text-text-primary">{testimonial.name}</p>
							<p class="text-xs text-text-secondary">{testimonial.role}</p>
						</div>
					</div>
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

<!-- SVG Wave -->
<div class="relative -mb-1"><svg viewBox="0 0 1440 60" fill="none" class="w-full"><path d="M0 30C240 50 480 10 720 30C960 50 1200 10 1440 30V60H0V30Z" fill="currentColor" class="text-white/20" /></svg></div>

<!-- Bottom CTA -->
<section class="bg-[#1A2332] py-20 md:py-32">
	<div class="mx-auto max-w-[1200px] px-4 text-center sm:px-6 lg:px-8">
		<h2 class="font-display text-3xl font-semibold text-white sm:text-4xl">Ready to begin your learning journey?</h2>
		<p class="mx-auto mt-4 max-w-xl text-lg text-white/70">Join {course.enrolled?.toLocaleString() ?? 'hundreds of'} students already enrolled in {course.title}.</p>
		<div class="mt-8 flex flex-wrap items-center justify-center gap-4">
			<button class="glow inline-flex items-center gap-2 rounded-full bg-accent-primary px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-accent-primary/90">Enroll Now — Free <ArrowRight class="h-5 w-5" /></button>
			<a href={p('/courses')} class="text-sm font-medium text-white/70 hover:text-white">Browse all courses</a>
		</div>
	</div>
</section>

<!-- Mobile Sticky CTA -->
<div class="fixed bottom-0 left-0 right-0 z-40 border-t border-border bg-white/95 p-4 backdrop-blur sm:hidden">
	<button class="glow w-full rounded-full bg-accent-primary py-3 text-sm font-medium text-white">Enroll Now — Free</button>
</div>
<div class="h-20 sm:hidden"></div>
