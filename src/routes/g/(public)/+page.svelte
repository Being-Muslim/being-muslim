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
		Gift,
		Globe
	} from 'lucide-svelte';

	const featuredArticles = articles.filter((a) => a.featured).slice(0, 3);
	const allArticles = articles.slice(0, 5);
	const featuredProducts = products.slice(0, 2);
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
<!-- 1. HERO — Compact split layout  -->
<!-- ============================== -->
<section class="relative overflow-hidden bg-bg-dark">
	<!-- Geometric pattern -->
	<div class="absolute inset-0 opacity-[0.03]">
		<svg class="h-full w-full" xmlns="http://www.w3.org/2000/svg">
			<defs>
				<pattern id="geo-g" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
					<path d="M30 0L60 30L30 60L0 30Z" fill="none" stroke="currentColor" stroke-width="0.5" class="text-text-cream" />
				</pattern>
			</defs>
			<rect width="100%" height="100%" fill="url(#geo-g)" />
		</svg>
	</div>

	<div class="relative mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
		<div class="grid items-center gap-8 py-20 sm:py-28 lg:grid-cols-2 lg:gap-16 lg:py-32">
			<!-- Left: Text -->
			<div>
				<h1 class="font-display text-4xl font-bold leading-tight text-text-cream sm:text-5xl">
					Your guide to a meaningful
					<span class="text-accent-gold">Islamic journey</span>
				</h1>
				<p class="mt-6 max-w-lg text-lg leading-relaxed text-text-cream/70">
					Clear, compassionate resources for exploring Islam, building your practice, and finding community.
				</p>
				<div class="mt-8 flex flex-wrap gap-4">
					<Button size="lg" class="bg-accent-primary text-text-cream hover:bg-accent-hover">
						{#snippet children()}
							Start Learning
							<ArrowRight class="ml-1 h-5 w-5" />
						{/snippet}
					</Button>
					<Button variant="outline" size="lg" class="border-text-cream/30 text-text-cream hover:bg-white/10 hover:text-text-cream">
						{#snippet children()}
							Browse Shop
						{/snippet}
					</Button>
				</div>
			</div>

			<!-- Right: Stats grid -->
			<div class="grid grid-cols-2 gap-4">
				{#each stats as stat, i}
					<div class="rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
						<p class="font-display text-3xl font-bold text-accent-gold">{stat.value}</p>
						<p class="mt-1 text-sm text-text-cream/50">{stat.label}</p>
					</div>
				{/each}
			</div>
		</div>
	</div>

	<!-- Gradient fade -->
	<div class="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-bg-primary to-transparent"></div>
</section>

<!-- ============================== -->
<!-- 2. AUDIENCE PATHS — Horizontal  -->
<!-- ============================== -->
<Section>
	<h2 class="font-display text-3xl font-bold sm:text-4xl">Where are you on your journey?</h2>

	<div class="mt-8 grid gap-4 sm:grid-cols-3">
		{#each audiencePaths as path}
			{@const Icon = audienceIcons[path.icon as keyof typeof audienceIcons]}
			<a href={path.href} class="group flex items-start gap-4 rounded-xl border border-border bg-surface p-5 transition-all hover:border-accent-primary/30 hover:shadow-md">
				<div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent-primary/10 text-accent-primary transition-colors group-hover:bg-accent-primary group-hover:text-text-cream">
					<Icon class="h-5 w-5" />
				</div>
				<div>
					<h3 class="font-display text-base font-semibold">{path.title}</h3>
					<p class="mt-1 text-sm text-text-secondary line-clamp-2">{path.description}</p>
				</div>
			</a>
		{/each}
	</div>
</Section>

<!-- ============================== -->
<!-- 3. ARTICLES — Editorial list    -->
<!-- ============================== -->
<Section class="bg-secondary/50">
	<div class="flex items-end justify-between">
		<h2 class="font-display text-3xl font-bold sm:text-4xl">Latest Articles</h2>
		<a href="/g/articles" class="hidden items-center gap-1 text-sm font-medium text-accent-primary hover:underline sm:inline-flex">
			View all
			<ArrowRight class="h-4 w-4" />
		</a>
	</div>

	<!-- List layout — no images, pure content -->
	<div class="mt-8 divide-y divide-border rounded-xl border border-border bg-surface">
		{#each allArticles as article}
			<a href="/g/articles/{article.slug}" class="group flex items-center gap-6 p-5 transition-colors hover:bg-secondary/50">
				<div class="flex-1">
					<div class="flex flex-wrap items-center gap-2">
						<Badge variant="secondary">
							{#snippet children()}{article.category}{/snippet}
						</Badge>
						<span class="text-xs text-text-secondary">{article.readingTime}</span>
						<span class="text-xs text-text-secondary">&middot; {article.author}</span>
					</div>
					<h3 class="mt-2 font-display text-lg font-semibold group-hover:text-accent-primary">
						{article.title}
					</h3>
					<p class="mt-1 text-sm text-text-secondary line-clamp-1">{article.excerpt}</p>
				</div>
				<ArrowRight class="hidden h-5 w-5 shrink-0 text-text-secondary/30 transition-all group-hover:translate-x-1 group-hover:text-accent-primary sm:block" />
			</a>
		{/each}
	</div>
</Section>

<!-- ============================== -->
<!-- 4. PRODUCT SPOTLIGHT — Feature  -->
<!-- ============================== -->
<Section>
	<div class="grid items-center gap-12 lg:grid-cols-5">
		<!-- Featured product — takes 3 cols -->
		<div class="lg:col-span-3">
			<div class="overflow-hidden rounded-2xl border border-border bg-surface">
				<div class="aspect-[16/9] bg-gradient-to-br from-bg-dark to-accent-primary/80">
					<div class="flex h-full flex-col items-center justify-center text-center text-text-cream">
						<BookOpen class="mb-4 h-16 w-16 opacity-60" />
						<p class="font-display text-3xl font-bold">Being Muslim</p>
						<p class="mt-2 text-text-cream/70">A Practical Guide</p>
					</div>
				</div>
				<div class="p-6 sm:p-8">
					<div class="flex items-center gap-2">
						<Badge variant="gold">
							{#snippet children()}Bestseller{/snippet}
						</Badge>
						<span class="flex items-center gap-0.5 text-xs text-accent-gold">
							<Star class="h-3 w-3 fill-current" />
							{products[0].rating} ({products[0].reviewCount} reviews)
						</span>
					</div>
					<h3 class="mt-3 font-display text-2xl font-bold">{products[0].title}</h3>
					<p class="mt-2 text-text-secondary">{products[0].description}</p>
					<div class="mt-6 flex items-center gap-4">
						<span class="font-display text-2xl font-bold text-accent-primary">${products[0].price}</span>
						<Button>
							{#snippet children()}
								View Details
								<ArrowRight class="ml-1 h-4 w-4" />
							{/snippet}
						</Button>
					</div>
				</div>
			</div>
		</div>

		<!-- Other products — 2 cols -->
		<div class="space-y-4 lg:col-span-2">
			{#each products.slice(1, 4) as product}
				<a href="/g/shop/{product.handle}" class="group flex gap-4 rounded-xl border border-border bg-surface p-4 transition-all hover:border-accent-primary/30 hover:shadow-md">
					<div class="flex h-16 w-16 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-accent-primary/10 to-accent-gold/10">
						<BookOpen class="h-6 w-6 text-accent-primary/50" />
					</div>
					<div class="flex-1">
						<h3 class="font-display text-sm font-semibold group-hover:text-accent-primary">{product.title}</h3>
						<div class="mt-1 flex items-center gap-2">
							<span class="font-semibold text-accent-primary">${product.price}</span>
							{#if product.badge}
								<Badge variant="gold">
									{#snippet children()}{product.badge}{/snippet}
								</Badge>
							{/if}
						</div>
					</div>
				</a>
			{/each}

			<a href="/g/shop" class="inline-flex items-center gap-1 text-sm font-medium text-accent-primary hover:underline">
				View all products
				<ArrowRight class="h-4 w-4" />
			</a>
		</div>
	</div>
</Section>

<!-- ============================== -->
<!-- 5. COURSES — Compact grid       -->
<!-- ============================== -->
<Section class="bg-secondary/50">
	<div class="flex items-end justify-between">
		<div>
			<h2 class="font-display text-3xl font-bold sm:text-4xl">Learn at your own pace</h2>
			<p class="mt-2 text-text-secondary">Structured courses by scholars and educators</p>
		</div>
	</div>

	<div class="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
		{#each featuredCourses as course}
			<a href="/g/courses/{course.slug}" class="group">
				<div class="flex h-full flex-col overflow-hidden rounded-xl border border-border bg-surface transition-all hover:shadow-lg">
					<div class="aspect-[16/9] bg-gradient-to-br from-accent-green/20 to-accent-primary/20">
						<div class="flex h-full items-center justify-center">
							<Play class="h-10 w-10 text-accent-green/40" />
						</div>
					</div>
					<div class="flex flex-1 flex-col p-5">
						<div class="flex items-center gap-2">
							<Badge variant={course.difficulty === 'Beginner' ? 'green' : 'secondary'}>
								{#snippet children()}{course.difficulty}{/snippet}
							</Badge>
							<span class="text-xs text-text-secondary">{course.lessonCount} lessons</span>
						</div>
						<h3 class="mt-3 font-display text-lg font-semibold group-hover:text-accent-primary">
							{course.title}
						</h3>
						<p class="mt-2 flex-1 text-sm text-text-secondary line-clamp-2">{course.description}</p>
						<div class="mt-4 flex items-center justify-between text-xs text-text-secondary">
							<span>{course.instructor}</span>
							<span>{course.duration}</span>
						</div>
						{#if course.enrolled}
							<div class="mt-3">
								<div class="flex items-center justify-between text-xs text-text-secondary">
									<span>{course.enrolled?.toLocaleString()} enrolled</span>
								</div>
								<Progress value={65} class="mt-1.5 h-1.5" />
							</div>
						{/if}
					</div>
				</div>
			</a>
		{/each}
	</div>
</Section>

<!-- ============================== -->
<!-- 6. COMMUNITY + DONATE — Side by side -->
<!-- ============================== -->
<Section>
	<div class="grid gap-8 lg:grid-cols-2">
		<!-- Community -->
		<div class="overflow-hidden rounded-2xl bg-gradient-to-br from-bg-dark to-accent-primary/20 p-8 sm:p-10">
			<h2 class="font-display text-2xl font-bold text-text-cream sm:text-3xl">
				You're not alone
			</h2>
			<p class="mt-3 text-text-cream/70">
				Join a community of seekers, converts, and lifelong Muslims.
			</p>
			<div class="mt-6 flex flex-wrap gap-5">
				<div class="flex items-center gap-2">
					<Users class="h-4 w-4 text-accent-gold" />
					<span class="text-sm text-text-cream"><strong class="text-accent-gold">2,500+</strong> members</span>
				</div>
				<div class="flex items-center gap-2">
					<MessageCircle class="h-4 w-4 text-accent-gold" />
					<span class="text-sm text-text-cream"><strong class="text-accent-gold">1,200+</strong> discussions</span>
				</div>
			</div>

			<!-- Mini chat preview -->
			<div class="mt-6 space-y-3 rounded-lg border border-white/10 bg-white/5 p-4">
				{#each [
					{ name: 'Aminah', msg: 'Just took my shahada! 🤲', time: '2m' },
					{ name: 'Omar', msg: 'Welcome to the family! 💚', time: '1m' }
				] as message}
					<div class="flex gap-2">
						<div class="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent-primary/30 text-[10px] font-bold text-text-cream">
							{message.name[0]}
						</div>
						<div>
							<span class="text-xs font-medium text-text-cream">{message.name}</span>
							<span class="ml-2 text-[10px] text-text-cream/30">{message.time}</span>
							<p class="text-xs text-text-cream/60">{message.msg}</p>
						</div>
					</div>
				{/each}
			</div>

			<Button size="default" class="mt-6 bg-accent-primary text-text-cream hover:bg-accent-hover">
				{#snippet children()}
					Join Community
					<ArrowRight class="ml-1 h-4 w-4" />
				{/snippet}
			</Button>
		</div>

		<!-- Donate -->
		<div class="rounded-2xl border border-border bg-surface p-8 sm:p-10">
			<Badge variant="gold">
				{#snippet children()}Make an Impact{/snippet}
			</Badge>
			<h2 class="mt-4 font-display text-2xl font-bold sm:text-3xl">
				Sponsor a boxed set
			</h2>
			<p class="mt-3 text-text-secondary">
				Put a complete Being Muslim boxed set in the hands of someone who needs it.
			</p>

			<!-- Quick stats -->
			<div class="mt-6 grid grid-cols-2 gap-4">
				<div>
					<p class="font-display text-2xl font-bold text-accent-primary">{donationStats.totalSponsored.toLocaleString()}</p>
					<p class="text-xs text-text-secondary">Sets sponsored</p>
				</div>
				<div>
					<p class="font-display text-2xl font-bold text-accent-primary">{donationStats.countriesReached}</p>
					<p class="text-xs text-text-secondary">Countries</p>
				</div>
			</div>

			<!-- Quick tier buttons -->
			<div class="mt-6 flex flex-wrap gap-3">
				{#each sponsorshipTiers as tier}
					<Button variant={tier.popular ? 'default' : 'outline'} size="sm">
						{#snippet children()}
							${tier.price}
							{#if tier.popular}
								<Heart class="ml-1 h-3 w-3" />
							{/if}
						{/snippet}
					</Button>
				{/each}
			</div>

			<a href="/g/give" class="mt-6 inline-flex items-center gap-1 text-sm font-medium text-accent-primary hover:underline">
				Learn more about giving
				<ArrowRight class="h-4 w-4" />
			</a>
		</div>
	</div>
</Section>

<!-- ============================== -->
<!-- 7. TESTIMONIAL — Compact        -->
<!-- ============================== -->
<Section class="bg-secondary/50">
	<div class="mx-auto max-w-3xl">
		<div class="rounded-2xl border border-border bg-surface p-8 text-center sm:p-12">
			<div class="flex justify-center gap-1">
				{#each Array(5) as _}
					<Star class="h-5 w-5 fill-accent-gold text-accent-gold" />
				{/each}
			</div>
			<blockquote class="mt-6 font-display text-xl leading-relaxed sm:text-2xl">
				"{testimonials[testimonialIndex].quote}"
			</blockquote>
			<div class="mt-6">
				<p class="font-semibold">{testimonials[testimonialIndex].name}</p>
				<p class="text-sm text-text-secondary">{testimonials[testimonialIndex].role}</p>
			</div>
		</div>

		<div class="mt-6 flex items-center justify-center gap-4">
			<button
				onclick={prevTestimonial}
				class="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface transition-colors hover:bg-secondary"
				aria-label="Previous"
			>
				<ChevronLeft class="h-5 w-5" />
			</button>
			<div class="flex gap-2">
				{#each testimonials as _, i}
					<button
						class="h-2 w-2 rounded-full transition-colors {i === testimonialIndex ? 'bg-accent-primary' : 'bg-border'}"
						onclick={() => (testimonialIndex = i)}
						aria-label="Testimonial {i + 1}"
					></button>
				{/each}
			</div>
			<button
				onclick={nextTestimonial}
				class="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface transition-colors hover:bg-secondary"
				aria-label="Next"
			>
				<ChevronRight class="h-5 w-5" />
			</button>
		</div>
	</div>
</Section>

<!-- ============================== -->
<!-- 8. NEWSLETTER — Dark band       -->
<!-- ============================== -->
<section class="bg-bg-dark py-16 sm:py-20">
	<div class="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
		<div class="flex flex-col items-center gap-8 sm:flex-row sm:justify-between">
			<div>
				<h2 class="font-display text-2xl font-bold text-text-cream sm:text-3xl">Stay on the path</h2>
				<p class="mt-2 text-text-cream/60">Weekly insights and resources. No spam.</p>
			</div>
			<form class="flex w-full max-w-md gap-3" onsubmit={(e) => e.preventDefault()}>
				<input
					type="email"
					bind:value={email}
					placeholder="Enter your email"
					required
					class="flex-1 rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-text-cream placeholder:text-text-cream/40 focus:border-accent-primary focus:outline-none focus:ring-2 focus:ring-accent-primary/50"
				/>
				<Button class="bg-accent-primary text-text-cream hover:bg-accent-hover">
					{#snippet children()}Subscribe{/snippet}
				</Button>
			</form>
		</div>
	</div>
</section>
