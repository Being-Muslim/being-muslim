<script lang="ts">
	import { withPrefix } from '$lib/data/utils.js';
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
		Sparkles
	} from 'lucide-svelte';

	const p = (href: string) => withPrefix('/e', href);

	const featuredArticles = articles.filter((a) => a.featured).slice(0, 3);
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
	<meta
		name="description"
		content="Empowering converts and beginners on their Islamic journey through education, community, and support."
	/>
</svelte:head>

<!-- ============================== -->
<!-- 1. HERO — Centered glass panel -->
<!-- ============================== -->
<section class="flex min-h-[90vh] items-center justify-center px-4 py-32">
	<div class="glass-panel mx-auto max-w-3xl p-10 text-center sm:p-14">
		<div class="mb-6 inline-flex items-center gap-2 rounded-full bg-accent-primary/10 px-4 py-1.5 text-sm text-accent-primary">
			<Sparkles class="h-4 w-4" />
			<span>10,000+ books distributed worldwide</span>
		</div>

		<h1 class="font-display text-4xl font-semibold leading-tight text-text-primary sm:text-5xl lg:text-6xl">
			Your Islamic Learning
			<span class="text-accent-primary">Companion</span>
		</h1>

		<p class="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-text-secondary">
			Whether you're exploring Islam, newly converted, or reconnecting with your faith —
			discover articles, courses, and a supportive community on your journey.
		</p>

		<div class="mt-10 flex flex-wrap justify-center gap-4">
			<a
				href={p('/courses')}
				class="glow inline-flex items-center gap-2 rounded-full bg-accent-primary px-8 py-3 font-medium text-white transition-colors hover:bg-accent-hover"
			>
				Start Learning
				<ArrowRight class="h-5 w-5" />
			</a>
			<a
				href={p('/articles')}
				class="glow inline-flex items-center gap-2 rounded-full border border-border px-8 py-3 font-medium text-text-primary transition-colors hover:bg-white/50"
			>
				Explore Resources
			</a>
		</div>
	</div>
</section>

<!-- SVG Wave -->
<div class="relative -mt-1">
	<svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full">
		<path d="M0 30C240 50 480 10 720 30C960 50 1200 10 1440 30V60H0V30Z" fill="currentColor" class="text-bg-primary/50" />
	</svg>
</div>

<!-- ============================== -->
<!-- 2. SOCIAL PROOF                -->
<!-- ============================== -->
<section class="py-12">
	<div class="mx-auto max-w-4xl px-4 sm:px-6">
		<div class="glass-panel grid grid-cols-2 gap-4 p-6 sm:grid-cols-4 sm:p-8">
			{#each stats as stat}
				<div class="text-center">
					<p class="font-display text-2xl font-bold text-accent-primary sm:text-3xl">{stat.value}</p>
					<p class="mt-1 text-sm text-text-secondary">{stat.label}</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- SVG Wave -->
<div class="relative -mb-1">
	<svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full">
		<path d="M0 30C360 10 720 50 1080 30C1260 20 1380 40 1440 30V0H0V30Z" fill="currentColor" class="text-bg-primary/30" />
	</svg>
</div>

<!-- ============================== -->
<!-- 3. WHO IS THIS FOR?            -->
<!-- ============================== -->
<section class="py-20 md:py-32">
	<div class="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
		<div class="mx-auto max-w-3xl text-center">
			<h2 class="font-display text-3xl font-semibold text-text-primary sm:text-4xl">Where are you on your journey?</h2>
			<p class="mx-auto mt-4 max-w-2xl text-lg text-text-secondary">
				Every path is unique. Find the right starting point for you.
			</p>
		</div>

		<div class="mx-auto mt-12 grid max-w-4xl gap-6 sm:grid-cols-3">
			{#each audiencePaths as path}
				{@const Icon = audienceIcons[path.icon as keyof typeof audienceIcons]}
				<a href={p(path.href)} class="glass-panel glow group p-8 text-center transition-all">
					<div class="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-accent-primary/10 text-accent-primary transition-colors group-hover:bg-accent-primary group-hover:text-white">
						<Icon class="h-7 w-7" />
					</div>
					<h3 class="font-display text-xl font-semibold text-text-primary">{path.title}</h3>
					<p class="mt-2 text-sm leading-relaxed text-text-secondary">{path.description}</p>
					<div class="mt-4 inline-flex items-center gap-1 text-sm font-medium text-accent-primary">
						{path.cta}
						<ArrowRight class="h-4 w-4 transition-transform group-hover:translate-x-1" />
					</div>
				</a>
			{/each}
		</div>
	</div>
</section>

<!-- SVG Wave -->
<div class="relative -mb-1">
	<svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full">
		<path d="M0 30C240 50 480 10 720 30C960 50 1200 10 1440 30V60H0V30Z" fill="currentColor" class="text-white/30" />
	</svg>
</div>

<!-- ============================== -->
<!-- 4. FEATURED CONTENT            -->
<!-- ============================== -->
<section class="py-20 md:py-32">
	<div class="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
		<div class="mx-auto max-w-3xl text-center">
			<h2 class="font-display text-3xl font-semibold text-text-primary sm:text-4xl">Latest Resources</h2>
			<p class="mt-4 text-text-secondary">Fresh insights to nourish your journey</p>
		</div>

		<div class="mx-auto mt-10 grid max-w-4xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
			{#each featuredArticles as article}
				<a href={p('/articles/' + article.slug)} class="glass-panel glow group overflow-hidden transition-all">
					<div class="aspect-[16/10] bg-gradient-to-br from-accent-primary/10 to-accent-gold/10">
						<div class="flex h-full items-center justify-center">
							<BookOpen class="h-12 w-12 text-accent-primary/30" />
						</div>
					</div>
					<div class="p-5">
						<div class="flex items-center gap-2">
							<span class="rounded-full bg-accent-primary/10 px-2.5 py-0.5 text-xs font-medium text-accent-primary">{article.category}</span>
							<span class="text-xs text-text-secondary">{article.readingTime}</span>
						</div>
						<h3 class="mt-3 font-display text-lg font-semibold leading-snug text-text-primary group-hover:text-accent-primary">
							{article.title}
						</h3>
						<p class="mt-2 line-clamp-2 text-sm text-text-secondary">{article.excerpt}</p>
					</div>
				</a>
			{/each}
		</div>

		<div class="mt-10 text-center">
			<a href={p('/articles')} class="glow inline-flex items-center gap-1 rounded-full border border-border px-5 py-2.5 text-sm font-medium text-text-primary transition-all hover:border-accent-primary/30 hover:text-accent-primary">
				View all resources
				<ArrowRight class="h-4 w-4" />
			</a>
		</div>
	</div>
</section>

<!-- SVG Wave -->
<div class="relative -mb-1">
	<svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full">
		<path d="M0 20C360 50 720 0 1080 30C1260 45 1380 15 1440 25V60H0V20Z" fill="currentColor" class="text-bg-primary/30" />
	</svg>
</div>

<!-- ============================== -->
<!-- 5. PRODUCTS SPOTLIGHT          -->
<!-- ============================== -->
<section class="py-20 md:py-32">
	<div class="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
		<div class="grid items-center gap-12 lg:grid-cols-2">
			<div class="mx-auto max-w-lg lg:mx-0">
				<span class="inline-flex items-center rounded-full bg-accent-gold/10 px-3 py-1 text-xs font-medium text-accent-gold">Bestselling Resources</span>
				<h2 class="mt-4 font-display text-3xl font-semibold text-text-primary sm:text-4xl">
					Everything you need to begin
				</h2>
				<p class="mt-4 text-lg leading-relaxed text-text-secondary">
					Dr. Asad Tarsin's comprehensive guide has helped thousands begin their journey.
					Now available as a complete boxed set with prayer cards and quick-reference guides.
				</p>

				<div class="mt-8 space-y-4">
					{#each featuredProducts as product}
						<a href={p('/shop/' + product.handle)} class="glass-panel glow group flex gap-4 p-4 transition-all">
							<div class="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-accent-primary/10 to-accent-gold/10">
								<BookOpen class="h-8 w-8 text-accent-primary/50" />
							</div>
							<div class="flex flex-1 flex-col justify-center">
								<div class="flex items-center gap-2">
									<h3 class="font-display text-base font-semibold text-text-primary">{product.title}</h3>
									{#if product.badge}
										<span class="rounded-full bg-accent-gold/10 px-2 py-0.5 text-xs font-medium text-accent-gold">{product.badge}</span>
									{/if}
								</div>
								<div class="mt-1 flex items-center gap-3">
									<span class="font-semibold text-accent-primary">${product.price}</span>
									<span class="flex items-center gap-0.5 text-xs text-accent-gold">
										<Star class="h-3 w-3 fill-current" />
										{product.rating} ({product.reviewCount})
									</span>
								</div>
							</div>
							<div class="flex items-center">
								<ArrowRight class="h-5 w-5 text-text-secondary transition-transform group-hover:translate-x-1 group-hover:text-accent-primary" />
							</div>
						</a>
					{/each}
				</div>

				<a href={p('/shop')} class="glow mt-6 inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-medium text-text-primary transition-all hover:border-accent-primary/30 hover:text-accent-primary">
					Browse All Products <ArrowRight class="h-4 w-4" />
				</a>
			</div>

			<!-- Product Image Area -->
			<div class="flex items-center justify-center">
				<div class="glass-panel relative aspect-square w-full max-w-md p-12">
					<div class="flex h-full flex-col items-center justify-center text-center">
						<BookOpen class="mb-4 h-20 w-20 text-accent-primary/40" />
						<p class="font-display text-2xl font-bold text-text-primary">Being Muslim</p>
						<p class="mt-2 text-sm text-text-secondary">A Practical Guide</p>
						<p class="mt-1 text-xs text-text-secondary/70">by Dr. Asad Tarsin</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- SVG Wave -->
<div class="relative -mb-1">
	<svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full">
		<path d="M0 30C240 50 480 10 720 30C960 50 1200 10 1440 30V60H0V30Z" fill="currentColor" class="text-white/20" />
	</svg>
</div>

<!-- ============================== -->
<!-- 6. COURSE PREVIEW              -->
<!-- ============================== -->
<section class="py-20 md:py-32">
	<div class="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
		<div class="mx-auto max-w-3xl text-center">
			<h2 class="font-display text-3xl font-semibold text-text-primary sm:text-4xl">Grow at your own pace</h2>
			<p class="mx-auto mt-4 max-w-2xl text-lg text-text-secondary">
				Structured courses designed by scholars and educators to guide you step by step.
			</p>
		</div>

		<div class="mx-auto mt-12 grid max-w-4xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
			{#each featuredCourses as course}
				<a href={p('/courses/' + course.slug)} class="glass-panel glow group overflow-hidden transition-all">
					<div class="aspect-[16/9] bg-gradient-to-br from-accent-primary/10 to-accent-green/10">
						<div class="flex h-full items-center justify-center">
							<Play class="h-12 w-12 text-accent-primary/30" />
						</div>
					</div>
					<div class="p-5">
						<div class="flex items-center gap-2">
							<span class="rounded-full bg-accent-primary/10 px-2.5 py-0.5 text-xs font-medium text-accent-primary">{course.difficulty}</span>
							<span class="text-xs text-text-secondary">{course.lessonCount} lessons</span>
						</div>
						<h3 class="mt-3 font-display text-lg font-semibold text-text-primary group-hover:text-accent-primary">
							{course.title}
						</h3>
						<p class="mt-2 flex-1 text-sm text-text-secondary line-clamp-2">{course.description}</p>
						<div class="mt-4 flex items-center justify-between text-xs text-text-secondary">
							<span>{course.instructor}</span>
							<span>{course.duration}</span>
						</div>
					</div>
				</a>
			{/each}
		</div>

		<div class="mt-10 text-center">
			<a href={p('/courses')} class="glow inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-medium text-text-primary transition-all hover:border-accent-primary/30 hover:text-accent-primary">
				Explore All Courses <ArrowRight class="h-4 w-4" />
			</a>
		</div>
	</div>
</section>

<!-- SVG Wave -->
<div class="relative -mb-1">
	<svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full">
		<path d="M0 20C360 50 720 0 1080 30C1260 45 1380 15 1440 25V60H0V20Z" fill="currentColor" class="text-accent-primary/5" />
	</svg>
</div>

<!-- ============================== -->
<!-- 7. COMMUNITY TEASER            -->
<!-- ============================== -->
<section class="py-20 md:py-32">
	<div class="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
		<div class="glass-panel overflow-hidden p-8 sm:p-12 lg:p-16">
			<div class="grid items-center gap-8 lg:grid-cols-2">
				<div class="text-center lg:text-left">
					<h2 class="font-display text-3xl font-semibold text-text-primary sm:text-4xl">
						You're not walking this path alone
					</h2>
					<p class="mt-4 text-lg leading-relaxed text-text-secondary">
						Join a supportive community of fellow seekers, converts, and lifelong Muslims. Ask questions, share experiences, and grow together.
					</p>
					<div class="mt-8 flex flex-wrap justify-center gap-6 lg:justify-start">
						<div class="flex items-center gap-2">
							<Users class="h-5 w-5 text-accent-primary" />
							<span class="text-text-primary"><strong class="text-accent-primary">2,500+</strong> members</span>
						</div>
						<div class="flex items-center gap-2">
							<MessageCircle class="h-5 w-5 text-accent-primary" />
							<span class="text-text-primary"><strong class="text-accent-primary">1,200+</strong> discussions</span>
						</div>
					</div>
					<a href={p('/community')} class="glow mt-8 inline-flex items-center gap-2 rounded-full bg-accent-primary px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-accent-hover">
						Join the Community <ArrowRight class="h-5 w-5" />
					</a>
				</div>

				<!-- Chat Preview -->
				<div class="glass-panel p-6">
					<div class="space-y-4">
						{#each [
							{ name: 'Aminah', msg: 'Salaam everyone! Just took my shahada yesterday', time: '2m ago' },
							{ name: 'Omar', msg: 'MashaAllah! Welcome to the family, sister!', time: '1m ago' },
							{ name: 'Fatima', msg: 'So happy for you! Feel free to ask anything here.', time: 'just now' }
						] as message}
							<div class="flex gap-3">
								<div class="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent-primary/10 text-xs font-bold text-accent-primary">
									{message.name[0]}
								</div>
								<div>
									<div class="flex items-center gap-2">
										<span class="text-sm font-medium text-text-primary">{message.name}</span>
										<span class="text-xs text-text-secondary">{message.time}</span>
									</div>
									<p class="mt-0.5 text-sm text-text-secondary">{message.msg}</p>
								</div>
							</div>
						{/each}
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- SVG Wave -->
<div class="relative -mb-1">
	<svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full">
		<path d="M0 30C240 50 480 10 720 30C960 50 1200 10 1440 30V60H0V30Z" fill="currentColor" class="text-white/20" />
	</svg>
</div>

<!-- ============================== -->
<!-- 8. DONATION / SPONSORSHIP      -->
<!-- ============================== -->
<section class="py-20 md:py-32">
	<div class="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
		<div class="mx-auto max-w-3xl text-center">
			<span class="inline-flex items-center rounded-full bg-accent-gold/10 px-3 py-1 text-xs font-medium text-accent-gold">Plant a Seed of Knowledge</span>
			<h2 class="mt-4 font-display text-3xl font-semibold text-text-primary sm:text-4xl">
				Sponsor a boxed set for a new Muslim
			</h2>
			<p class="mx-auto mt-4 max-w-2xl text-lg text-text-secondary">
				Many new Muslims can't afford the resources they need. Your sponsorship puts a complete
				Being Muslim boxed set in their hands.
			</p>
		</div>

		<!-- Impact Stats -->
		<div class="mx-auto mt-10 grid max-w-3xl grid-cols-2 gap-6 sm:grid-cols-4">
			<div class="glass-panel p-4 text-center">
				<p class="font-display text-2xl font-bold text-accent-primary">{donationStats.totalSponsored.toLocaleString()}</p>
				<p class="mt-1 text-xs text-text-secondary">Sets Sponsored</p>
			</div>
			<div class="glass-panel p-4 text-center">
				<p class="font-display text-2xl font-bold text-accent-primary">{donationStats.communitiesReached}</p>
				<p class="mt-1 text-xs text-text-secondary">Communities</p>
			</div>
			<div class="glass-panel p-4 text-center">
				<p class="font-display text-2xl font-bold text-accent-primary">{donationStats.countriesReached}</p>
				<p class="mt-1 text-xs text-text-secondary">Countries</p>
			</div>
			<div class="glass-panel p-4 text-center">
				<p class="font-display text-2xl font-bold text-accent-primary">{donationStats.monthlyDonors}</p>
				<p class="mt-1 text-xs text-text-secondary">Monthly Donors</p>
			</div>
		</div>

		<!-- Sponsorship Tiers -->
		<div class="mx-auto mt-12 grid max-w-4xl gap-6 sm:grid-cols-3">
			{#each sponsorshipTiers as tier}
				<div class="glass-panel glow relative flex flex-col p-6 transition-all {tier.popular ? 'ring-2 ring-accent-primary' : ''}">
					{#if tier.popular}
						<div class="absolute -top-3 left-1/2 -translate-x-1/2">
							<span class="rounded-full bg-accent-primary px-3 py-1 text-xs font-medium text-white">Most Popular</span>
						</div>
					{/if}
					<h3 class="font-display text-lg font-semibold text-text-primary">{tier.name}</h3>
					<p class="mt-2 flex-1 text-sm text-text-secondary">{tier.description}</p>
					<p class="mt-4 font-display text-3xl font-bold text-accent-primary">${tier.price}</p>
					<p class="mt-1 text-xs text-text-secondary">{tier.impact}</p>
					<button class="glow mt-6 w-full rounded-full px-4 py-2.5 text-sm font-medium transition-all {tier.popular
						? 'bg-accent-primary text-white hover:bg-accent-hover'
						: 'border border-border text-text-primary hover:border-accent-primary/30 hover:text-accent-primary'}">
						Sponsor Now
					</button>
				</div>
			{/each}
		</div>

		<div class="mt-8 text-center">
			<a href={p('/give')} class="inline-flex items-center gap-1 text-sm font-medium text-accent-primary hover:underline">
				Learn more about giving <ArrowRight class="h-4 w-4" />
			</a>
		</div>
	</div>
</section>

<!-- SVG Wave -->
<div class="relative -mb-1">
	<svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full">
		<path d="M0 20C360 50 720 0 1080 30C1260 45 1380 15 1440 25V60H0V20Z" fill="currentColor" class="text-bg-primary/30" />
	</svg>
</div>

<!-- ============================== -->
<!-- 9. TESTIMONIALS                -->
<!-- ============================== -->
<section class="py-20 md:py-32">
	<div class="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
		<div class="mx-auto max-w-3xl text-center">
			<h2 class="font-display text-3xl font-semibold text-text-primary sm:text-4xl">What people are saying</h2>
		</div>

		<div class="relative mx-auto mt-12 max-w-3xl">
			<div class="glass-panel p-8 text-center sm:p-12">
				<div class="flex justify-center gap-1">
					{#each Array(5) as _}
						<Star class="h-5 w-5 fill-accent-gold text-accent-gold" />
					{/each}
				</div>
				<blockquote class="mt-6 font-display text-xl leading-relaxed text-text-primary sm:text-2xl">
					"{testimonials[testimonialIndex].quote}"
				</blockquote>
				<div class="mt-6">
					<p class="font-semibold text-text-primary">{testimonials[testimonialIndex].name}</p>
					<p class="text-sm text-text-secondary">{testimonials[testimonialIndex].role}</p>
				</div>
			</div>

			<div class="mt-6 flex items-center justify-center gap-4">
				<button onclick={prevTestimonial} class="glow flex h-10 w-10 items-center justify-center rounded-full border border-border bg-white/50 transition-all" aria-label="Previous testimonial">
					<ChevronLeft class="h-5 w-5 text-text-primary" />
				</button>
				<div class="flex gap-2">
					{#each testimonials as _, i}
						<button class="h-2 w-2 rounded-full transition-colors {i === testimonialIndex ? 'bg-accent-primary' : 'bg-border'}" onclick={() => (testimonialIndex = i)} aria-label="Go to testimonial {i + 1}"></button>
					{/each}
				</div>
				<button onclick={nextTestimonial} class="glow flex h-10 w-10 items-center justify-center rounded-full border border-border bg-white/50 transition-all" aria-label="Next testimonial">
					<ChevronRight class="h-5 w-5 text-text-primary" />
				</button>
			</div>
		</div>
	</div>
</section>

<!-- ============================== -->
<!-- 10. NEWSLETTER SIGNUP          -->
<!-- ============================== -->
<section class="bg-[#1A2332] py-20 md:py-32">
	<div class="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
		<div class="mx-auto max-w-xl text-center">
			<Sparkles class="mx-auto h-10 w-10 text-accent-gold" />
			<h2 class="mt-4 font-display text-3xl font-semibold text-white sm:text-4xl">
				Stay inspired on the path
			</h2>
			<p class="mt-4 text-white/60">
				Weekly insights, resources, and encouragement delivered to your inbox. No spam — just nourishment for your journey.
			</p>

			<form class="mt-8 flex flex-col gap-3 sm:flex-row" onsubmit={(e) => e.preventDefault()}>
				<input
					type="email"
					bind:value={email}
					placeholder="Enter your email"
					required
					class="flex-1 rounded-full border border-white/20 bg-white/10 px-5 py-3 text-white placeholder:text-white/40 focus:border-accent-primary focus:outline-none focus:ring-2 focus:ring-accent-primary/50"
				/>
				<button type="submit" class="glow inline-flex items-center justify-center gap-2 rounded-full bg-accent-primary px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-accent-hover">
					Subscribe <ArrowRight class="h-4 w-4" />
				</button>
			</form>

			<p class="mt-3 text-xs text-white/30">
				Join 5,000+ subscribers. Unsubscribe anytime.
			</p>
		</div>
	</div>
</section>
