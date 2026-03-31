<script lang="ts">
	import { Section } from '$lib/components/layout/index.js';
	import { Button } from '$lib/components/ui/button/index.js';
	import { Badge } from '$lib/components/ui/badge/index.js';
	import { stats, teamMembers, testimonials } from '$lib/data/mock.js';
	import {
		ArrowRight,
		Heart,
		BookOpen,
		Users,
		Globe,
		Quote,
		Handshake
	} from 'lucide-svelte';
</script>

<svelte:head>
	<title>About — Our Mission, Story & Team | Being Muslim</title>
	<meta
		name="description"
		content="Learn about Being Muslim's mission to empower converts and beginners on their Islamic journey through accessible education, community support, and beautiful resources."
	/>
</svelte:head>

<!-- ============================== -->
<!-- 1. HERO — Compact dark band    -->
<!-- ============================== -->
<section class="relative overflow-hidden bg-bg-dark">
	<!-- Background Pattern -->
	<div class="absolute inset-0 opacity-[0.03]">
		<svg class="h-full w-full" xmlns="http://www.w3.org/2000/svg">
			<defs>
				<pattern id="geo-g-about" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
					<path
						d="M30 0L60 30L30 60L0 30Z"
						fill="none"
						stroke="currentColor"
						stroke-width="0.5"
						class="text-text-cream"
					/>
				</pattern>
			</defs>
			<rect width="100%" height="100%" fill="url(#geo-g-about)" />
		</svg>
	</div>

	<div class="relative mx-auto max-w-[1280px] px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
		<div class="mx-auto max-w-3xl text-center">
			<Badge variant="gold">
				{#snippet children()}Our Story{/snippet}
			</Badge>
			<h1 class="mt-4 font-display text-3xl font-bold leading-tight text-text-cream sm:text-4xl lg:text-5xl">
				About Being Muslim
			</h1>
			<p class="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-text-cream/70 sm:text-lg">
				Every person who embraces Islam deserves access to beautiful, accurate, and compassionate
				resources. We exist to make that a reality.
			</p>
		</div>
	</div>

	<div class="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-bg-primary to-transparent"></div>
</section>

<!-- ============================== -->
<!-- 2. MISSION — Two-column text   -->
<!-- ============================== -->
<Section>
	<div class="grid gap-10 lg:grid-cols-2 lg:gap-16">
		<!-- Mission -->
		<div>
			<div class="mb-4 h-0.5 w-12 rounded-full bg-accent-gold"></div>
			<h2 class="font-display text-2xl font-bold sm:text-3xl">Our Mission</h2>
			<p class="mt-3 text-base leading-relaxed text-text-secondary">
				To empower new and returning Muslims with the knowledge, resources, and community they
				need to live Islam with understanding, confidence, and joy. We create educational content
				that is warm, rigorous, and deeply human -- meeting people wherever they are on their journey.
			</p>
			<p class="mt-3 text-base leading-relaxed text-text-secondary">
				We serve converts taking their first steps, lifelong Muslims seeking deeper understanding,
				and curious seekers exploring the faith. No one is turned away, and no question is too basic.
			</p>
		</div>

		<!-- Vision -->
		<div>
			<div class="mb-4 h-0.5 w-12 rounded-full bg-accent-primary"></div>
			<h2 class="font-display text-2xl font-bold sm:text-3xl">Our Vision</h2>
			<p class="mt-3 text-base leading-relaxed text-text-secondary">
				A world where every new Muslim has a supportive community, accessible resources, and
				the confidence to practice their faith without feeling lost or alone. We envision Islamic
				education that is as beautiful and inviting as the faith itself.
			</p>
			<p class="mt-3 text-base leading-relaxed text-text-secondary">
				We are building a global platform that connects learners with knowledge, mentors with
				students, and communities with one another.
			</p>
		</div>
	</div>
</Section>

<!-- ============================== -->
<!-- 3. THE STORY — Compact origin  -->
<!-- ============================== -->
<Section class="bg-secondary/50">
	<div class="mx-auto max-w-4xl">
		<h2 class="font-display text-2xl font-bold sm:text-3xl">How It All Began</h2>
		<p class="mt-2 text-sm text-text-secondary">The story behind Being Muslim</p>

		<div class="mt-8 space-y-4 text-base leading-relaxed text-text-secondary">
			<p>
				Dr. Asad Tarsin's journey began in the hallways of a hospital, where as a physician he
				witnessed new Muslims filled with faith but left without guidance. Time and again, he met
				converts who had been welcomed with open arms at their shahada ceremony, only to be left
				on their own to figure out how to pray, what to eat, and how to navigate a new identity.
			</p>

			<!-- Pull Quote — inline, compact -->
			<div class="rounded-lg border-l-4 border-accent-gold bg-surface px-5 py-4">
				<p class="font-display text-base leading-relaxed italic text-text-primary sm:text-lg">
					"I kept meeting new Muslims who were overwhelmed and under-resourced. They had
					taken the most courageous step of their lives, and we were failing them."
				</p>
				<p class="mt-2 text-sm font-medium text-accent-primary">-- Dr. Asad Tarsin</p>
			</div>

			<p>
				What started as a single book written on nights and weekends has grown into a comprehensive
				ecosystem. The Being Muslim book has been distributed to over 10,000 people in more than
				50 countries. Today, Being Muslim is more than a book -- it is a platform, a community,
				and a movement built on the belief that good education can transform lives.
			</p>
		</div>
	</div>
</Section>

<!-- ============================== -->
<!-- 4. STATS — Horizontal row      -->
<!-- ============================== -->
<section class="bg-bg-dark py-10 sm:py-14">
	<div class="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
		<div class="flex flex-wrap items-center justify-between gap-6">
			{#each stats as stat, i}
				<div class="flex items-baseline gap-3 {i < stats.length - 1 ? 'border-r border-white/10 pr-6 sm:pr-10' : ''}">
					<span class="font-display text-2xl font-bold text-accent-gold sm:text-3xl lg:text-4xl">
						{stat.value}
					</span>
					<span class="text-xs text-text-cream/50 sm:text-sm">{stat.label}</span>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- ============================== -->
<!-- 5. TEAM — Compact list rows    -->
<!-- ============================== -->
<Section id="team">
	<div class="flex items-end justify-between">
		<div>
			<Badge variant="gold">
				{#snippet children()}Our Team{/snippet}
			</Badge>
			<h2 class="mt-3 font-display text-2xl font-bold sm:text-3xl">The People Behind the Mission</h2>
		</div>
	</div>

	<div class="mt-8 divide-y divide-border rounded-xl border border-border bg-surface">
		{#each teamMembers as member}
			<div class="flex items-start gap-5 p-5 sm:items-center sm:gap-6 sm:p-6">
				<!-- Avatar -->
				<div class="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-accent-primary/15 to-accent-gold/15 ring-2 ring-accent-gold/10">
					<span class="font-display text-sm font-bold text-accent-primary">
						{member.name.split(' ').map((n) => n[0]).join('')}
					</span>
				</div>

				<!-- Info — name + role on left, bio on right for larger screens -->
				<div class="flex flex-1 flex-col gap-1 sm:flex-row sm:items-center sm:gap-6">
					<div class="shrink-0 sm:w-56">
						<h3 class="font-display text-base font-semibold">{member.name}</h3>
						<p class="text-sm font-medium text-accent-primary">{member.role}</p>
					</div>
					<p class="text-sm leading-relaxed text-text-secondary">{member.bio}</p>
				</div>
			</div>
		{/each}
	</div>
</Section>

<!-- ============================== -->
<!-- 6. CTA — Compact dark band     -->
<!-- ============================== -->
<section class="relative overflow-hidden bg-bg-dark py-14 sm:py-20">
	<!-- Background Pattern -->
	<div class="absolute inset-0 opacity-[0.03]">
		<svg class="h-full w-full" xmlns="http://www.w3.org/2000/svg">
			<defs>
				<pattern id="geo-g-about-cta" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
					<path
						d="M30 0L60 30L30 60L0 30Z"
						fill="none"
						stroke="currentColor"
						stroke-width="0.5"
						class="text-text-cream"
					/>
				</pattern>
			</defs>
			<rect width="100%" height="100%" fill="url(#geo-g-about-cta)" />
		</svg>
	</div>

	<div class="relative mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
		<div class="flex flex-col items-center gap-8 sm:flex-row sm:justify-between">
			<div>
				<h2 class="font-display text-2xl font-bold text-text-cream sm:text-3xl">
					Join the Mission
				</h2>
				<p class="mt-2 max-w-lg text-text-cream/60">
					Whether you volunteer your time, support with a donation, or partner with us --
					your contribution makes a difference.
				</p>
			</div>
			<div class="flex shrink-0 flex-wrap gap-3">
				<a href="/g/give">
					<Button class="bg-accent-primary text-text-cream hover:bg-accent-hover">
						{#snippet children()}
							Give Now
							<Heart class="ml-1 h-4 w-4" />
						{/snippet}
					</Button>
				</a>
				<a href="/g/articles">
					<Button
						variant="outline"
						class="border-text-cream/30 text-text-cream hover:bg-white/10 hover:text-text-cream"
					>
						{#snippet children()}
							Start Learning
							<ArrowRight class="ml-1 h-4 w-4" />
						{/snippet}
					</Button>
				</a>
			</div>
		</div>
	</div>
</section>
