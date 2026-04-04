<script lang="ts">
	import {
		testimonials
	} from '$lib/data/mock.js';
	import {
		ArrowRight,
		BookOpen,
		Compass,
		RefreshCw,
		Sunrise,
		Star,
		Users,
		MessageCircle,
		Heart,
		Mail,
		Clock,
		ChevronRight
	} from 'lucide-svelte';

	let email = $state('');
</script>

<svelte:head>
	<title>Being Muslim — Your Journey Begins Here</title>
	<meta
		name="description"
		content="A calm, guided path into Islam. Whether you're exploring, newly converted, or reconnecting — find knowledge, community, and support."
	/>
</svelte:head>

<!-- ============================== -->
<!-- 1. HERO SECTION                -->
<!-- ============================== -->
<section style="min-height: 100vh; display: flex; align-items: center; justify-content: center; background: linear-gradient(170deg, #FDFAF5 0%, #e8f0e4 40%, #c5d9bf 100%); padding: 120px 24px 80px; text-align: center;">
	<div style="max-width: 680px; margin: 0 auto;">
		<h1 style="font-family: 'Newsreader', serif; font-size: clamp(42px, 6vw, 72px); font-weight: 400; line-height: 1.08; color: #2C3E2C; margin: 0 0 24px; letter-spacing: -0.02em;">
			Your <em style="font-style: italic; color: #7A9E7E;">journey</em> begins here
		</h1>
		<p style="font-family: 'Albert Sans', sans-serif; font-size: 18px; color: #5a6b5a; line-height: 1.65; margin: 0 auto 40px; max-width: 520px;">
			Whether you're exploring Islam for the first time, recently converted, or reconnecting with your faith — find a calm, guided path forward.
		</p>
		<a
			href="#journey"
			class="bm-btn-sage"
			style="padding: 16px 36px; font-size: 15px; font-weight: 500;"
		>
			Where are you on your path?
			<ArrowRight style="width: 16px; height: 16px;" />
		</a>
	</div>
</section>

<!-- ============================== -->
<!-- 2. JOURNEY SELECTOR            -->
<!-- ============================== -->
<section id="journey" class="bm-section-padding" style="background: #FDFAF5;">
	<div class="mx-auto max-w-[1400px] px-6 lg:px-10">
		<div style="text-align: center; margin-bottom: 48px;">
			<h2 style="font-family: 'Newsreader', serif; font-size: clamp(28px, 4vw, 42px); font-weight: 400; color: #2C3E2C; margin: 0 0 12px;">
				Find your path
			</h2>
			<p style="font-family: 'Albert Sans', sans-serif; font-size: 16px; color: #A89F91; margin: 0;">
				Everyone's journey is unique. Where are you today?
			</p>
		</div>

		<div class="bm-grid-3" style="gap: 24px;">
			{#each [
				{ icon: Compass, title: "I'm exploring Islam", desc: "Curious about Islam? Start with the basics — beliefs, practices, and what it means to be Muslim. No commitment, just honest answers.", link: "Begin exploring" },
				{ icon: Sunrise, title: "I recently converted", desc: "Welcome home. Find step-by-step guidance for your first days, weeks, and months. You don't have to figure this out alone.", link: "Start your journey" },
				{ icon: RefreshCw, title: "I'm reconnecting", desc: "Coming back to your faith after time away? Rediscover Islam with fresh eyes and no judgement. It's never too late.", link: "Reconnect now" }
			] as card}
				<a href="/d" style="text-decoration: none; display: block;">
					<div class="bm-card-hover" style="background: #fff; border: 1px solid #e8e8e4; border-radius: 16px; padding: 40px 32px; height: 100%; display: flex; flex-direction: column;">
						<div style="width: 56px; height: 56px; border-radius: 14px; background: #f2f6f0; display: flex; align-items: center; justify-content: center; margin-bottom: 24px;">
							<card.icon style="width: 24px; height: 24px; color: #7A9E7E;" />
						</div>
						<h3 style="font-family: 'Newsreader', serif; font-size: 22px; font-weight: 400; color: #2C3E2C; margin: 0 0 12px; line-height: 1.25;">
							{card.title}
						</h3>
						<p style="font-family: 'Albert Sans', sans-serif; font-size: 14px; color: #A89F91; line-height: 1.6; margin: 0 0 24px; flex: 1;">
							{card.desc}
						</p>
						<span style="font-family: 'Albert Sans', sans-serif; font-size: 13px; font-weight: 500; color: #7A9E7E; display: inline-flex; align-items: center; gap: 6px;">
							{card.link}
							<ArrowRight style="width: 14px; height: 14px;" />
						</span>
					</div>
				</a>
			{/each}
		</div>
	</div>
</section>

<!-- ============================== -->
<!-- 3. GUIDED LEARNING             -->
<!-- ============================== -->
<section class="bm-section-padding" style="background: #f2f6f0;">
	<div class="mx-auto max-w-[1400px] px-6 lg:px-10">
		<div class="bm-grid-courses-header">
			<h2 style="font-family: 'Newsreader', serif; font-size: clamp(26px, 3.8vw, 38px); line-height: 1.15; color: #2C3E2C; font-weight: 400; margin: 0;">
				Learn at your own pace
			</h2>
			<p style="font-family: 'Albert Sans', sans-serif; font-size: 13px; color: #A89F91; line-height: 1.55; align-self: end; margin: 0;">
				Structured courses designed by scholars and educators. Follow along chapter by chapter.
			</p>
		</div>

		<div class="bm-grid-3">
			{#each [
				{ chapter: 'Ch. 1', title: 'Foundations of Faith', instructor: 'Dr. Asad Tarsin', lessons: 24, progress: 0, img: 'https://images.unsplash.com/photo-1564769625905-50e93615e769?w=600&q=80&auto=format&fit=crop' },
				{ chapter: 'Ch. 2', title: 'Prayer Mastery', instructor: 'Imam Ahmad', lessons: 16, progress: 0, img: 'https://images.unsplash.com/photo-1542816417-0983c9c9ad53?w=600&q=80&auto=format&fit=crop' },
				{ chapter: 'Ch. 3', title: 'Your Quran Journey', instructor: 'Ustadha Fatima', lessons: 32, progress: 0, img: 'https://images.unsplash.com/photo-1567443024551-f3e3cc2be870?w=600&q=80&auto=format&fit=crop' }
			] as course}
				<a href="/d" style="text-decoration: none; display: block;" class="bm-title-underline-parent">
					<div style="background: #fff; border-radius: 16px; overflow: hidden;">
						<div style="aspect-ratio: 16/10; overflow: hidden; position: relative;">
							<img src={course.img} alt={course.title} style="width: 100%; height: 100%; object-fit: cover; display: block;" />
							<span style="position: absolute; top: 12px; left: 12px; font-family: 'Albert Sans', sans-serif; font-size: 11px; font-weight: 600; color: #2C3E2C; background: rgba(255,255,255,0.92); padding: 4px 12px; border-radius: 999px; letter-spacing: 0.02em;">
								{course.chapter}
							</span>
						</div>
						<div style="padding: 24px;">
							<h3 class="bm-title-underline" style="font-family: 'Newsreader', serif; font-size: 20px; font-weight: 400; color: #2C3E2C; margin: 0 0 8px; line-height: 1.25;">
								{course.title}
							</h3>
							<div style="display: flex; align-items: center; gap: 12px; margin-bottom: 16px;">
								<span style="font-family: 'Albert Sans', sans-serif; font-size: 12px; font-weight: 500; color: #2C3E2C;">{course.instructor}</span>
								<span style="font-family: 'Albert Sans', sans-serif; font-size: 12px; color: #A89F91;">{course.lessons} lessons</span>
							</div>
							<!-- Progress bar -->
							<div style="height: 3px; background: #e8e8e4; border-radius: 999px; overflow: hidden;">
								<div style="height: 100%; width: {course.progress}%; background: #7A9E7E; border-radius: 999px; transition: width 0.3s;"></div>
							</div>
						</div>
					</div>
				</a>
			{/each}
		</div>
	</div>
</section>

<!-- ============================== -->
<!-- 4. FEATURED RESOURCES          -->
<!-- ============================== -->
<section class="bm-section-padding" style="background: #FDFAF5;">
	<div class="mx-auto max-w-[1400px] px-6 lg:px-10">
		<div style="display: flex; justify-content: space-between; align-items: end; margin-bottom: 32px;">
			<h2 style="font-family: 'Newsreader', serif; font-size: clamp(26px, 3.8vw, 38px); line-height: 1.15; color: #2C3E2C; font-weight: 400; margin: 0;">
				Essential reading
			</h2>
			<a href="/d" class="bm-view-all" style="font-family: 'Albert Sans', sans-serif; font-size: 13px; font-weight: 500; color: #2C3E2C; text-decoration: none; display: inline-flex; align-items: center; gap: 4px;">
				View all <ArrowRight style="width: 14px; height: 14px;" />
			</a>
		</div>

		<div class="bm-grid-3">
			{#each [
				{ title: 'Brief Overview of Islam', category: 'Foundations', time: '10 min read', img: 'https://www.beingmuslim.org/wp-content/uploads/2022/03/livingislamwithpurpose.png' },
				{ title: "A Beginner's Guide to Being a Muslim", category: 'New Muslims', time: '12 min read', img: 'https://www.beingmuslim.org/wp-content/uploads/2021/08/being-muslim-book.jpeg' },
				{ title: 'Islam and Other Faiths', category: 'Belief', time: '8 min read', img: 'https://www.beingmuslim.org/wp-content/uploads/2022/03/oneGodmanynames.jpeg' }
			] as article}
				<a href="/d" style="text-decoration: none; display: block;" class="bm-title-underline-parent">
					<div style="aspect-ratio: 4/3; background: #f2f6f0; border-radius: 14px; overflow: hidden; margin-bottom: 16px;" class="bm-img-zoom">
						<img src={article.img} alt={article.title} style="width: 100%; height: 100%; object-fit: cover; display: block;" />
					</div>
					<span style="font-family: 'Albert Sans', sans-serif; font-size: 11px; font-weight: 600; color: #7A9E7E; text-transform: uppercase; letter-spacing: 0.06em; display: inline-block; margin-bottom: 8px;">
						{article.category}
					</span>
					<h3 class="bm-title-underline" style="font-family: 'Newsreader', serif; font-size: 18px; font-weight: 400; color: #2C3E2C; margin: 0 0 8px; line-height: 1.3;">
						{article.title}
					</h3>
					<div style="display: flex; align-items: center; gap: 6px;">
						<Clock style="width: 12px; height: 12px; color: #A89F91;" />
						<span style="font-family: 'Albert Sans', sans-serif; font-size: 12px; color: #A89F91;">{article.time}</span>
					</div>
				</a>
			{/each}
		</div>
	</div>
</section>

<!-- ============================== -->
<!-- 5. PRODUCTS                    -->
<!-- ============================== -->
<section class="bm-section-padding" style="background: #f2f6f0;">
	<div class="mx-auto max-w-[1400px] px-6 lg:px-10">
		<h2 style="font-family: 'Newsreader', serif; font-size: clamp(26px, 3.8vw, 38px); line-height: 1.15; color: #2C3E2C; font-weight: 400; margin: 0 0 32px; text-align: center;">
			Everything you need to begin
		</h2>

		<div class="bm-grid-4">
			{#each [
				{ title: 'Being Muslim: A Practical Guide', price: '$14.95', badge: 'Bestseller', img: 'https://www.beingmuslim.org/wp-content/uploads/2021/08/being-muslim-book.jpeg' },
				{ title: 'The Complete Boxed Set', price: '$85.00', badge: 'Most Popular', img: 'https://www.beingmuslim.org/wp-content/uploads/2021/08/the-boxed-set-900x1200.jpeg' },
				{ title: 'Prayer Reference Cards', price: '$37.50', badge: '', img: 'https://www.beingmuslim.org/wp-content/uploads/2021/08/the-prayer-card-900x610.jpeg' },
				{ title: 'Digital Edition (eBook)', price: '$9.00', badge: '', img: 'https://www.beingmuslim.org/wp-content/uploads/2021/08/BM-E-Book-900x1200.png' }
			] as product}
				<a href="/d" style="text-decoration: none; display: block;" class="bm-title-underline-parent group">
					<div style="aspect-ratio: 1; background: #fff; border-radius: 14px; overflow: hidden; margin-bottom: 16px; position: relative;">
						{#if product.img}
							<img src={product.img} alt={product.title} class="transition-transform duration-500 group-hover:scale-105" style="width: 100%; height: 100%; object-fit: cover; display: block;" />
						{:else}
							<div style="width: 100%; height: 100%; display: flex; align-items: center; justify-content: center;">
								<BookOpen style="width: 40px; height: 40px; color: #d8e0d4;" />
							</div>
						{/if}
						{#if product.badge}
							<span style="position: absolute; top: 12px; left: 12px; font-family: 'Albert Sans', sans-serif; font-size: 10px; font-weight: 600; color: #fff; background: #7A9E7E; padding: 4px 12px; border-radius: 999px; z-index: 2;">{product.badge}</span>
						{/if}
					</div>
					<h3 class="bm-title-underline" style="font-family: 'Newsreader', serif; font-size: 16px; font-weight: 400; color: #2C3E2C; margin: 0 0 6px; line-height: 1.3;">{product.title}</h3>
					<span style="font-family: 'Albert Sans', sans-serif; font-size: 14px; font-weight: 500; color: #2C3E2C;">{product.price}</span>
				</a>
			{/each}
		</div>

		<div style="text-align: center; margin-top: 36px;">
			<a href="/d" class="bm-btn-outline" style="padding: 10px 24px;">
				Browse All Products <ArrowRight style="width: 14px; height: 14px;" />
			</a>
		</div>
	</div>
</section>

<!-- ============================== -->
<!-- 6. COMMUNITY                   -->
<!-- ============================== -->
<section class="bm-section-padding" style="background: #FDFAF5;">
	<div class="mx-auto max-w-[1400px] px-6 lg:px-10">
		<div style="background: #2C3E2C; border-radius: 20px; overflow: hidden;">
			<div class="bm-grid-2">
				<!-- Left -->
				<div class="bm-community-panel">
					<h2 style="font-family: 'Newsreader', serif; font-size: clamp(28px, 4vw, 38px); font-weight: 400; color: #fff; margin: 0 0 16px; line-height: 1.15;">
						You're not walking this path alone
					</h2>
					<p style="font-family: 'Albert Sans', sans-serif; font-size: 15px; color: rgba(255,255,255,0.6); line-height: 1.6; margin: 0 0 28px;">
						Join a supportive community of fellow seekers, converts, and lifelong Muslims. Ask questions, share experiences, and grow together in a safe, welcoming space.
					</p>
					<div style="display: flex; gap: 24px; margin-bottom: 32px;">
						<div style="display: flex; align-items: center; gap: 6px;">
							<Users style="width: 16px; height: 16px; color: #7A9E7E;" />
							<span style="font-family: 'Albert Sans', sans-serif; font-size: 13px; color: rgba(255,255,255,0.8);"><strong style="color: #7A9E7E;">2,500+</strong> members</span>
						</div>
						<div style="display: flex; align-items: center; gap: 6px;">
							<MessageCircle style="width: 16px; height: 16px; color: #7A9E7E;" />
							<span style="font-family: 'Albert Sans', sans-serif; font-size: 13px; color: rgba(255,255,255,0.8);"><strong style="color: #7A9E7E;">1,200+</strong> discussions</span>
						</div>
					</div>
					<a href="/d" class="bm-btn-white">
						Join the Community <ArrowRight style="width: 14px; height: 14px;" />
					</a>
				</div>
				<!-- Right: chat preview -->
				<div class="bm-community-panel bm-community-chat" style="background: rgba(255,255,255,0.03); display: flex; flex-direction: column; justify-content: center;">
					{#each [
						{ name: 'Aminah', msg: 'Salaam everyone! Just took my shahada yesterday', time: '2m ago' },
						{ name: 'Omar', msg: 'MashaAllah! Welcome to the family, sister!', time: '1m ago' },
						{ name: 'Fatima', msg: 'So happy for you! Feel free to ask anything here.', time: 'just now' }
					] as message, i}
						<div style="display: flex; gap: 12px; padding: 14px 0; {i !== 0 ? 'border-top: 1px solid rgba(255,255,255,0.06);' : ''}">
							<div style="width: 34px; height: 34px; border-radius: 999px; background: rgba(122,158,126,0.2); display: flex; align-items: center; justify-content: center; flex-shrink: 0; font-family: 'Albert Sans', sans-serif; font-size: 12px; font-weight: 600; color: #7A9E7E;">
								{message.name[0]}
							</div>
							<div>
								<div style="display: flex; align-items: center; gap: 8px;">
									<span style="font-family: 'Albert Sans', sans-serif; font-size: 13px; font-weight: 500; color: #fff;">{message.name}</span>
									<span style="font-family: 'Albert Sans', sans-serif; font-size: 11px; color: rgba(255,255,255,0.3);">{message.time}</span>
								</div>
								<p style="font-family: 'Albert Sans', sans-serif; font-size: 13px; color: rgba(255,255,255,0.55); margin: 3px 0 0; line-height: 1.4;">{message.msg}</p>
							</div>
						</div>
					{/each}
				</div>
			</div>
		</div>
	</div>
</section>

<!-- ============================== -->
<!-- 7. SUPPORT CTA                 -->
<!-- ============================== -->
<section class="bm-section-padding" style="background: #f2f6f0;">
	<div class="mx-auto max-w-[1400px] px-6 lg:px-10">
		<div class="bm-grid-2-gap">
			<div>
				<h2 style="font-family: 'Newsreader', serif; font-size: clamp(26px, 3.8vw, 38px); line-height: 1.15; color: #2C3E2C; font-weight: 400; margin: 0 0 16px;">
					Help someone begin their journey
				</h2>
				<p style="font-family: 'Albert Sans', sans-serif; font-size: 15px; color: #A89F91; line-height: 1.6; margin: 0 0 28px;">
					Many new Muslims can't afford the resources they need. Your sponsorship puts a complete Being Muslim boxed set in their hands — a gift that transforms lives.
				</p>
				<a href="/d" class="bm-btn-sage" style="padding: 12px 28px;">
					Support the Mission <Heart style="width: 14px; height: 14px;" />
				</a>
			</div>
			<div class="bm-grid-stats">
				{#each [
					{ value: '3,247', label: 'Sets Sponsored' },
					{ value: '520', label: 'Communities Reached' },
					{ value: '52', label: 'Countries' },
					{ value: '180', label: 'Monthly Donors' }
				] as stat}
					<div style="background: #fff; border-radius: 14px; padding: 28px;">
						<p style="font-family: 'Newsreader', serif; font-size: 34px; font-weight: 400; line-height: 1; color: #2C3E2C; margin: 0;">{stat.value}</p>
						<p style="font-family: 'Albert Sans', sans-serif; font-size: 12px; color: #A89F91; margin: 6px 0 0;">{stat.label}</p>
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>

<!-- ============================== -->
<!-- 8. TESTIMONIALS                -->
<!-- ============================== -->
<section class="bm-section-padding" style="background: #FDFAF5;">
	<div class="mx-auto max-w-[1400px] px-6 lg:px-10">
		<h2 style="font-family: 'Newsreader', serif; font-size: clamp(26px, 3.8vw, 38px); line-height: 1.15; color: #2C3E2C; font-weight: 400; margin: 0 0 40px; text-align: center;">
			Stories from the community
		</h2>

		<div class="bm-grid-3">
			{#each testimonials.slice(0, 3) as testimonial}
				<div style="background: #fff; border-radius: 16px; padding: 36px; display: flex; flex-direction: column; border: 1px solid #eceae6;">
					<div style="display: flex; gap: 3px; margin-bottom: 16px;">
						{#each Array(5) as _}
							<Star style="width: 16px; height: 16px; fill: #D4B978; color: #D4B978;" />
						{/each}
					</div>
					<blockquote style="font-family: 'Newsreader', serif; font-size: 16px; font-style: italic; line-height: 1.55; color: #2C3E2C; margin: 0 0 24px; flex: 1;">
						"{testimonial.quote}"
					</blockquote>
					<div>
						<p style="font-family: 'Albert Sans', sans-serif; font-size: 14px; font-weight: 600; color: #2C3E2C; margin: 0;">{testimonial.name}</p>
						<p style="font-family: 'Albert Sans', sans-serif; font-size: 13px; color: #A89F91; margin: 4px 0 0;">{testimonial.role}</p>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- ============================== -->
<!-- 9. NEWSLETTER                  -->
<!-- ============================== -->
<section class="bm-section-padding" style="background: #2C3E2C;">
	<div class="mx-auto max-w-[1400px] px-6 lg:px-10">
		<div class="bm-grid-newsletter">
			<!-- Left: text -->
			<div>
				<h2 style="font-family: 'Newsreader', serif; font-size: 30px; font-weight: 400; color: #fff; margin: 0 0 12px;">
					Stay connected
				</h2>
				<p style="font-family: 'Albert Sans', sans-serif; font-size: 15px; color: rgba(255,255,255,0.55); line-height: 1.6; margin: 0;">
					Join our mailing list for community updates, new resources, and words of encouragement on your journey.
				</p>
			</div>
			<!-- Right: form -->
			<div>
				<form
					style="position: relative; margin-bottom: 12px;"
					onsubmit={(e) => { e.preventDefault(); }}
				>
					<input
						type="email"
						bind:value={email}
						placeholder="Enter your email"
						required
						style="width: 100%; padding: 16px 60px 16px 20px; border-radius: 999px; border: 1px solid rgba(255,255,255,0.15); background: rgba(255,255,255,0.08); color: #fff; font-family: 'Albert Sans', sans-serif; font-size: 14px; outline: none; box-sizing: border-box;"
					/>
					<button type="submit" class="bm-newsletter-btn" style="position: absolute; right: 4px; top: 50%; transform: translateY(-50%); width: 44px; height: 44px; border-radius: 999px; background: #7A9E7E; border: none; display: flex; align-items: center; justify-content: center; cursor: pointer;">
						<ArrowRight style="width: 16px; height: 16px; color: #fff;" />
					</button>
				</form>
				<p style="font-family: 'Albert Sans', sans-serif; font-size: 12px; color: rgba(255,255,255,0.35); margin: 0;">
					Join 5,000+ subscribers. Unsubscribe anytime.
				</p>
			</div>
		</div>
	</div>
</section>
