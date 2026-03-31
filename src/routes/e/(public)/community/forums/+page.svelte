<script lang="ts">
	import { withPrefix } from '$lib/data/utils.js';
	import { forumCategories } from '$lib/data/mock.js';
	import { MessageCircle, MessageSquare, Heart, Hand as Hands, Sun, BookOpen, ChevronRight, ArrowLeft } from 'lucide-svelte';

	const p = (href: string) => withPrefix('/e', href);

	const iconMap: Record<string, typeof Heart> = {
		heart: Heart, hands: Hands, sun: Sun, book: BookOpen, message: MessageCircle
	};
</script>

<svelte:head>
	<title>Forums — Being Muslim Community</title>
	<meta name="description" content="Browse discussion forum categories. Ask questions and share knowledge." />
</svelte:head>

<section class="flex items-center justify-center px-4 py-32 text-center">
	<div class="glass-panel mx-auto max-w-3xl p-10">
		<a href={p('/community')} class="mb-6 inline-flex items-center gap-2 text-sm text-text-secondary transition-colors hover:text-accent-primary"><ArrowLeft class="h-4 w-4" /> Back to Community</a>
		<h1 class="font-display text-4xl font-semibold text-text-primary sm:text-5xl">Discussion Forums</h1>
		<p class="mt-4 text-lg text-text-secondary">Browse forum categories below. Ask questions, share experiences, and find support from the community.</p>
	</div>
</section>

<div class="relative -mt-1"><svg viewBox="0 0 1440 60" fill="none" class="w-full"><path d="M0 30C240 50 480 10 720 30C960 50 1200 10 1440 30V60H0V30Z" fill="currentColor" class="text-bg-primary/30" /></svg></div>

<section class="py-12 sm:py-16">
	<div class="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
		<div class="mx-auto max-w-4xl space-y-4">
			{#each forumCategories as category}
				{@const Icon = iconMap[category.icon] || MessageCircle}
				<a href={p('/community/forums/' + category.slug)} class="glass-panel glow group flex items-center gap-5 p-5 transition-all">
					<div class="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent-primary/10 text-accent-primary transition-colors group-hover:bg-accent-primary group-hover:text-white"><Icon class="h-5 w-5" /></div>
					<div class="min-w-0 flex-1">
						<h2 class="font-display text-lg font-semibold text-text-primary group-hover:text-accent-primary">{category.title}</h2>
						<p class="mt-1 text-sm text-text-secondary">{category.description}</p>
					</div>
					<div class="hidden shrink-0 text-right sm:block">
						<p class="text-sm font-semibold text-text-primary">{category.threadCount}</p>
						<p class="text-xs text-text-secondary">threads</p>
					</div>
					<div class="hidden shrink-0 text-right sm:block">
						<p class="text-xs text-text-secondary">Last activity</p>
						<p class="text-xs font-medium text-text-primary">{category.lastActivity}</p>
					</div>
					<ChevronRight class="h-5 w-5 shrink-0 text-text-secondary transition-transform group-hover:translate-x-1 group-hover:text-accent-primary" />
				</a>
			{/each}
		</div>
	</div>
</section>
