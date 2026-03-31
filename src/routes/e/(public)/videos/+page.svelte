<script lang="ts">
	import { withPrefix } from '$lib/data/utils.js';
	import { videos } from '$lib/data/mock.js';
	import { Search, Play, Clock, Film } from 'lucide-svelte';

	const p = (href: string) => withPrefix('/e', href);

	let search = $state('');
	let activeCategory = $state<string>('All');
	const categories = ['All', ...new Set(videos.map((v) => v.category))];

	let filteredVideos = $derived.by(() => {
		let result = videos;
		if (activeCategory !== 'All') result = result.filter((v) => v.category === activeCategory);
		if (search.trim()) {
			const q = search.toLowerCase().trim();
			result = result.filter((v) => v.title.toLowerCase().includes(q) || v.description.toLowerCase().includes(q));
		}
		return result;
	});

	function formatDate(dateStr: string): string {
		return new Date(dateStr).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
	}
</script>

<svelte:head>
	<title>Video Library — Being Muslim</title>
	<meta name="description" content="Watch educational videos on Islamic prayer, Quran recitation, and foundational teachings." />
</svelte:head>

<section class="flex items-center justify-center px-4 py-32 text-center">
	<div class="glass-panel mx-auto max-w-3xl p-10">
		<span class="inline-flex items-center rounded-full bg-accent-primary/10 px-3 py-1 text-xs font-medium text-accent-primary">Visual Learning</span>
		<h1 class="mt-4 font-display text-4xl font-semibold text-text-primary sm:text-5xl">Video Library</h1>
		<p class="mt-4 text-lg text-text-secondary">Learn at your own pace with clear, step-by-step video guides.</p>
		<div class="relative mx-auto mt-8 max-w-lg">
			<Search class="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-text-secondary" />
			<input type="text" placeholder="Search videos..." bind:value={search} class="h-12 w-full rounded-full border border-border bg-white/80 pl-12 pr-4 text-base text-text-primary placeholder:text-text-secondary/60 focus:border-accent-primary focus:outline-none focus:ring-2 focus:ring-accent-primary/20" />
		</div>
		<div class="mt-6 flex flex-wrap justify-center gap-2">
			{#each categories as category}
				<button onclick={() => (activeCategory = category)} class="glow rounded-full px-4 py-2 text-sm font-medium transition-all {activeCategory === category ? 'bg-accent-primary text-white' : 'border border-border text-text-secondary hover:text-text-primary'}">{category}</button>
			{/each}
		</div>
	</div>
</section>

<div class="relative -mt-1"><svg viewBox="0 0 1440 60" fill="none" class="w-full"><path d="M0 30C240 50 480 10 720 30C960 50 1200 10 1440 30V60H0V30Z" fill="currentColor" class="text-bg-primary/30" /></svg></div>

<section class="py-12 sm:py-16">
	<div class="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
		{#if filteredVideos.length === 0}
			<div class="glass-panel mx-auto max-w-md p-12 text-center">
				<Film class="mx-auto h-12 w-12 text-text-secondary/40" />
				<h3 class="mt-4 font-display text-xl font-semibold text-text-primary">No videos found</h3>
				<p class="mt-2 text-text-secondary">Try adjusting your search or filter.</p>
				<button class="glow mt-6 rounded-full border border-border px-5 py-2 text-sm font-medium text-text-primary" onclick={() => { search = ''; activeCategory = 'All'; }}>Clear Filters</button>
			</div>
		{:else}
			<div class="mx-auto grid max-w-4xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
				{#each filteredVideos as video}
					<a href={p('/videos/' + video.slug)} class="glass-panel glow group overflow-hidden transition-all">
						<div class="relative aspect-video bg-gradient-to-br from-accent-primary/15 to-accent-primary/5">
							<div class="flex h-full items-center justify-center"><Film class="h-16 w-16 text-accent-primary/15" /></div>
							<div class="absolute inset-0 flex items-center justify-center">
								<div class="flex h-14 w-14 items-center justify-center rounded-full bg-accent-primary/90 text-white shadow-lg transition-transform group-hover:scale-110"><Play class="h-6 w-6 fill-current pl-0.5" /></div>
							</div>
							<div class="absolute bottom-3 right-3"><span class="rounded-full bg-black/60 px-2 py-1 text-xs font-medium text-white backdrop-blur-sm">{video.duration}</span></div>
							{#if video.featured}<div class="absolute top-3 left-3"><span class="rounded-full bg-accent-gold/90 px-2.5 py-0.5 text-xs font-medium text-white">Featured</span></div>{/if}
						</div>
						<div class="p-5">
							<div class="flex items-center gap-2">
								<span class="rounded-full bg-accent-primary/10 px-2.5 py-0.5 text-xs font-medium text-accent-primary">{video.category}</span>
								<span class="text-xs text-text-secondary">{formatDate(video.date)}</span>
							</div>
							<h2 class="mt-3 font-display text-lg font-semibold leading-snug text-text-primary group-hover:text-accent-primary">{video.title}</h2>
							<p class="mt-2 text-sm leading-relaxed text-text-secondary line-clamp-2">{video.description}</p>
							<div class="mt-4 flex items-center gap-2 text-sm font-medium text-accent-primary"><Play class="h-4 w-4" /> Watch Now</div>
						</div>
					</a>
				{/each}
			</div>
		{/if}
	</div>
</section>
