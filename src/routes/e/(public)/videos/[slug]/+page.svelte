<script lang="ts">
	import { withPrefix } from '$lib/data/utils.js';
	import { ArrowLeft, Play, Calendar, Clock, Share2, Film, ThumbsUp, Bookmark } from 'lucide-svelte';

	const p = (href: string) => withPrefix('/e', href);

	let { data } = $props();
	let video = $derived(data.video);
	let relatedVideos = $derived(data.relatedVideos);

	function formatDate(dateStr: string): string {
		return new Date(dateStr).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
	}
</script>

<svelte:head>
	<title>{video.title} — Being Muslim</title>
	<meta name="description" content={video.description} />
</svelte:head>

<!-- Video Player -->
<section class="px-4 pt-32 pb-8">
	<div class="mx-auto max-w-[1000px]">
		<a href={p('/videos')} class="mb-6 inline-flex items-center gap-2 text-sm text-text-secondary transition-colors hover:text-accent-primary">
			<ArrowLeft class="h-4 w-4" /> Back to Videos
		</a>
		<div class="glass-panel overflow-hidden">
			<div class="relative aspect-video w-full bg-gradient-to-br from-accent-primary/15 to-accent-primary/5">
				<div class="absolute inset-0 flex items-center justify-center">
					<Film class="h-24 w-24 text-accent-primary/10 sm:h-32 sm:w-32" />
				</div>
				<div class="absolute inset-0 flex items-center justify-center">
					<button class="glow group flex h-20 w-20 items-center justify-center rounded-full bg-accent-primary/90 text-white shadow-2xl transition-all hover:scale-110 sm:h-24 sm:w-24" aria-label="Play video">
						<Play class="h-8 w-8 fill-current pl-1 sm:h-10 sm:w-10" />
					</button>
				</div>
				<div class="absolute bottom-4 right-4 flex items-center gap-1.5 rounded-full bg-black/60 px-3 py-1.5 text-sm font-medium text-white backdrop-blur-sm">
					<Clock class="h-3.5 w-3.5" />
					{video.duration}
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Video Info -->
<section class="pb-12">
	<div class="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
		<div class="glass-panel p-8 sm:p-10">
			<div class="flex flex-wrap items-center gap-3">
				<span class="rounded-full bg-accent-primary/10 px-3 py-1 text-xs font-medium text-accent-primary">{video.category}</span>
				<span class="flex items-center gap-1 text-sm text-text-secondary">
					<Calendar class="h-3.5 w-3.5" />
					{formatDate(video.date)}
				</span>
				<span class="flex items-center gap-1 text-sm text-text-secondary">
					<Clock class="h-3.5 w-3.5" />
					{video.duration}
				</span>
			</div>
			<h1 class="mt-4 font-display text-3xl font-semibold text-text-primary sm:text-4xl">{video.title}</h1>
			<p class="mt-4 text-lg leading-relaxed text-text-secondary">{video.description}</p>

			<div class="mt-6 space-y-4 text-text-secondary">
				<p>
					In this video, we walk through the essential concepts step by step. Whether you are
					a complete beginner or revisiting the fundamentals, this guide is designed to meet
					you where you are.
				</p>
				<p>
					Topics covered include an overview of key terminology, practical demonstrations,
					common mistakes to avoid, and tips for building a consistent practice.
				</p>
			</div>

			<div class="mt-8 flex flex-wrap gap-3">
				<button class="glow inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-medium text-text-primary">
					<Share2 class="h-4 w-4" /> Share
				</button>
				<button class="glow inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-medium text-text-primary">
					<Bookmark class="h-4 w-4" /> Save
				</button>
				<button class="glow inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-medium text-text-primary">
					<ThumbsUp class="h-4 w-4" /> Helpful
				</button>
			</div>
		</div>
	</div>
</section>

<!-- SVG Wave -->
<div class="relative -mb-1">
	<svg viewBox="0 0 1440 60" fill="none" class="w-full"><path d="M0 30C240 50 480 10 720 30C960 50 1200 10 1440 30V60H0V30Z" fill="currentColor" class="text-white/20" /></svg>
</div>

<!-- Related Videos -->
{#if relatedVideos.length > 0}
	<section class="py-20 md:py-32">
		<div class="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
			<div class="mx-auto max-w-3xl text-center">
				<h2 class="font-display text-3xl font-semibold text-text-primary">Related Videos</h2>
				<p class="mt-2 text-text-secondary">Continue learning with more video content</p>
			</div>
			<div class="mx-auto mt-10 grid max-w-4xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
				{#each relatedVideos as related}
					<a href={p('/videos/' + related.slug)} class="glass-panel glow group overflow-hidden transition-all">
						<div class="relative aspect-video bg-gradient-to-br from-accent-primary/15 to-accent-primary/5">
							<div class="flex h-full items-center justify-center"><Film class="h-12 w-12 text-accent-primary/15" /></div>
							<div class="absolute inset-0 flex items-center justify-center">
								<div class="flex h-12 w-12 items-center justify-center rounded-full bg-accent-primary/90 text-white transition-transform group-hover:scale-110"><Play class="h-5 w-5 fill-current pl-0.5" /></div>
							</div>
							<div class="absolute bottom-3 right-3"><span class="rounded-full bg-black/60 px-2 py-1 text-xs font-medium text-white backdrop-blur-sm">{related.duration}</span></div>
						</div>
						<div class="p-5">
							<span class="rounded-full bg-accent-primary/10 px-2.5 py-0.5 text-xs font-medium text-accent-primary">{related.category}</span>
							<h3 class="mt-3 font-display text-lg font-semibold leading-snug text-text-primary group-hover:text-accent-primary">{related.title}</h3>
							<p class="mt-2 text-sm text-text-secondary line-clamp-2">{related.description}</p>
						</div>
					</a>
				{/each}
			</div>
			<div class="mt-10 text-center">
				<a href={p('/videos')} class="glow inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-medium text-text-primary hover:border-accent-primary/30 hover:text-accent-primary">
					Browse All Videos <Play class="h-4 w-4" />
				</a>
			</div>
		</div>
	</section>
{/if}
