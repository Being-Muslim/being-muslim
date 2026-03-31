<script lang="ts">
	import { withPrefix } from '$lib/data/utils.js';
	import { articles, articleCategories } from '$lib/data/mock.js';
	import { Search, BookOpen, Clock, Calendar, ArrowRight } from 'lucide-svelte';

	const p = (href: string) => withPrefix('/e', href);

	let search = $state('');
	let activeCategory = $state<string>('All');

	let filteredArticles = $derived.by(() => {
		let result = articles;
		if (activeCategory !== 'All') result = result.filter((a) => a.category === activeCategory);
		if (search.trim()) {
			const q = search.toLowerCase().trim();
			result = result.filter((a) => a.title.toLowerCase().includes(q) || a.excerpt.toLowerCase().includes(q) || a.author.toLowerCase().includes(q));
		}
		return result;
	});

	function formatDate(dateStr: string): string {
		return new Date(dateStr).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
	}
</script>

<svelte:head>
	<title>Resources & Articles — Being Muslim</title>
	<meta name="description" content="Explore articles and resources on Islamic faith, prayer, fasting, community, and daily life." />
</svelte:head>

<!-- Hero -->
<section class="flex items-center justify-center px-4 py-32 text-center">
	<div class="glass-panel mx-auto max-w-3xl p-10">
		<span class="inline-flex items-center rounded-full bg-accent-primary/10 px-3 py-1 text-xs font-medium text-accent-primary">Knowledge & Guidance</span>
		<h1 class="mt-4 font-display text-4xl font-semibold text-text-primary sm:text-5xl">Resources & Articles</h1>
		<p class="mt-4 text-lg text-text-secondary">
			Thoughtful articles to guide you on every step of your Islamic journey.
		</p>

		<!-- Search -->
		<div class="relative mx-auto mt-8 max-w-lg">
			<Search class="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-text-secondary" />
			<input type="text" placeholder="Search articles..." bind:value={search} class="h-12 w-full rounded-full border border-border bg-white/80 pl-12 pr-4 text-base text-text-primary placeholder:text-text-secondary/60 focus:border-accent-primary focus:outline-none focus:ring-2 focus:ring-accent-primary/20" />
		</div>

		<!-- Category Filter -->
		<div class="mt-6 flex flex-wrap justify-center gap-2">
			{#each articleCategories as category}
				<button onclick={() => (activeCategory = category)} class="glow rounded-full px-4 py-2 text-sm font-medium transition-all {activeCategory === category ? 'bg-accent-primary text-white' : 'border border-border text-text-secondary hover:border-accent-primary/30 hover:text-text-primary'}">
					{category}
				</button>
			{/each}
		</div>
	</div>
</section>

<!-- SVG Wave -->
<div class="relative -mt-1">
	<svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full">
		<path d="M0 30C240 50 480 10 720 30C960 50 1200 10 1440 30V60H0V30Z" fill="currentColor" class="text-bg-primary/30" />
	</svg>
</div>

<!-- Articles Grid -->
<section class="py-12 sm:py-16">
	<div class="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
		{#if filteredArticles.length === 0}
			<div class="glass-panel mx-auto max-w-md p-12 text-center">
				<BookOpen class="mx-auto h-12 w-12 text-text-secondary/40" />
				<h3 class="mt-4 font-display text-xl font-semibold text-text-primary">No articles found</h3>
				<p class="mt-2 text-text-secondary">Try adjusting your search or filter.</p>
				<button class="glow mt-6 rounded-full border border-border px-5 py-2 text-sm font-medium text-text-primary" onclick={() => { search = ''; activeCategory = 'All'; }}>
					Clear Filters
				</button>
			</div>
		{:else}
			<div class="mx-auto grid max-w-4xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
				{#each filteredArticles as article}
					<a href={p('/articles/' + article.slug)} class="glass-panel glow group overflow-hidden transition-all">
						<div class="aspect-[16/10] bg-gradient-to-br from-accent-primary/10 to-accent-gold/10">
							<div class="flex h-full items-center justify-center">
								<BookOpen class="h-12 w-12 text-accent-primary/30" />
							</div>
						</div>
						<div class="p-5">
							<div class="flex items-center gap-2">
								<span class="rounded-full bg-accent-primary/10 px-2.5 py-0.5 text-xs font-medium text-accent-primary">{article.category}</span>
								<span class="flex items-center gap-1 text-xs text-text-secondary">
									<Clock class="h-3 w-3" />{article.readingTime}
								</span>
							</div>
							<h2 class="mt-3 font-display text-lg font-semibold leading-snug text-text-primary transition-colors group-hover:text-accent-primary">{article.title}</h2>
							<p class="mt-2 text-sm leading-relaxed text-text-secondary line-clamp-2">{article.excerpt}</p>
							<div class="mt-4 flex items-center justify-between border-t border-border/50 pt-4">
								<div class="flex items-center gap-2">
									<div class="flex h-7 w-7 items-center justify-center rounded-full bg-accent-primary/10 text-xs font-bold text-accent-primary">{article.author[0]}</div>
									<span class="text-xs font-medium text-text-primary">{article.author}</span>
								</div>
								<span class="flex items-center gap-1 text-xs text-text-secondary">
									<Calendar class="h-3 w-3" />{formatDate(article.date)}
								</span>
							</div>
						</div>
					</a>
				{/each}
			</div>
		{/if}
	</div>
</section>
