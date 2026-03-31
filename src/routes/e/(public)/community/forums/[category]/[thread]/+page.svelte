<script lang="ts">
	import { withPrefix } from '$lib/data/utils.js';
	import { ArrowLeft, ThumbsUp, MessageCircle, Flag, Share2 } from 'lucide-svelte';
	import { page } from '$app/state';

	const p = (href: string) => withPrefix('/e', href);

	const categorySlug = $derived(page.params.category);
	const threadSlug = $derived(page.params.thread);
	const threadTitle = $derived(threadSlug.replace(/-/g, ' ').replace(/\b\w/g, (c: string) => c.toUpperCase()));

	let replyText = $state('');

	const replies = [
		{ author: 'Aminah', time: '2 hours ago', text: 'This is such an important topic. I went through the same thing when I first converted. My advice is to be honest but gentle. Not everyone will understand right away, but most people come around with time.', likes: 12 },
		{ author: 'Omar', time: '1 hour ago', text: 'I agree with Aminah. Patience is key. I found that showing them how Islam positively affected my life was more powerful than any words.', likes: 8 },
		{ author: 'Fatima', time: '45 minutes ago', text: 'Remember that everyone processes things differently. Give your family space if they need it, and keep showing them love and respect.', likes: 5 },
		{ author: 'Khalid', time: '20 minutes ago', text: 'MashaAllah, great advice here. I also recommend having some resources ready that you can share with them, like the Being Muslim book. It helps answer questions in a way that is easy to understand.', likes: 3 }
	];
</script>

<svelte:head>
	<title>{threadTitle} — Being Muslim Forums</title>
</svelte:head>

<section class="flex items-center justify-center px-4 py-32">
	<div class="glass-panel mx-auto max-w-3xl p-10 text-center">
		<a href={p('/community/forums/' + categorySlug)} class="mb-6 inline-flex items-center gap-2 text-sm text-text-secondary transition-colors hover:text-accent-primary"><ArrowLeft class="h-4 w-4" /> Back to Forum</a>
		<h1 class="font-display text-3xl font-semibold text-text-primary sm:text-4xl">{threadTitle}</h1>
		<div class="mt-4 flex flex-wrap items-center justify-center gap-4 text-sm text-text-secondary">
			<span>{replies.length} replies</span>
			<span>Started by <strong class="text-text-primary">NewBeginnings</strong></span>
		</div>
	</div>
</section>

<div class="relative -mt-1"><svg viewBox="0 0 1440 60" fill="none" class="w-full"><path d="M0 30C240 50 480 10 720 30C960 50 1200 10 1440 30V60H0V30Z" fill="currentColor" class="text-bg-primary/30" /></svg></div>

<section class="py-12 sm:py-16">
	<div class="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
		<!-- Original Post -->
		<div class="glass-panel p-6">
			<div class="flex items-center gap-3">
				<div class="flex h-10 w-10 items-center justify-center rounded-full bg-accent-primary/10 text-sm font-bold text-accent-primary">N</div>
				<div>
					<p class="text-sm font-semibold text-text-primary">NewBeginnings</p>
					<p class="text-xs text-text-secondary">3 hours ago</p>
				</div>
			</div>
			<div class="mt-4 text-sm leading-relaxed text-text-secondary">
				<p>Salaam everyone,</p>
				<p class="mt-3">I recently took my shahada and I'm trying to figure out how to tell my family. They're not Muslim and I'm worried about their reaction. Has anyone been through this? Any advice on how to approach the conversation?</p>
				<p class="mt-3">JazakAllah khair for any help.</p>
			</div>
			<div class="mt-4 flex items-center gap-4 border-t border-border pt-4">
				<button class="flex items-center gap-1.5 text-xs text-text-secondary transition-colors hover:text-accent-primary"><ThumbsUp class="h-3.5 w-3.5" /> 15</button>
				<button class="flex items-center gap-1.5 text-xs text-text-secondary transition-colors hover:text-accent-primary"><Share2 class="h-3.5 w-3.5" /> Share</button>
				<button class="flex items-center gap-1.5 text-xs text-text-secondary transition-colors hover:text-accent-gold"><Flag class="h-3.5 w-3.5" /> Report</button>
			</div>
		</div>

		<!-- Replies -->
		<div class="mt-8 space-y-4">
			<h2 class="font-display text-lg font-semibold text-text-primary">{replies.length} Replies</h2>
			{#each replies as reply}
				<div class="glass-panel p-6">
					<div class="flex items-center gap-3">
						<div class="flex h-10 w-10 items-center justify-center rounded-full bg-accent-primary/10 text-sm font-bold text-accent-primary">{reply.author[0]}</div>
						<div>
							<p class="text-sm font-semibold text-text-primary">{reply.author}</p>
							<p class="text-xs text-text-secondary">{reply.time}</p>
						</div>
					</div>
					<p class="mt-4 text-sm leading-relaxed text-text-secondary">{reply.text}</p>
					<div class="mt-4 flex items-center gap-4 border-t border-border pt-4">
						<button class="flex items-center gap-1.5 text-xs text-text-secondary transition-colors hover:text-accent-primary"><ThumbsUp class="h-3.5 w-3.5" /> {reply.likes}</button>
						<button class="flex items-center gap-1.5 text-xs text-text-secondary transition-colors hover:text-accent-primary"><MessageCircle class="h-3.5 w-3.5" /> Reply</button>
					</div>
				</div>
			{/each}
		</div>

		<!-- Reply Box -->
		<div class="glass-panel mt-8 p-6">
			<h3 class="font-display text-lg font-semibold text-text-primary">Write a Reply</h3>
			<textarea bind:value={replyText} placeholder="Share your thoughts..." rows="4" class="mt-4 w-full rounded-2xl border border-border bg-white/80 px-4 py-3 text-sm text-text-primary placeholder:text-text-secondary/60 focus:border-accent-primary focus:outline-none focus:ring-2 focus:ring-accent-primary/20"></textarea>
			<div class="mt-4 flex justify-end">
				<button class="glow rounded-full bg-accent-primary px-6 py-2.5 text-sm font-medium text-white">Post Reply</button>
			</div>
		</div>
	</div>
</section>
