<script lang="ts">
	import { withPrefix } from '$lib/data/utils.js';
	import { teamMembers, stats } from '$lib/data/mock.js';
	import { ArrowRight, Heart, BookOpen, Users, Globe, Calendar, Sparkles } from 'lucide-svelte';

	const p = (href: string) => withPrefix('/e', href);

	const timeline = [
		{ year: '2015', title: 'The Seed is Planted', description: 'Dr. Asad Tarsin begins writing Being Muslim, drawing on years of teaching converts and new Muslims.' },
		{ year: '2017', title: 'First Edition Published', description: 'Being Muslim: A Practical Guide is published to widespread acclaim in the Muslim community.' },
		{ year: '2019', title: 'Going Digital', description: 'Launch of the e-book and online resources. The Being Muslim Project is formalized as a nonprofit.' },
		{ year: '2021', title: 'Community Launch', description: 'Online forums and community features launch, connecting new Muslims with mentors worldwide.' },
		{ year: '2023', title: 'Course Platform', description: 'Structured video courses launch, bringing Islamic education to thousands of new learners.' },
		{ year: '2025', title: '10,000 Sets Sponsored', description: 'A milestone: 10,000 boxed sets donated to new Muslims across 50+ countries.' }
	];

	const partners = ['Islamic Society of North America', 'Muslim Community Center', 'Convert Support International', 'Al-Madina Institute', 'Yaqeen Institute'];
</script>

<svelte:head>
	<title>About — Being Muslim</title>
	<meta name="description" content="Learn about The Being Muslim Project, our mission, team, and impact." />
</svelte:head>

<!-- Hero -->
<section class="flex items-center justify-center px-4 py-32 text-center">
	<div class="glass-panel mx-auto max-w-3xl p-10">
		<span class="inline-flex items-center rounded-full bg-accent-primary/10 px-3 py-1 text-xs font-medium text-accent-primary">Our Story</span>
		<h1 class="mt-4 font-display text-4xl font-semibold text-text-primary sm:text-5xl">About Being Muslim</h1>
		<p class="mt-4 text-lg text-text-secondary">We believe every person exploring Islam deserves access to beautiful, authentic, and practical guidance. That is our mission.</p>
	</div>
</section>

<div class="relative -mt-1"><svg viewBox="0 0 1440 60" fill="none" class="w-full"><path d="M0 30C240 50 480 10 720 30C960 50 1200 10 1440 30V60H0V30Z" fill="currentColor" class="text-bg-primary/30" /></svg></div>

<!-- Mission -->
<section class="py-20 md:py-32">
	<div class="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
		<div class="grid items-center gap-12 lg:grid-cols-2">
			<div>
				<h2 class="font-display text-3xl font-semibold text-text-primary sm:text-4xl">Our Mission</h2>
				<p class="mt-4 text-lg leading-relaxed text-text-secondary">The Being Muslim Project exists to empower converts, new Muslims, and those reconnecting with their faith through world-class educational resources, a supportive community, and a spirit of warmth and inclusivity.</p>
				<p class="mt-4 text-lg leading-relaxed text-text-secondary">We believe that the Islamic tradition is rich, beautiful, and deeply relevant to modern life. Our goal is to make that tradition accessible to everyone — regardless of background, language, or experience level.</p>
				<div class="mt-8 grid grid-cols-2 gap-6">
					{#each stats as stat}
						<div class="glass-panel p-4 text-center">
							<p class="font-display text-2xl font-bold text-accent-primary">{stat.value}</p>
							<p class="mt-1 text-sm text-text-secondary">{stat.label}</p>
						</div>
					{/each}
				</div>
			</div>
			<div class="flex items-center justify-center">
				<div class="glass-panel relative aspect-square w-full max-w-md p-12">
					<div class="flex h-full flex-col items-center justify-center text-center">
						<Sparkles class="mb-4 h-20 w-20 text-accent-primary/30" />
						<p class="font-display text-2xl font-bold text-text-primary">Rooted in Faith</p>
						<p class="mt-2 text-sm text-text-secondary">Growing Together</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- SVG Wave -->
<div class="relative -mb-1"><svg viewBox="0 0 1440 60" fill="none" class="w-full"><path d="M0 30C240 50 480 10 720 30C960 50 1200 10 1440 30V60H0V30Z" fill="currentColor" class="text-white/20" /></svg></div>

<!-- Story Timeline -->
<section class="py-20 md:py-32">
	<div class="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
		<div class="text-center">
			<h2 class="font-display text-3xl font-semibold text-text-primary sm:text-4xl">Our Journey</h2>
			<p class="mt-4 text-text-secondary">From a single book to a global movement</p>
		</div>
		<div class="relative mt-12">
			<div class="absolute left-6 top-0 bottom-0 w-px bg-border sm:left-1/2"></div>
			<div class="space-y-8">
				{#each timeline as event, i}
					<div class="relative flex gap-6 sm:gap-8 {i % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'}">
						<div class="absolute left-6 top-2 -translate-x-1/2 sm:left-1/2">
							<div class="flex h-4 w-4 items-center justify-center rounded-full bg-accent-primary"><div class="h-2 w-2 rounded-full bg-white"></div></div>
						</div>
						<div class="flex-1 pl-12 sm:w-[calc(50%-2rem)] sm:pl-0 {i % 2 === 0 ? 'sm:text-right sm:pr-12' : 'sm:pl-12'}">
							<span class="text-sm font-semibold text-accent-primary">{event.year}</span>
							<h3 class="mt-1 font-display text-lg font-semibold text-text-primary">{event.title}</h3>
							<p class="mt-2 text-sm text-text-secondary">{event.description}</p>
						</div>
						<div class="hidden flex-1 sm:block"></div>
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>

<!-- Team -->
<section id="team" class="py-20 md:py-32">
	<div class="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
		<div class="text-center">
			<h2 class="font-display text-3xl font-semibold text-text-primary sm:text-4xl">Meet Our Team</h2>
			<p class="mt-4 text-text-secondary">Dedicated people working to serve the Muslim community</p>
		</div>
		<div class="mx-auto mt-12 grid max-w-4xl gap-8 sm:grid-cols-2 lg:grid-cols-3">
			{#each teamMembers as member}
				<div class="glass-panel p-6 text-center">
					<div class="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-accent-primary/20 to-accent-gold/20">
						<span class="font-display text-2xl font-bold text-accent-primary">{member.name.split(' ').map((n) => n[0]).join('')}</span>
					</div>
					<h3 class="mt-4 font-display text-lg font-semibold text-text-primary">{member.name}</h3>
					<p class="mt-1 text-sm font-medium text-accent-primary">{member.role}</p>
					<p class="mt-3 text-sm leading-relaxed text-text-secondary">{member.bio}</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- Partners -->
<section class="py-20 md:py-32">
	<div class="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
		<div class="text-center">
			<h2 class="font-display text-3xl font-semibold text-text-primary">Our Partners</h2>
			<p class="mt-2 text-text-secondary">Working together to serve new Muslims worldwide</p>
		</div>
		<div class="mx-auto mt-10 flex max-w-4xl flex-wrap items-center justify-center gap-6">
			{#each partners as partner}
				<div class="glass-panel px-6 py-4 text-sm font-medium text-text-secondary">{partner}</div>
			{/each}
		</div>
	</div>
</section>

<!-- SVG Wave -->
<div class="relative -mb-1"><svg viewBox="0 0 1440 60" fill="none" class="w-full"><path d="M0 30C240 50 480 10 720 30C960 50 1200 10 1440 30V60H0V30Z" fill="currentColor" class="text-white/20" /></svg></div>

<!-- CTA -->
<section class="bg-[#1A2332] py-20 md:py-32">
	<div class="mx-auto max-w-xl px-4 text-center sm:px-6 lg:px-8">
		<h2 class="font-display text-3xl font-semibold text-white sm:text-4xl">Join our mission</h2>
		<p class="mt-4 text-white/70">Whether you volunteer, donate, or spread the word — every action matters.</p>
		<div class="mt-8 flex flex-wrap justify-center gap-4">
			<a href={p('/give')} class="glow inline-flex items-center gap-2 rounded-full bg-accent-primary px-6 py-3 text-sm font-medium text-white">Support Our Work <Heart class="h-4 w-4" /></a>
			<a href={p('/community')} class="glow inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3 text-sm font-medium text-white hover:bg-white/10">Join Community <ArrowRight class="h-4 w-4" /></a>
		</div>
	</div>
</section>
