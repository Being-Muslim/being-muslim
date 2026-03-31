<script lang="ts">
	import { Section } from '$lib/components/layout/index.js';
	import { Button } from '$lib/components/ui/button/index.js';
	import { Badge } from '$lib/components/ui/badge/index.js';
	import { Separator } from '$lib/components/ui/separator/index.js';
	import { stats, teamMembers } from '$lib/data/mock.js';
	import {
		ArrowRight,
		Heart,
		BookOpen,
		Users,
		Globe,
		GraduationCap,
		Handshake,
		Quote,
		Star
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
<!-- 1. HERO — Dark, centered text  -->
<!-- ============================== -->
<section class="relative flex min-h-[60vh] items-center overflow-hidden bg-bg-dark">
	<!-- Background Pattern -->
	<div class="absolute inset-0 opacity-[0.03]">
		<svg class="h-full w-full" xmlns="http://www.w3.org/2000/svg">
			<defs>
				<pattern id="geo-f-about" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
					<path
						d="M30 0L60 30L30 60L0 30Z"
						fill="none"
						stroke="currentColor"
						stroke-width="0.5"
						class="text-text-cream"
					/>
				</pattern>
			</defs>
			<rect width="100%" height="100%" fill="url(#geo-f-about)" />
		</svg>
	</div>

	<div class="relative mx-auto max-w-[1280px] px-4 py-32 sm:px-6 lg:px-8">
		<div class="mx-auto max-w-3xl text-center">
			<Badge variant="gold">
				{#snippet children()}Our Story{/snippet}
			</Badge>
			<h1 class="mt-6 font-display text-4xl font-bold leading-tight text-text-cream sm:text-5xl lg:text-6xl">
				About Being Muslim
			</h1>
			<p class="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-text-cream/80 sm:text-xl">
				We believe that every person who embraces Islam deserves access to beautiful, accurate,
				and compassionate resources. Being Muslim exists to make that a reality.
			</p>
		</div>
	</div>

	<div class="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-bg-primary to-transparent"></div>
</section>

<!-- ============================== -->
<!-- 2. MISSION — Asymmetric layout -->
<!-- ============================== -->
<Section>
	<div class="grid items-center gap-12 lg:grid-cols-[3fr_2fr]">
		<!-- Text — 60% -->
		<div>
			<div class="mb-6 h-1 w-16 rounded-full bg-accent-gold"></div>
			<h2 class="font-display text-3xl font-bold sm:text-4xl">Our Mission</h2>
			<p class="mt-6 text-lg leading-relaxed text-text-secondary">
				To empower new and returning Muslims with the knowledge, resources, and community they
				need to live Islam with understanding, confidence, and joy. We create educational content
				that is warm, rigorous, and deeply human — meeting people wherever they are on their journey.
			</p>
			<p class="mt-4 text-lg leading-relaxed text-text-secondary">
				What began as a single book has grown into a library of resources used in communities
				across the globe. But our core remains the same: meeting people where they are, with
				warmth and without judgment.
			</p>

			<!-- Pull Quote -->
			<div class="mt-8 rounded-xl border-l-4 border-accent-gold bg-surface p-6 shadow-sm">
				<Quote class="mb-3 h-8 w-8 text-accent-gold/40" />
				<p class="font-display text-xl leading-relaxed italic text-text-primary">
					"I kept meeting new Muslims who were overwhelmed and under-resourced. They had
					taken the most courageous step of their lives, and we were failing them."
				</p>
				<p class="mt-4 font-medium text-accent-primary">— Dr. Asad Tarsin</p>
			</div>
		</div>

		<!-- Image placeholder — 40% -->
		<div class="flex items-center justify-center">
			<div class="relative aspect-[3/4] w-full max-w-sm overflow-hidden rounded-2xl bg-gradient-to-br from-bg-dark to-accent-primary/80 p-12">
				<div class="flex h-full flex-col items-center justify-center text-center text-text-cream">
					<BookOpen class="mb-4 h-20 w-20 opacity-60" />
					<p class="font-display text-2xl font-bold">Being Muslim</p>
					<p class="mt-2 text-sm text-text-cream/70">Serving communities since 2006</p>
				</div>
				<!-- Decorative circles -->
				<div class="absolute -right-4 -bottom-4 h-32 w-32 rounded-full bg-accent-gold/20 blur-xl"></div>
				<div class="absolute -top-4 -left-4 h-24 w-24 rounded-full bg-accent-primary/20 blur-xl"></div>
			</div>
		</div>
	</div>
</Section>

<!-- ============================== -->
<!-- 3. STATS — Rounded card        -->
<!-- ============================== -->
<Section class="bg-secondary/50">
	<div class="mx-auto max-w-4xl">
		<div class="text-center">
			<h2 class="font-display text-3xl font-bold sm:text-4xl">Our Impact in Numbers</h2>
			<p class="mt-4 text-lg text-text-secondary">
				Every number represents a real person on their journey.
			</p>
		</div>

		<div class="mt-10 grid grid-cols-2 gap-6 rounded-2xl border border-border bg-surface p-8 shadow-lg sm:grid-cols-4 sm:p-10">
			{#each stats as stat}
				<div class="text-center">
					<p class="font-display text-2xl font-bold text-accent-primary sm:text-3xl lg:text-4xl">
						{stat.value}
					</p>
					<p class="mt-2 text-sm text-text-secondary">{stat.label}</p>
				</div>
			{/each}
		</div>
	</div>
</Section>

<!-- ============================== -->
<!-- 4. TEAM — 3-column grid        -->
<!-- ============================== -->
<Section id="team">
	<div class="text-center">
		<Badge variant="gold">
			{#snippet children()}Our Team{/snippet}
		</Badge>
		<h2 class="mt-4 font-display text-3xl font-bold sm:text-4xl">The People Behind the Mission</h2>
		<p class="mx-auto mt-4 max-w-2xl text-lg text-text-secondary">
			A dedicated team of educators, converts, and community builders working to make Islamic
			education accessible to everyone.
		</p>
	</div>

	<div class="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
		{#each teamMembers as member}
			<div class="rounded-xl border border-border bg-surface p-8 text-center transition-all hover:border-accent-primary/30 hover:shadow-lg">
				<!-- Avatar -->
				<div class="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-accent-primary/15 to-accent-gold/15 ring-4 ring-accent-gold/10">
					<span class="font-display text-2xl font-bold text-accent-primary">
						{member.name
							.split(' ')
							.map((n) => n[0])
							.join('')}
					</span>
				</div>
				<h3 class="mt-6 font-display text-xl font-semibold">{member.name}</h3>
				<p class="mt-1 text-sm font-medium text-accent-primary">{member.role}</p>
				<Separator class="my-4" />
				<p class="text-sm leading-relaxed text-text-secondary">{member.bio}</p>
			</div>
		{/each}
	</div>
</Section>

<!-- ============================== -->
<!-- 5. CTA — Dark section          -->
<!-- ============================== -->
<section class="bg-bg-dark py-16 sm:py-24">
	<!-- Background Pattern -->
	<div class="absolute inset-0 opacity-[0.03]">
		<svg class="h-full w-full" xmlns="http://www.w3.org/2000/svg">
			<defs>
				<pattern id="geo-f-about-cta" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
					<path
						d="M30 0L60 30L30 60L0 30Z"
						fill="none"
						stroke="currentColor"
						stroke-width="0.5"
						class="text-text-cream"
					/>
				</pattern>
			</defs>
			<rect width="100%" height="100%" fill="url(#geo-f-about-cta)" />
		</svg>
	</div>

	<div class="relative mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
		<div class="text-center">
			<h2 class="font-display text-3xl font-bold text-text-cream sm:text-4xl">
				Join the Mission
			</h2>
			<p class="mx-auto mt-4 max-w-2xl text-lg text-text-cream/70">
				There are many ways to be part of this work. Whether you volunteer your time, support
				with a donation, or partner with us — your contribution makes a difference.
			</p>
		</div>

		<div class="mt-12 grid gap-6 sm:grid-cols-3">
			<!-- Volunteer -->
			<div class="rounded-xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur transition-all hover:border-white/20 hover:bg-white/10">
				<div class="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-accent-primary/20">
					<Users class="h-7 w-7 text-accent-gold" />
				</div>
				<h3 class="mt-5 font-display text-xl font-semibold text-text-cream">Volunteer</h3>
				<p class="mt-3 text-sm leading-relaxed text-text-cream/70">
					Help us create content, mentor new Muslims, moderate community spaces, or translate
					resources into new languages.
				</p>
				<Button
					variant="outline"
					class="mt-6 border-text-cream/30 text-text-cream hover:bg-white/10 hover:text-text-cream"
				>
					{#snippet children()}
						Get Involved
						<ArrowRight class="ml-1 h-4 w-4" />
					{/snippet}
				</Button>
			</div>

			<!-- Donate -->
			<div class="rounded-xl border border-accent-primary/40 bg-accent-primary/10 p-8 text-center backdrop-blur transition-all hover:border-accent-primary/60 hover:bg-accent-primary/15">
				<div class="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-accent-primary/20">
					<Heart class="h-7 w-7 text-accent-gold" />
				</div>
				<h3 class="mt-5 font-display text-xl font-semibold text-text-cream">Donate</h3>
				<p class="mt-3 text-sm leading-relaxed text-text-cream/70">
					Sponsor a boxed set for a new Muslim, fund education programs, or become a monthly
					supporter of our mission.
				</p>
				<a href="/f/give">
					<Button class="mt-6 bg-accent-primary text-text-cream hover:bg-accent-hover">
						{#snippet children()}
							Give Now
							<Heart class="ml-1 h-4 w-4" />
						{/snippet}
					</Button>
				</a>
			</div>

			<!-- Partner -->
			<div class="rounded-xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur transition-all hover:border-white/20 hover:bg-white/10">
				<div class="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-accent-primary/20">
					<Handshake class="h-7 w-7 text-accent-gold" />
				</div>
				<h3 class="mt-5 font-display text-xl font-semibold text-text-cream">Partner</h3>
				<p class="mt-3 text-sm leading-relaxed text-text-cream/70">
					Are you a mosque, organization, or educator? Partner with us to bring Being Muslim
					resources to your community.
				</p>
				<Button
					variant="outline"
					class="mt-6 border-text-cream/30 text-text-cream hover:bg-white/10 hover:text-text-cream"
				>
					{#snippet children()}
						Become a Partner
						<ArrowRight class="ml-1 h-4 w-4" />
					{/snippet}
				</Button>
			</div>
		</div>
	</div>
</section>
