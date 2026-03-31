<script lang="ts">
	import { withPrefix } from '$lib/data/utils.js';
	import { ArrowLeft, ArrowRight, BookOpen, Check, Clock, ChevronLeft, ChevronRight } from 'lucide-svelte';

	const p = (href: string) => withPrefix('/e', href);

	let { data } = $props();
	let guide = $derived(data.guide);

	let currentStep = $state(0);

	const steps = [
		{ title: 'Welcome & Overview', content: 'This guide is designed to walk you through the most important concepts and practices at a pace that feels comfortable. There is no pressure to rush — take each step as it comes, and revisit any section as often as you need.' },
		{ title: 'Understanding the Basics', content: 'Before diving into specific practices, it helps to understand the foundational beliefs of Islam. At the heart of the faith is the concept of Tawheed — the oneness of God. Everything in Islam flows from this central truth.' },
		{ title: 'Your First Steps', content: 'Begin with small, consistent actions. Learning the basic prayers, understanding wudu (ablution), and reading short chapters of the Quran are all excellent starting points. The key is consistency, not perfection.' },
		{ title: 'Building Daily Habits', content: 'Islam encourages a balanced daily routine built around the five daily prayers. These prayers serve as anchor points throughout the day, creating natural moments of reflection and connection with God.' },
		{ title: 'Finding Community', content: 'One of the most important aspects of your journey is finding a supportive community. Whether online or in person, connecting with fellow Muslims can provide encouragement, answer questions, and help you feel less alone.' },
		{ title: 'Deepening Your Knowledge', content: 'As you settle into your practice, continue learning through courses, books, and scholarly guidance. The Being Muslim platform offers structured courses and resources designed for exactly this stage of the journey.' },
		{ title: 'Living Your Faith', content: 'Islam is not just a set of rituals — it is a complete way of life. As you grow in faith, you will find that Islamic principles naturally guide your decisions about food, relationships, work, and community engagement.' },
		{ title: 'Next Steps & Resources', content: 'You have completed this guide, but your journey continues. Explore our courses, join the community forums, and consider supporting other new Muslims through our sponsorship program. Every step forward matters.' }
	];

	const totalSteps = steps.length;
	const progress = $derived(((currentStep + 1) / totalSteps) * 100);
</script>

<svelte:head>
	<title>{guide.title} — Being Muslim Guides</title>
	<meta name="description" content={guide.description} />
</svelte:head>

<!-- Hero -->
<section class="flex items-center justify-center px-4 py-32">
	<div class="glass-panel mx-auto max-w-3xl p-10 text-center">
		<a href={p('/guides')} class="mb-6 inline-flex items-center gap-2 text-sm text-text-secondary transition-colors hover:text-accent-primary"><ArrowLeft class="h-4 w-4" /> Back to Guides</a>
		<div class="flex flex-wrap items-center justify-center gap-4">
			<span class="rounded-full bg-accent-primary/10 px-2.5 py-0.5 text-xs font-medium text-accent-primary">{guide.category}</span>
			<span class="flex items-center gap-1 text-sm text-text-secondary"><BookOpen class="h-4 w-4" />{guide.stepCount} steps</span>
			<span class="flex items-center gap-1 text-sm text-text-secondary"><Clock class="h-4 w-4" />{guide.estimatedTime}</span>
		</div>
		<h1 class="mt-4 font-display text-3xl font-semibold text-text-primary sm:text-4xl">{guide.title}</h1>
		<p class="mt-4 text-lg text-text-secondary">{guide.description}</p>
	</div>
</section>

<!-- Progress Bar -->
<div class="sticky top-16 z-30 border-b border-border bg-white/80 backdrop-blur-xl">
	<div class="mx-auto max-w-3xl px-4 py-3 sm:px-6 lg:px-8">
		<div class="flex items-center justify-between text-sm">
			<span class="font-medium text-text-primary">Step {currentStep + 1} of {totalSteps}</span>
			<span class="text-text-secondary">{Math.round(progress)}% complete</span>
		</div>
		<div class="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-border">
			<div class="h-full rounded-full bg-accent-primary transition-all duration-300" style="width: {progress}%"></div>
		</div>
	</div>
</div>

<!-- Step Content -->
<section class="py-12 sm:py-16">
	<div class="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
		<!-- Step Navigation -->
		<div class="mb-8 flex flex-wrap gap-2">
			{#each steps as step, i}
				<button onclick={() => (currentStep = i)} class="glow flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium transition-colors {i === currentStep ? 'bg-accent-primary text-white' : i < currentStep ? 'bg-accent-primary/10 text-accent-primary' : 'border border-border text-text-secondary'}">
					{#if i < currentStep}<Check class="h-3 w-3" />{/if}
					{i + 1}
				</button>
			{/each}
		</div>

		<!-- Current Step -->
		<div class="glass-panel p-8 sm:p-10">
			<h2 class="font-display text-2xl font-semibold text-text-primary sm:text-3xl">{steps[currentStep].title}</h2>
			<p class="mt-6 text-lg leading-relaxed text-text-secondary">{steps[currentStep].content}</p>
		</div>

		<!-- Navigation Buttons -->
		<div class="mt-8 flex items-center justify-between">
			<button onclick={() => { if (currentStep > 0) currentStep--; }} disabled={currentStep === 0} class="glow inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-medium text-text-primary disabled:opacity-40">
				<ChevronLeft class="h-4 w-4" /> Previous
			</button>
			{#if currentStep < totalSteps - 1}
				<button onclick={() => currentStep++} class="glow inline-flex items-center gap-2 rounded-full bg-accent-primary px-5 py-2.5 text-sm font-medium text-white">Next Step <ChevronRight class="h-4 w-4" /></button>
			{:else}
				<a href={p('/guides')} class="glow inline-flex items-center gap-2 rounded-full bg-accent-primary px-5 py-2.5 text-sm font-medium text-white">Explore More Guides <ArrowRight class="h-4 w-4" /></a>
			{/if}
		</div>
	</div>
</section>
