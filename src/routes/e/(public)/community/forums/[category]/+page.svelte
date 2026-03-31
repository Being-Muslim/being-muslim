<script lang="ts">
	import { withPrefix } from '$lib/data/utils.js';
	import { sampleThreads } from '$lib/data/mock.js';
	import { ArrowLeft, Pin, CheckCircle, MessageCircle, ChevronRight } from 'lucide-svelte';
	import { page } from '$app/state';

	const p = (href: string) => withPrefix('/e', href);

	const categorySlug = $derived(page.params.category);
	const categoryTitle = $derived(categorySlug.replace(/-/g, ' ').replace(/\b\w/g, (c: string) => c.toUpperCase()));
</script>

<svelte:head>
	<title>{categoryTitle} — Being Muslim Forums</title>
</svelte:head>

<section class="flex items-center justify-center px-4 py-32 text-center">
	<div class="glass-panel mx-auto max-w-3xl p-10">
		<a href={p('/community/forums')} class="mb-6 inline-flex items-center gap-2 text-sm text-text-secondary transition-colors hover:text-accent-primary"><ArrowLeft class="h-4 w-4" /> Back to Forums</a>
		<h1 class="font-display text-4xl font-semibold text-text-primary sm:text-5xl">{categoryTitle}</h1>
		<p class="mt-4 text-lg text-text-secondary">{sampleThreads.length} active threads in this category</p>
	</div>
</section>

<div class="relative -mt-1"><svg viewBox="0 0 1440 60" fill="none" class="w-full"><path d="M0 30C240 50 480 10 720 30C960 50 1200 10 1440 30V60H0V30Z" fill="currentColor" class="text-bg-primary/30" /></svg></div>

<section class="py-12 sm:py-16">
	<div class="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
		<div class="mx-auto max-w-4xl">
			<div class="mb-6 flex items-center justify-between">
				<h2 class="font-display text-xl font-semibold text-text-primary">Threads</h2>
				<button class="glow rounded-full bg-accent-primary px-4 py-2 text-sm font-medium text-white">New Thread</button>
			</div>
			<div class="space-y-3">
				{#each sampleThreads as thread}
					<a href={p('/community/forums/' + categorySlug + '/' + thread.slug)} class="glass-panel glow group flex items-center gap-4 p-5 transition-all">
						<div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent-primary/10 text-sm font-bold text-accent-primary">{thread.author[0]}</div>
						<div class="min-w-0 flex-1">
							<div class="flex items-center gap-2">
								{#if thread.pinned}<Pin class="h-3.5 w-3.5 text-accent-gold" />{/if}
								{#if thread.solved}<CheckCircle class="h-3.5 w-3.5 text-accent-primary" />{/if}
								<h3 class="font-display text-base font-semibold text-text-primary group-hover:text-accent-primary">{thread.title}</h3>
							</div>
							<p class="mt-1 text-xs text-text-secondary">by <span class="font-medium text-text-primary">{thread.author}</span> &middot; Last reply {thread.lastReply}</p>
						</div>
						<div class="hidden shrink-0 items-center gap-1 text-sm text-text-secondary sm:flex"><MessageCircle class="h-4 w-4" /> {thread.replyCount}</div>
						<ChevronRight class="h-4 w-4 shrink-0 text-text-secondary group-hover:text-accent-primary" />
					</a>
				{/each}
			</div>
		</div>
	</div>
</section>
