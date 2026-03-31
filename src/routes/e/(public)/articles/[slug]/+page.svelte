<script lang="ts">
	import { withPrefix } from '$lib/data/utils.js';
	import { ArrowLeft, ArrowRight, BookOpen, Calendar, Clock, Share2, ThumbsUp, ThumbsDown, Printer, List } from 'lucide-svelte';

	const p = (href: string) => withPrefix('/e', href);

	let { data } = $props();
	let article = $derived(data.article);
	let relatedArticles = $derived(data.relatedArticles);

	let feedbackGiven = $state<'up' | 'down' | null>(null);
	let showToc = $state(false);

	function formatDate(dateStr: string): string {
		return new Date(dateStr).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
	}

	const tableOfContents = [
		{ id: 'introduction', label: 'Introduction' },
		{ id: 'understanding-the-basics', label: 'Understanding the Basics' },
		{ id: 'practical-application', label: 'Practical Application' },
		{ id: 'common-questions', label: 'Common Questions' },
		{ id: 'next-steps', label: 'Next Steps' }
	];
</script>

<svelte:head>
	<title>{article.title} — Being Muslim</title>
	<meta name="description" content={article.excerpt} />
</svelte:head>

<!-- Hero -->
<section class="flex items-center justify-center px-4 py-32">
	<div class="glass-panel mx-auto max-w-3xl p-10 text-center">
		<a href={p('/articles')} class="mb-6 inline-flex items-center gap-2 text-sm text-text-secondary transition-colors hover:text-accent-primary">
			<ArrowLeft class="h-4 w-4" /> Back to Articles
		</a>

		<div class="flex flex-wrap items-center justify-center gap-3">
			<span class="rounded-full bg-accent-primary/10 px-3 py-1 text-xs font-medium text-accent-primary">{article.category}</span>
			<span class="flex items-center gap-1 text-sm text-text-secondary"><Clock class="h-4 w-4" />{article.readingTime}</span>
		</div>

		<h1 class="mt-4 font-display text-3xl font-semibold leading-tight text-text-primary sm:text-4xl lg:text-5xl">{article.title}</h1>
		<p class="mt-4 text-lg text-text-secondary">{article.excerpt}</p>

		<div class="mt-8 flex items-center justify-center gap-4">
			<div class="flex h-10 w-10 items-center justify-center rounded-full bg-accent-primary/10 text-sm font-bold text-accent-primary">{article.author[0]}</div>
			<div class="text-left">
				<p class="font-medium text-text-primary">{article.author}</p>
				<p class="flex items-center gap-1 text-sm text-text-secondary"><Calendar class="h-3.5 w-3.5" />{formatDate(article.date)}</p>
			</div>
		</div>
	</div>
</section>

<!-- SVG Wave -->
<div class="relative -mt-1">
	<svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full">
		<path d="M0 30C240 50 480 10 720 30C960 50 1200 10 1440 30V60H0V30Z" fill="currentColor" class="text-bg-primary/30" />
	</svg>
</div>

<!-- Article Content -->
<section class="py-12">
	<div class="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
		<div class="relative mx-auto max-w-5xl lg:grid lg:grid-cols-[1fr_240px] lg:gap-12">
			<article class="mx-auto max-w-3xl lg:mx-0">
				<!-- Mobile TOC -->
				<div class="mb-8 lg:hidden">
					<button onclick={() => (showToc = !showToc)} class="glass-panel flex w-full items-center gap-2 px-4 py-3 text-sm font-medium text-text-primary">
						<List class="h-4 w-4" /> Table of Contents
						<ArrowRight class="ml-auto h-4 w-4 transition-transform {showToc ? 'rotate-90' : ''}" />
					</button>
					{#if showToc}
						<nav class="glass-panel mt-2 p-4">
							<ul class="space-y-2">
								{#each tableOfContents as item}
									<li><a href="#{item.id}" class="text-sm text-text-secondary transition-colors hover:text-accent-primary" onclick={() => (showToc = false)}>{item.label}</a></li>
								{/each}
							</ul>
						</nav>
					{/if}
				</div>

				<!-- Article Body -->
				<div class="prose prose-lg max-w-none prose-headings:font-display prose-headings:font-semibold prose-headings:text-text-primary prose-p:text-text-secondary prose-p:leading-relaxed prose-a:text-accent-primary prose-a:no-underline hover:prose-a:underline prose-blockquote:border-l-accent-primary prose-blockquote:text-text-secondary prose-strong:text-text-primary">
					<section id="introduction">
						<h2>Introduction</h2>
						<p>Islam is a faith built on clear foundations. Whether you are entirely new to the religion or revisiting concepts you learned long ago, understanding these core principles is essential. This article will walk you through the key ideas in a way that is both accessible and rooted in authentic scholarship.</p>
						<p>The beauty of Islamic teaching lies in its balance between simplicity and depth. The basics are straightforward enough for any beginner, yet scholars have spent lifetimes exploring their nuances.</p>
					</section>

					<section id="understanding-the-basics">
						<h2>Understanding the Basics</h2>
						<p>At its core, Islam rests on a set of beliefs and practices that give life meaning and structure. The word "Islam" itself means submission to the will of God, and a Muslim is one who submits.</p>
						<blockquote><p>"The best of people are those who are most beneficial to others."<br /><em>— Prophet Muhammad (peace be upon him)</em></p></blockquote>
						<p>The five pillars of Islam provide the framework for Muslim life. Each one serves a deeper spiritual purpose.</p>
						<ul>
							<li><strong>Shahada</strong> — The declaration of faith.</li>
							<li><strong>Salah</strong> — The five daily prayers.</li>
							<li><strong>Zakat</strong> — Charitable giving.</li>
							<li><strong>Sawm</strong> — Fasting during Ramadan.</li>
							<li><strong>Hajj</strong> — The pilgrimage to Makkah.</li>
						</ul>
					</section>

					<section id="practical-application">
						<h2>Practical Application</h2>
						<p>Theory alone is not enough. Islam is a lived faith. Start small and build gradually.</p>
						<ol>
							<li><strong>Begin with the basics of prayer.</strong> Even learning one prayer at a time is meaningful.</li>
							<li><strong>Read a little Quran each day.</strong> Start with short chapters.</li>
							<li><strong>Connect with a community.</strong> Find a local mosque or online group.</li>
							<li><strong>Practice gratitude.</strong> Take moments each day to acknowledge blessings.</li>
						</ol>
					</section>

					<section id="common-questions">
						<h2>Common Questions</h2>
						<p>It is completely normal to have questions, and asking them is encouraged in Islam.</p>
						<p><strong>What if I make mistakes?</strong> Everyone does. God's forgiveness is always available.</p>
						<p><strong>Do I need to learn Arabic?</strong> You can begin in any language. Arabic is a long-term goal.</p>
						<p><strong>How do I handle reactions from family?</strong> Patience, kindness, and leading by example are most effective.</p>
					</section>

					<section id="next-steps">
						<h2>Next Steps</h2>
						<p>Your journey in faith is lifelong. Here are some resources:</p>
						<ul>
							<li>Explore our <a href={p('/guides/new-muslim')}>New Muslim Guide</a>.</li>
							<li>Watch our <a href={p('/videos/how-to-pray-step-by-step')}>step-by-step prayer video</a>.</li>
							<li>Join the <a href={p('/community')}>community forums</a>.</li>
						</ul>
					</section>
				</div>

				<!-- Share & Print -->
				<div class="mt-12 flex flex-wrap gap-3 border-t border-border pt-8">
					<button class="glow inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-medium text-text-primary"><Share2 class="h-4 w-4" /> Share</button>
					<button onclick={() => window.print()} class="glow inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-medium text-text-primary"><Printer class="h-4 w-4" /> Print</button>
				</div>

				<!-- Feedback -->
				<div class="glass-panel mt-12 p-8 text-center">
					<h3 class="font-display text-xl font-semibold text-text-primary">Was this article helpful?</h3>
					<p class="mt-2 text-sm text-text-secondary">Your feedback helps us create better content.</p>
					<div class="mt-6 flex justify-center gap-4">
						<button onclick={() => (feedbackGiven = 'up')} class="glow flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-all {feedbackGiven === 'up' ? 'bg-accent-primary/10 text-accent-primary ring-1 ring-accent-primary/30' : 'border border-border text-text-secondary hover:text-accent-primary'}">
							<ThumbsUp class="h-5 w-5" /> Yes, helpful
						</button>
						<button onclick={() => (feedbackGiven = 'down')} class="glow flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-all {feedbackGiven === 'down' ? 'bg-accent-gold/10 text-accent-gold ring-1 ring-accent-gold/30' : 'border border-border text-text-secondary hover:text-accent-gold'}">
							<ThumbsDown class="h-5 w-5" /> Not really
						</button>
					</div>
					{#if feedbackGiven}
						<p class="mt-4 text-sm text-text-secondary">Thank you for your feedback! {feedbackGiven === 'up' ? "We're glad it was helpful." : "We'll work on improving this content."}</p>
					{/if}
				</div>
			</article>

			<!-- Sticky TOC (Desktop) -->
			<aside class="hidden lg:block">
				<nav class="glass-panel sticky top-24 p-5">
					<h3 class="mb-4 text-xs font-semibold uppercase tracking-wider text-text-secondary">On this page</h3>
					<ul class="space-y-2 border-l border-border">
						{#each tableOfContents as item}
							<li><a href="#{item.id}" class="-ml-px block border-l-2 border-transparent py-1 pl-4 text-sm text-text-secondary transition-colors hover:border-accent-primary hover:text-accent-primary">{item.label}</a></li>
						{/each}
					</ul>
				</nav>
			</aside>
		</div>
	</div>
</section>

<!-- SVG Wave -->
<div class="relative -mb-1">
	<svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full">
		<path d="M0 30C240 50 480 10 720 30C960 50 1200 10 1440 30V60H0V30Z" fill="currentColor" class="text-white/20" />
	</svg>
</div>

<!-- Related Articles -->
<section class="py-20 md:py-32">
	<div class="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
		<div class="mx-auto max-w-3xl text-center">
			<h2 class="font-display text-3xl font-semibold text-text-primary">Related Articles</h2>
			<p class="mt-2 text-text-secondary">Continue exploring topics that interest you</p>
		</div>
		<div class="mx-auto mt-10 grid max-w-4xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
			{#each relatedArticles as related}
				<a href={p('/articles/' + related.slug)} class="glass-panel glow group overflow-hidden transition-all">
					<div class="aspect-[16/10] bg-gradient-to-br from-accent-primary/10 to-accent-gold/10">
						<div class="flex h-full items-center justify-center"><BookOpen class="h-12 w-12 text-accent-primary/30" /></div>
					</div>
					<div class="p-5">
						<div class="flex items-center gap-2">
							<span class="rounded-full bg-accent-primary/10 px-2.5 py-0.5 text-xs font-medium text-accent-primary">{related.category}</span>
							<span class="flex items-center gap-1 text-xs text-text-secondary"><Clock class="h-3 w-3" />{related.readingTime}</span>
						</div>
						<h3 class="mt-3 font-display text-lg font-semibold leading-snug text-text-primary group-hover:text-accent-primary">{related.title}</h3>
						<p class="mt-2 text-sm text-text-secondary line-clamp-2">{related.excerpt}</p>
					</div>
				</a>
			{/each}
		</div>
		<div class="mt-10 text-center">
			<a href={p('/articles')} class="glow inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-medium text-text-primary hover:border-accent-primary/30 hover:text-accent-primary">View All Articles <ArrowRight class="h-4 w-4" /></a>
		</div>
	</div>
</section>
