<script lang="ts">
	import { withPrefix } from '$lib/data/utils.js';
	import { forumCategories, chatChannels } from '$lib/data/mock.js';
	import {
		ArrowRight, Users, MessageCircle, MessageSquare, Heart,
		Hand as Hands, Sun, BookOpen, Hash, Wifi, ChevronRight
	} from 'lucide-svelte';

	const p = (href: string) => withPrefix('/e', href);

	const iconMap: Record<string, typeof Heart> = {
		heart: Heart, hands: Hands, sun: Sun, book: BookOpen, message: MessageCircle
	};

	const communityStats = [
		{ value: '2,500+', label: 'Members', icon: Users },
		{ value: '1,200+', label: 'Active Discussions', icon: MessageSquare },
		{ value: '128', label: 'Online Now', icon: Wifi }
	];
</script>

<svelte:head>
	<title>Community — Being Muslim</title>
	<meta name="description" content="Join a supportive community of fellow seekers. Discuss, learn, and grow together." />
</svelte:head>

<!-- Hero -->
<section class="flex items-center justify-center px-4 py-32 text-center">
	<div class="glass-panel mx-auto max-w-3xl p-10">
		<span class="inline-flex items-center rounded-full bg-accent-primary/10 px-3 py-1 text-xs font-medium text-accent-primary">Join the Conversation</span>
		<h1 class="mt-4 font-display text-4xl font-semibold text-text-primary sm:text-5xl">Community</h1>
		<p class="mt-4 text-lg text-text-secondary">Join a supportive community of fellow seekers. Ask questions, share experiences, and grow together on your journey.</p>
	</div>
</section>

<div class="relative -mt-1"><svg viewBox="0 0 1440 60" fill="none" class="w-full"><path d="M0 30C240 50 480 10 720 30C960 50 1200 10 1440 30V60H0V30Z" fill="currentColor" class="text-bg-primary/30" /></svg></div>

<!-- Stats -->
<section class="py-12">
	<div class="mx-auto max-w-[900px] px-4 sm:px-6">
		<div class="glass-panel grid grid-cols-3 gap-4 p-6 sm:p-8">
			{#each communityStats as stat}
				{@const Icon = stat.icon}
				<div class="text-center">
					<div class="mb-2 flex items-center justify-center"><Icon class="h-5 w-5 text-accent-primary" /></div>
					<p class="font-display text-2xl font-bold text-accent-primary sm:text-3xl">{stat.value}</p>
					<p class="mt-1 text-sm text-text-secondary">{stat.label}</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- Forums + Chat -->
<section class="py-12 sm:py-16">
	<div class="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
		<div class="grid gap-8 lg:grid-cols-2">
			<!-- Forums -->
			<div class="glass-panel flex flex-col overflow-hidden">
				<div class="border-b border-border p-6">
					<div class="flex items-center gap-3">
						<div class="flex h-10 w-10 items-center justify-center rounded-xl bg-accent-primary/10"><MessageSquare class="h-5 w-5 text-accent-primary" /></div>
						<div>
							<h2 class="font-display text-xl font-semibold text-text-primary">Discussion Forums</h2>
							<p class="text-sm text-text-secondary">Ask questions and share knowledge</p>
						</div>
					</div>
				</div>
				<div class="flex-1 divide-y divide-border">
					{#each forumCategories.slice(0, 4) as category}
						{@const Icon = iconMap[category.icon] || MessageCircle}
						<a href={p('/community/forums')} class="group flex items-center gap-4 px-6 py-4 transition-colors hover:bg-white/40">
							<div class="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-accent-primary/10 text-accent-primary transition-colors group-hover:bg-accent-primary group-hover:text-white"><Icon class="h-4 w-4" /></div>
							<div class="min-w-0 flex-1">
								<h3 class="text-sm font-semibold text-text-primary group-hover:text-accent-primary">{category.title}</h3>
								<p class="truncate text-xs text-text-secondary">{category.description}</p>
							</div>
							<div class="hidden shrink-0 text-right sm:block">
								<p class="text-xs font-medium text-text-primary">{category.threadCount} threads</p>
								<p class="text-xs text-text-secondary">{category.lastActivity}</p>
							</div>
							<ChevronRight class="h-4 w-4 shrink-0 text-text-secondary transition-transform group-hover:translate-x-0.5 group-hover:text-accent-primary" />
						</a>
					{/each}
				</div>
				<div class="border-t border-border p-4">
					<a href={p('/community/forums')} class="glow flex w-full items-center justify-center gap-2 rounded-full border border-border py-2.5 text-sm font-medium text-text-primary hover:border-accent-primary/30 hover:text-accent-primary">Browse Forums <ArrowRight class="h-4 w-4" /></a>
				</div>
			</div>

			<!-- Chat -->
			<div class="glass-panel flex flex-col overflow-hidden">
				<div class="border-b border-border p-6">
					<div class="flex items-center gap-3">
						<div class="flex h-10 w-10 items-center justify-center rounded-xl bg-accent-primary/10"><MessageCircle class="h-5 w-5 text-accent-primary" /></div>
						<div>
							<h2 class="font-display text-xl font-semibold text-text-primary">Live Chat</h2>
							<p class="text-sm text-text-secondary">Real-time conversations with the community</p>
						</div>
					</div>
				</div>
				<div class="flex-1 divide-y divide-border">
					{#each chatChannels as channel}
						<a href={p('/community/chat')} class="group flex items-center gap-4 px-6 py-4 transition-colors hover:bg-white/40">
							<Hash class="h-4 w-4 shrink-0 text-text-secondary" />
							<div class="min-w-0 flex-1">
								<h3 class="text-sm font-semibold text-text-primary group-hover:text-accent-primary">{channel.name}</h3>
								<p class="text-xs text-text-secondary">{channel.members} members</p>
							</div>
							{#if channel.unread > 0}<span class="flex h-5 min-w-5 items-center justify-center rounded-full bg-accent-primary px-1.5 text-xs font-bold text-white">{channel.unread}</span>{/if}
						</a>
					{/each}
				</div>
				<div class="border-t border-border p-4">
					<a href={p('/community/chat')} class="glow flex w-full items-center justify-center gap-2 rounded-full border border-border py-2.5 text-sm font-medium text-text-primary hover:border-accent-primary/30 hover:text-accent-primary">Join Chat <ArrowRight class="h-4 w-4" /></a>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- SVG Wave -->
<div class="relative -mb-1"><svg viewBox="0 0 1440 60" fill="none" class="w-full"><path d="M0 30C240 50 480 10 720 30C960 50 1200 10 1440 30V60H0V30Z" fill="currentColor" class="text-white/20" /></svg></div>

<!-- Join CTA -->
<section class="bg-[#1A2332] py-20 md:py-32">
	<div class="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
		<div class="mx-auto max-w-xl text-center">
			<Users class="mx-auto h-10 w-10 text-accent-gold" />
			<h2 class="mt-4 font-display text-3xl font-semibold text-white sm:text-4xl">Join the conversation</h2>
			<p class="mt-4 text-white/70">Create a free account to participate in discussions, join live chat, and connect with fellow seekers.</p>
			<div class="mt-8 flex flex-wrap justify-center gap-4">
				<a href={p('/register')} class="glow inline-flex items-center gap-2 rounded-full bg-accent-primary px-6 py-3 text-sm font-medium text-white">Create Free Account <ArrowRight class="h-5 w-5" /></a>
				<a href={p('/about')} class="glow inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3 text-sm font-medium text-white hover:bg-white/10">Learn More</a>
			</div>
		</div>
	</div>
</section>
