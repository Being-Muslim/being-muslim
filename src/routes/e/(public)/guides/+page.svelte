<script lang="ts">
	import { withPrefix } from '$lib/data/utils.js';
	import { guides } from '$lib/data/mock.js';
	import { BookOpen, Clock, ArrowRight, Compass } from 'lucide-svelte';

	const p = (href: string) => withPrefix('/e', href);
</script>

<svelte:head>
	<title>Guides — Being Muslim</title>
	<meta name="description" content="Step-by-step guides for new Muslims, prayer, and reconnecting with faith." />
</svelte:head>

<!-- Hero -->
<section class="flex items-center justify-center px-4 py-32 text-center">
	<div class="glass-panel mx-auto max-w-3xl p-10">
		<span class="inline-flex items-center rounded-full bg-accent-primary/10 px-3 py-1 text-xs font-medium text-accent-primary">Step-by-Step</span>
		<h1 class="mt-4 font-display text-4xl font-semibold text-text-primary sm:text-5xl">Guides</h1>
		<p class="mt-4 text-lg text-text-secondary">Practical, step-by-step guides to help you navigate the most important aspects of your journey. Start anywhere that feels right.</p>
	</div>
</section>

<div class="relative -mt-1"><svg viewBox="0 0 1440 60" fill="none" class="w-full"><path d="M0 30C240 50 480 10 720 30C960 50 1200 10 1440 30V60H0V30Z" fill="currentColor" class="text-bg-primary/30" /></svg></div>

<!-- Guides Grid -->
<section class="py-12 sm:py-16">
	<div class="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
		<div class="mx-auto grid max-w-4xl gap-8 sm:grid-cols-2">
			{#each guides as guide}
				<a href={p('/guides/' + guide.slug)} class="glass-panel glow group overflow-hidden transition-all">
					<div class="aspect-[16/9] bg-gradient-to-br from-accent-primary/15 to-accent-gold/10">
						<div class="flex h-full items-center justify-center"><Compass class="h-16 w-16 text-accent-primary/20" /></div>
					</div>
					<div class="p-6">
						<span class="rounded-full bg-accent-primary/10 px-2.5 py-0.5 text-xs font-medium text-accent-primary">{guide.category}</span>
						<h2 class="mt-3 font-display text-xl font-semibold text-text-primary group-hover:text-accent-primary">{guide.title}</h2>
						<p class="mt-2 text-sm leading-relaxed text-text-secondary">{guide.description}</p>
						<div class="mt-4 flex items-center justify-between">
							<div class="flex items-center gap-4 text-xs text-text-secondary">
								<span class="flex items-center gap-1"><BookOpen class="h-3.5 w-3.5" />{guide.stepCount} steps</span>
								<span class="flex items-center gap-1"><Clock class="h-3.5 w-3.5" />{guide.estimatedTime}</span>
							</div>
							<span class="flex items-center gap-1 text-sm font-medium text-accent-primary">Start Guide <ArrowRight class="h-4 w-4 transition-transform group-hover:translate-x-1" /></span>
						</div>
					</div>
				</a>
			{/each}
		</div>
	</div>
</section>
