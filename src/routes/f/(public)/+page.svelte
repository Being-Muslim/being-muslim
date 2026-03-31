<script lang="ts">
	import { Section } from '$lib/components/layout/index.js';
	import { Button } from '$lib/components/ui/button/index.js';
	import { Badge } from '$lib/components/ui/badge/index.js';
	import { Progress } from '$lib/components/ui/progress/index.js';
	import {
		stats,
		audiencePaths,
		articles,
		products,
		courses,
		testimonials,
		donationStats,
		sponsorshipTiers
	} from '$lib/data/mock.js';
	import {
		ArrowRight,
		BookOpen,
		Compass,
		RefreshCw,
		Sunrise,
		Star,
		Play,
		Users,
		MessageCircle,
		Heart,
		ChevronLeft,
		ChevronRight,
		Mail,
		Quote,
		Gift,
		Globe
	} from 'lucide-svelte';

	const featuredArticles = articles.filter((a) => a.featured).slice(0, 3);
	const featuredProducts = products.slice(0, 3);
	const featuredCourses = courses.slice(0, 3);

	let testimonialIndex = $state(0);

	function nextTestimonial() {
		testimonialIndex = (testimonialIndex + 1) % testimonials.length;
	}
	function prevTestimonial() {
		testimonialIndex = (testimonialIndex - 1 + testimonials.length) % testimonials.length;
	}

	const audienceIcons = { compass: Compass, sunrise: Sunrise, refresh: RefreshCw } as const;

	let email = $state('');
</script>

<svelte:head>
	<title>Being Muslim — Your Guide to a Meaningful Islamic Journey</title>
	<meta name="description" content="Empowering converts and beginners on their Islamic journey." />
</svelte:head>

<!-- ============================== -->
<!-- 1. HERO — Full-screen, centered -->
<!-- ============================== -->
<section class="relative flex min-h-screen items-center justify-center overflow-hidden bg-bg-dark">
	<!-- Geometric pattern -->
	<div class="absolute inset-0 opacity-[0.03]">
		<svg class="h-full w-full" xmlns="http://www.w3.org/2000/svg">
			<defs>
				<pattern id="geo-f" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
					<path d="M30 0L60 30L30 60L0 30Z" fill="none" stroke="currentColor" stroke-width="0.5" class="text-text-cream" />
				</pattern>
			</defs>
			<rect width="100%" height="100%" fill="url(#geo-f)" />
		</svg>
	</div>

	<!-- Radial glow -->
	<div class="absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-accent-primary/5 blur-3xl"></div>

	<div class="relative mx-auto max-w-[1280px] px-4 py-32 text-center sm:px-6 lg:px-8">
		<div class="mx-auto max-w-3xl">
			<div class="mb-8 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm text-text-cream/80 backdrop-blur-sm">
				<Heart class="h-4 w-4 text-accent-gold" />
				<span>Serving communities since 2006</span>
			</div>

			<h1 class="font-display text-5xl font-bold leading-tight text-text-cream sm:text-6xl lg:text-7xl">
				Your companion on the
				<span class="text-accent-gold">path of faith</span>
			</h1>

			<p class="mx-auto mt-8 max-w-xl text-lg leading-relaxed text-text-cream/70 sm:text-xl">
				Whether you're exploring Islam, newly converted, or reconnecting with your faith —
				find knowledge, community, and support designed for you.
			</p>

			<div class="mt-12 flex flex-wrap justify-center gap-4">
				<Button size="lg" class="bg-accent-primary text-text-cream hover:bg-accent-hover">
					{#snippet children()}
						Start Your Journey
						<ArrowRight class="ml-1 h-5 w-5" />
					{/snippet}
				</Button>
				<Button variant="outline" size="lg" class="border-text-cream/30 text-text-cream hover:bg-white/10 hover:text-text-cream">
					{#snippet children()}
						Browse Resources
					{/snippet}
				</Button>
			</div>

			<!-- Stats inline below CTA -->
			<div class="mx-auto mt-20 grid max-w-2xl grid-cols-2 gap-6 sm:grid-cols-4">
				{#each stats as stat}
					<div>
						<p class="font-display text-2xl font-bold text-accent-gold">{stat.value}</p>
						<p class="mt-1 text-xs text-text-cream/40">{stat.label}</p>
					</div>
				{/each}
			</div>
		</div>
	</div>

	<!-- Gradient fade -->
	<div class="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-bg-primary to-transparent"></div>
</section>

<!-- ============================== -->
<!-- 2. AUDIENCE PATHS — Large cards -->
<!-- ============================== -->
<Section>
	<div class="mx-auto max-w-3xl text-center">
		<h2 class="font-display text-3xl font-bold sm:text-4xl">Where are you on your journey?</h2>
		<p class="mt-4 text-lg text-text-secondary">
			Everyone's path is unique. Choose the one that speaks to you.
		</p>
	</div>

	<div class="mt-14 grid gap-8 sm:grid-cols-3">
		{#each audiencePaths as path}
			{@const Icon = audienceIcons[path.icon as keyof typeof audienceIcons]}
			<a href={path.href} class="group text-center">
				<div class="flex h-full flex-col items-center rounded-2xl border border-border bg-surface p-10 transition-all duration-300 hover:border-accent-primary/30 hover:shadow-xl">
					<div class="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-accent-primary/10 to-accent-gold/10 text-accent-primary transition-all duration-300 group-hover:bg-accent-primary group-hover:text-text-cream group-hover:shadow-lg group-hover:shadow-accent-primary/20">
						<Icon class="h-7 w-7" />
					</div>
					<h3 class="font-display text-xl font-semibold">{path.title}</h3>
					<p class="mt-3 flex-1 text-sm leading-relaxed text-text-secondary">{path.description}</p>
					<div class="mt-6 inline-flex items-center gap-1 text-sm font-medium text-accent-primary opacity-0 transition-all group-hover:opacity-100">
						{path.cta}
						<ArrowRight class="h-4 w-4 transition-transform group-hover:translate-x-1" />
					</div>
				</div>
			</a>
		{/each}
	</div>
</Section>

<!-- ============================== -->
<!-- 3. FEATURED ARTICLE — Magazine -->
<!-- ============================== -->
<Section class="bg-secondary/50">
	<div class="flex items-end justify-between">
		<div>
			<h2 class="font-display text-3xl font-bold sm:text-4xl">Latest Resources</h2>
			<p class="mt-2 text-text-secondary">Fresh insights to guide your journey</p>
		</div>
		<a href="/f/articles" class="hidden items-center gap-1 text-sm font-medium text-accent-primary hover:underline sm:inline-flex">
			View all
			<ArrowRight class="h-4 w-4" />
		</a>
	</div>

	<!-- Magazine layout: 1 large + 2 small -->
	<div class="mt-10 grid gap-6 lg:grid-cols-5">
		<!-- Large featured -->
		{#if featuredArticles[0]}
			<a href="/f/articles/{featuredArticles[0].slug}" class="group lg:col-span-3">
				<div class="flex h-full flex-col overflow-hidden rounded-xl border border-border bg-surface transition-all hover:shadow-lg">
					<div class="aspect-[16/9] bg-gradient-to-br from-accent-primary/20 to-accent-gold/20">
						<div class="flex h-full items-center justify-center">
							<BookOpen class="h-16 w-16 text-accent-primary/30" />
						</div>
					</div>
					<div class="flex flex-1 flex-col p-6 sm:p-8">
						<div class="flex items-center gap-2">
							<Badge variant="gold">
								{#snippet children()}Featured{/snippet}
							</Badge>
							<Badge variant="secondary">
								{#snippet children()}{featuredArticles[0].category}{/snippet}
							</Badge>
							<span class="text-xs text-text-secondary">{featuredArticles[0].readingTime}</span>
						</div>
						<h3 class="mt-4 font-display text-2xl font-bold leading-snug group-hover:text-accent-primary sm:text-3xl">
							{featuredArticles[0].title}
						</h3>
						<p class="mt-3 flex-1 text-base leading-relaxed text-text-secondary">
							{featuredArticles[0].excerpt}
						</p>
						<div class="mt-4 flex items-center gap-2 text-sm text-text-secondary">
							<span>{featuredArticles[0].author}</span>
							<span>&middot;</span>
							<span>{featuredArticles[0].date}</span>
						</div>
					</div>
				</div>
			</a>
		{/if}

		<!-- 2 smaller -->
		<div class="flex flex-col gap-6 lg:col-span-2">
			{#each featuredArticles.slice(1) as article}
				<a href="/f/articles/{article.slug}" class="group flex-1">
					<div class="flex h-full flex-col overflow-hidden rounded-xl border border-border bg-surface transition-all hover:shadow-lg">
						<div class="aspect-[16/10] bg-gradient-to-br from-accent-primary/20 to-accent-gold/20">
							<div class="flex h-full items-center justify-center">
								<BookOpen class="h-10 w-10 text-accent-primary/30" />
							</div>
						</div>
						<div class="flex flex-1 flex-col p-5">
							<div class="flex items-center gap-2">
								<Badge variant="secondary">
									{#snippet children()}{article.category}{/snippet}
								</Badge>
								<span class="text-xs text-text-secondary">{article.readingTime}</span>
							</div>
							<h3 class="mt-3 font-display text-lg font-semibold leading-snug group-hover:text-accent-primary">
								{article.title}
							</h3>
							<p class="mt-2 flex-1 text-sm text-text-secondary line-clamp-2">{article.excerpt}</p>
						</div>
					</div>
				</a>
			{/each}
		</div>
	</div>
</Section>

<!-- ============================== -->
<!-- 4. PRODUCTS — 3-card grid      -->
<!-- ============================== -->
<Section>
	<div class="mx-auto max-w-3xl text-center">
		<Badge variant="gold">
			{#snippet children()}Our Resources{/snippet}
		</Badge>
		<h2 class="mt-4 font-display text-3xl font-bold sm:text-4xl">
			Everything you need to begin
		</h2>
		<p class="mt-4 text-lg text-text-secondary">
			Thoughtfully crafted by Dr. Asad Tarsin to guide your first steps in Islam.
		</p>
	</div>

	<div class="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
		{#each featuredProducts as product}
			<a href="/f/shop/{product.handle}" class="group">
				<div class="flex h-full flex-col overflow-hidden rounded-xl border border-border bg-surface transition-all duration-200 hover:border-accent-primary/30 hover:shadow-lg">
					<div class="aspect-square bg-gradient-to-br from-bg-dark/5 to-accent-primary/10">
						<div class="flex h-full items-center justify-center">
							<BookOpen class="h-12 w-12 text-accent-primary/30" />
						</div>
					</div>
					<div class="flex flex-1 flex-col p-5">
						<div class="flex items-center gap-2">
							{#if product.badge}
								<Badge variant="gold">
									{#snippet children()}{product.badge}{/snippet}
								</Badge>
							{/if}
						</div>
						<h3 class="mt-2 font-display text-lg font-semibold group-hover:text-accent-primary">
							{product.title}
						</h3>
						<p class="mt-2 flex-1 text-sm text-text-secondary line-clamp-2">{product.description}</p>
						<div class="mt-4 flex items-center justify-between">
							<span class="font-display text-xl font-bold text-accent-primary">${product.price}</span>
							<span class="flex items-center gap-0.5 text-xs text-accent-gold">
								<Star class="h-3 w-3 fill-current" />
								{product.rating} ({product.reviewCount})
							</span>
						</div>
					</div>
				</div>
			</a>
		{/each}
	</div>

	<div class="mt-10 text-center">
		<Button variant="outline">
			{#snippet children()}
				Browse All Products
				<ArrowRight class="ml-1 h-4 w-4" />
			{/snippet}
		</Button>
	</div>
</Section>

<!-- ============================== -->
<!-- 5. COURSES — Horizontal cards   -->
<!-- ============================== -->
<Section class="bg-secondary/50">
	<div class="flex items-end justify-between">
		<div>
			<h2 class="font-display text-3xl font-bold sm:text-4xl">Guided courses</h2>
			<p class="mt-2 text-text-secondary">Structured learning at your own pace</p>
		</div>
		<a href="/f/courses" class="hidden items-center gap-1 text-sm font-medium text-accent-primary hover:underline sm:inline-flex">
			All courses
			<ArrowRight class="h-4 w-4" />
		</a>
	</div>

	<div class="mt-10 space-y-4">
		{#each featuredCourses as course}
			<a href="/f/courses/{course.slug}" class="group flex flex-col gap-5 rounded-xl border border-border bg-surface p-5 transition-all hover:border-accent-primary/30 hover:shadow-md sm:flex-row sm:items-center sm:p-6">
				<!-- Thumbnail -->
				<div class="flex h-24 w-full shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-accent-green/15 to-accent-primary/15 sm:w-36">
					<Play class="h-8 w-8 text-accent-green/40" />
				</div>

				<div class="flex-1">
					<div class="flex flex-wrap items-center gap-2">
						<Badge variant={course.difficulty === 'Beginner' ? 'green' : 'secondary'}>
							{#snippet children()}{course.difficulty}{/snippet}
						</Badge>
						<span class="text-xs text-text-secondary">{course.lessonCount} lessons &middot; {course.duration}</span>
					</div>
					<h3 class="mt-2 font-display text-lg font-semibold group-hover:text-accent-primary">
						{course.title}
					</h3>
					<p class="mt-1 text-sm text-text-secondary line-clamp-1">{course.description}</p>
					<div class="mt-2 flex items-center gap-3 text-xs text-text-secondary">
						<span>{course.instructor}</span>
						{#if course.enrolled}
							<span>&middot; {course.enrolled?.toLocaleString()} enrolled</span>
						{/if}
					</div>
				</div>

				<ArrowRight class="hidden h-5 w-5 shrink-0 text-text-secondary/30 transition-all group-hover:translate-x-1 group-hover:text-accent-primary sm:block" />
			</a>
		{/each}
	</div>
</Section>

<!-- ============================== -->
<!-- 6. TESTIMONIALS — Full-width    -->
<!-- ============================== -->
<section class="bg-bg-dark py-20 sm:py-28">
	<!-- Geometric pattern -->
	<div class="absolute inset-0 opacity-[0.02]">
		<svg class="h-full w-full" xmlns="http://www.w3.org/2000/svg">
			<defs>
				<pattern id="geo-f2" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
					<path d="M30 0L60 30L30 60L0 30Z" fill="none" stroke="currentColor" stroke-width="0.5" class="text-text-cream" />
				</pattern>
			</defs>
			<rect width="100%" height="100%" fill="url(#geo-f2)" />
		</svg>
	</div>

	<div class="relative mx-auto max-w-3xl px-4 text-center sm:px-6">
		<div class="flex justify-center gap-1">
			{#each Array(5) as _}
				<Star class="h-5 w-5 fill-accent-gold text-accent-gold" />
			{/each}
		</div>

		<blockquote class="mt-8 font-display text-2xl leading-relaxed text-text-cream sm:text-3xl">
			"{testimonials[testimonialIndex].quote}"
		</blockquote>

		<div class="mt-8">
			<p class="font-semibold text-text-cream">{testimonials[testimonialIndex].name}</p>
			<p class="text-sm text-text-cream/50">{testimonials[testimonialIndex].role}</p>
		</div>

		<div class="mt-8 flex items-center justify-center gap-4">
			<button
				onclick={prevTestimonial}
				class="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-text-cream/50 transition-colors hover:border-white/30 hover:text-text-cream"
				aria-label="Previous"
			>
				<ChevronLeft class="h-5 w-5" />
			</button>
			<div class="flex gap-2">
				{#each testimonials as _, i}
					<button
						class="h-2 w-2 rounded-full transition-colors {i === testimonialIndex ? 'bg-accent-gold' : 'bg-white/15'}"
						onclick={() => (testimonialIndex = i)}
						aria-label="Testimonial {i + 1}"
					></button>
				{/each}
			</div>
			<button
				onclick={nextTestimonial}
				class="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-text-cream/50 transition-colors hover:border-white/30 hover:text-text-cream"
				aria-label="Next"
			>
				<ChevronRight class="h-5 w-5" />
			</button>
		</div>
	</div>
</section>

<!-- ============================== -->
<!-- 7. DONATE — Centered focus      -->
<!-- ============================== -->
<Section>
	<div class="mx-auto max-w-3xl text-center">
		<Badge variant="gold">
			{#snippet children()}Make an Impact{/snippet}
		</Badge>
		<h2 class="mt-4 font-display text-3xl font-bold sm:text-4xl">
			Sponsor a boxed set for a new Muslim
		</h2>
		<p class="mt-4 text-lg text-text-secondary">
			Your generosity puts a complete Being Muslim boxed set in the hands of someone who needs it.
		</p>
	</div>

	<!-- Impact row -->
	<div class="mx-auto mt-10 flex max-w-2xl flex-wrap justify-center gap-8">
		{#each [
			{ icon: Gift, value: donationStats.totalSponsored.toLocaleString(), label: 'Sponsored' },
			{ icon: Globe, value: donationStats.countriesReached.toString(), label: 'Countries' },
			{ icon: Users, value: donationStats.communitiesReached.toString(), label: 'Communities' }
		] as stat}
			<div class="flex items-center gap-3">
				<svelte:component this={stat.icon} class="h-5 w-5 text-accent-gold" />
				<div>
					<p class="font-display text-lg font-bold text-accent-primary">{stat.value}</p>
					<p class="text-xs text-text-secondary">{stat.label}</p>
				</div>
			</div>
		{/each}
	</div>

	<!-- Tiers -->
	<div class="mt-12 grid gap-6 sm:grid-cols-3">
		{#each sponsorshipTiers as tier}
			<div class="relative flex flex-col rounded-xl border bg-surface p-6 transition-all hover:shadow-lg {tier.popular ? 'border-accent-primary shadow-md' : 'border-border'}">
				{#if tier.popular}
					<div class="absolute -top-3 left-1/2 -translate-x-1/2">
						<Badge variant="default">
							{#snippet children()}Most Popular{/snippet}
						</Badge>
					</div>
				{/if}
				<h3 class="font-display text-lg font-semibold">{tier.name}</h3>
				<p class="mt-2 flex-1 text-sm text-text-secondary">{tier.description}</p>
				<p class="mt-4 font-display text-3xl font-bold text-accent-primary">${tier.price}</p>
				<p class="mt-1 text-xs text-text-secondary">{tier.impact}</p>
				<Button variant={tier.popular ? 'default' : 'outline'} class="mt-6 w-full">
					{#snippet children()}
						Sponsor Now
						<Heart class="ml-1 h-4 w-4" />
					{/snippet}
				</Button>
			</div>
		{/each}
	</div>
</Section>

<!-- ============================== -->
<!-- 8. NEWSLETTER — Dark footer     -->
<!-- ============================== -->
<section class="bg-bg-dark py-16 sm:py-24">
	<div class="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
		<div class="mx-auto max-w-xl text-center">
			<Mail class="mx-auto h-10 w-10 text-accent-gold" />
			<h2 class="mt-4 font-display text-3xl font-bold text-text-cream sm:text-4xl">
				Stay on the path
			</h2>
			<p class="mt-4 text-text-cream/70">
				Weekly insights, resources, and encouragement delivered to your inbox.
			</p>
			<form class="mt-8 flex flex-col gap-3 sm:flex-row" onsubmit={(e) => e.preventDefault()}>
				<input
					type="email"
					bind:value={email}
					placeholder="Enter your email"
					required
					class="flex-1 rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-text-cream placeholder:text-text-cream/40 focus:border-accent-primary focus:outline-none focus:ring-2 focus:ring-accent-primary/50"
				/>
				<Button size="lg" class="bg-accent-primary text-text-cream hover:bg-accent-hover">
					{#snippet children()}
						Subscribe
						<ArrowRight class="ml-1 h-4 w-4" />
					{/snippet}
				</Button>
			</form>
			<p class="mt-3 text-xs text-text-cream/40">Join 5,000+ subscribers. Unsubscribe anytime.</p>
		</div>
	</div>
</section>
