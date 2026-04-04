<script lang="ts">
	import { BookOpen, Users, Heart, Star, ArrowRight, MessageCircle, Mail } from 'lucide-svelte';
</script>

<svelte:head>
	<title>Being Muslim — The modern guide to being Muslim</title>
</svelte:head>

<!-- ============================================
     SECTION 1: HERO — Bold gradient text
     ============================================ -->
<section style="min-height: calc(100vh - 56px); display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 80px 24px; background: var(--bm-black); text-align: center;">
	<!-- Pill badge -->
	<div class="gradient-border" style="display: inline-flex; align-items: center; padding: 8px 20px; border-radius: 999px; margin-bottom: 40px;">
		<span style="font-size: 13px; font-weight: 400; color: rgba(247,247,247,0.7);">Now available in 50+ countries</span>
	</div>

	<!-- Main heading -->
	<h1 style="font-size: clamp(40px, 7vw, 72px); font-weight: 800; line-height: 1.05; margin: 0 0 24px; letter-spacing: -0.03em;">
		<span style="color: var(--bm-white);">The modern guide to</span><br />
		<span class="gradient-text">being Muslim.</span>
	</h1>

	<!-- Subtitle -->
	<p style="font-size: 18px; font-weight: 300; color: var(--bm-muted); max-width: 480px; margin: 0 0 40px; line-height: 1.6;">
		Education, community, and support — designed for converts and beginners.
	</p>

	<!-- CTAs -->
	<div style="display: flex; align-items: center; gap: 16px; flex-wrap: wrap; justify-content: center;">
		<a href="/n/" class="bm-btn-gradient" style="font-size: 15px; padding: 14px 28px;">
			Start Learning
		</a>
		<a href="/n/" class="bm-btn-outline" style="font-size: 15px; padding: 14px 28px;">
			Browse Resources
		</a>
	</div>

	<!-- Trust line -->
	<p style="font-size: 13px; color: var(--bm-muted); margin-top: 48px;">
		Trusted by 10,000+ learners
	</p>
</section>

<!-- ============================================
     SECTION 2: FEATURES — 3-column grid
     ============================================ -->
<section class="bm-section" style="background: var(--bm-black);">
	<div class="bm-container">
		<h2 style="font-size: 36px; font-weight: 700; color: var(--bm-white); text-align: center; margin: 0 0 56px;">
			Everything you need
		</h2>
		<div class="bm-grid-3" style="gap: 20px;">
			{#each [
				{
					icon: BookOpen,
					title: 'Learn',
					description: 'Courses, articles, and guides designed for beginners.'
				},
				{
					icon: Users,
					title: 'Connect',
					description: 'Join a community of 2,500+ Muslims on the same journey.'
				},
				{
					icon: Heart,
					title: 'Practice',
					description: 'Prayer guides, reference cards, and daily practice resources.'
				}
			] as feature}
				<div class="gradient-border" style="padding: 24px;">
					<div style="margin-bottom: 16px;">
						<svelte:component this={feature.icon} size={24} class="feature-icon" style="color: transparent;" />
						<svg width="24" height="24" style="display: none;"><!-- fallback --></svg>
					</div>
					<h3 style="font-size: 18px; font-weight: 600; color: var(--bm-white); margin: 0 0 8px;">
						{feature.title}
					</h3>
					<p style="font-size: 14px; font-weight: 400; color: var(--bm-muted); margin: 0; line-height: 1.6;">
						{feature.description}
					</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- ============================================
     SECTION 3: BOOK — Product hero
     ============================================ -->
<section class="bm-section" style="background: var(--bm-surface);">
	<div class="bm-container">
		<div class="bm-grid-2-book">
			<!-- Left: book with gradient glow -->
			<div style="position: relative; display: flex; align-items: center; justify-content: center;">
				<!-- Gradient glow behind book -->
				<div style="position: absolute; width: 280px; height: 280px; border-radius: 50%; background: linear-gradient(135deg, rgba(79,70,229,0.25), rgba(124,58,237,0.2), rgba(192,132,252,0.15)); filter: blur(60px); pointer-events: none;"></div>
				<img
					src="https://www.beingmuslim.org/wp-content/uploads/2021/08/being-muslim-book.jpeg"
					alt="Being Muslim Book"
					style="position: relative; z-index: 1; max-width: 280px; width: 100%; border-radius: 8px; box-shadow: 0 20px 60px rgba(0,0,0,0.5);"
					loading="lazy"
				/>
			</div>

			<!-- Right: details -->
			<div>
				<p class="gradient-text" style="font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.1em; margin: 0 0 16px;">
					The Book
				</p>
				<h2 style="font-size: 36px; font-weight: 700; color: var(--bm-white); margin: 0 0 16px; line-height: 1.2;">
					Being Muslim: A Practical Guide
				</h2>
				<p style="font-size: 15px; font-weight: 400; color: var(--bm-muted); line-height: 1.7; margin: 0 0 16px; max-width: 440px;">
					A comprehensive, beautifully designed guide covering the foundations of Islamic belief and daily practice. Written with warmth and scholarly care for those beginning their journey.
				</p>
				<p style="font-size: 14px; font-weight: 400; color: var(--bm-muted); margin: 0 0 24px;">
					by Dr. Asad Tarsin
				</p>

				<!-- Stats -->
				<div style="display: flex; gap: 32px; margin-bottom: 24px;">
					<div>
						<p class="gradient-text" style="font-size: 20px; font-weight: 700; margin: 0;">10,000+</p>
						<p style="font-size: 12px; color: var(--bm-muted); margin: 4px 0 0;">communities</p>
					</div>
					<div>
						<p class="gradient-text" style="font-size: 20px; font-weight: 700; margin: 0;">50+</p>
						<p style="font-size: 12px; color: var(--bm-muted); margin: 4px 0 0;">countries</p>
					</div>
					<div>
						<p class="gradient-text" style="font-size: 20px; font-weight: 700; margin: 0;">4.9&#9733;</p>
						<p style="font-size: 12px; color: var(--bm-muted); margin: 4px 0 0;">rating</p>
					</div>
				</div>

				<!-- Price + CTA -->
				<div style="display: flex; align-items: center; gap: 20px;">
					<a href="/n/" class="bm-btn-gradient" style="font-size: 14px; padding: 12px 24px;">
						Order Now
					</a>
					<span class="gradient-text" style="font-size: 24px; font-weight: 700;">$14.95</span>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- ============================================
     SECTION 4: COURSES — List style
     ============================================ -->
<section class="bm-section" style="background: var(--bm-black);">
	<div class="bm-container">
		<h2 style="font-size: 32px; font-weight: 700; color: var(--bm-white); margin: 0 0 40px;">
			Classes
		</h2>
		<div>
			{#each [
				{
					title: 'Foundations of Faith',
					instructor: 'Dr. Asad Tarsin',
					meta: '24 lessons · 6 hours',
					image: 'https://images.unsplash.com/photo-1585036156171-384164a8c821?w=160&h=160&fit=crop'
				},
				{
					title: 'Learning to Pray',
					instructor: 'Ustadha Maryam Amir',
					meta: '12 lessons · 3 hours',
					image: 'https://images.unsplash.com/photo-1609599006353-e629aaabfeae?w=160&h=160&fit=crop'
				},
				{
					title: 'Understanding the Quran',
					instructor: 'Imam Omar Suleiman',
					meta: '18 lessons · 5 hours',
					image: 'https://images.unsplash.com/photo-1542816417-0983c9c9ad53?w=160&h=160&fit=crop'
				}
			] as course}
				<a href="/n/" class="course-row" style="display: flex; align-items: center; gap: 20px; padding: 20px 0; border-bottom: 1px solid rgba(255,255,255,0.06); text-decoration: none; transition: background 0.2s;">
					<img
						src={course.image}
						alt={course.title}
						style="width: 80px; height: 80px; border-radius: 8px; object-fit: cover; flex-shrink: 0;"
						loading="lazy"
					/>
					<div style="flex: 1; min-width: 0;">
						<h3 style="font-size: 18px; font-weight: 600; color: var(--bm-white); margin: 0 0 4px;">{course.title}</h3>
						<p style="font-size: 14px; color: var(--bm-muted); margin: 0;">{course.instructor} &middot; {course.meta}</p>
					</div>
					<span class="bm-btn-gradient course-enroll" style="font-size: 13px; padding: 8px 20px; flex-shrink: 0;">
						Enroll
					</span>
				</a>
			{/each}
		</div>
		<div style="margin-top: 32px;">
			<a href="/n/" class="gradient-text" style="font-size: 14px; font-weight: 500; text-decoration: none; display: inline-flex; align-items: center; gap: 6px;">
				View All Classes <ArrowRight size={16} />
			</a>
		</div>
	</div>
</section>

<!-- ============================================
     SECTION 5: PRODUCTS — Horizontal grid
     ============================================ -->
<section class="bm-section" style="background: var(--bm-surface);">
	<div class="bm-container">
		<h2 style="font-size: 32px; font-weight: 700; color: var(--bm-white); margin: 0 0 40px;">
			The Collection
		</h2>
		<div class="bm-grid-4" style="gap: 20px;">
			{#each [
				{ name: 'Being Muslim', price: '$14.95', image: 'https://www.beingmuslim.org/wp-content/uploads/2021/08/being-muslim-book.jpeg' },
				{ name: 'The Boxed Set', price: '$85.00', image: 'https://www.beingmuslim.org/wp-content/uploads/2021/08/the-boxed-set-900x1200.jpeg' },
				{ name: 'Prayer Cards', price: '$37.50', image: 'https://www.beingmuslim.org/wp-content/uploads/2021/08/the-prayer-card-900x610.jpeg' },
				{ name: 'eBook', price: '$9.00', image: 'https://www.beingmuslim.org/wp-content/uploads/2021/08/BM-E-Book-900x1200.png' }
			] as product}
				<a href="/n/" style="text-decoration: none;" class="bm-card-hover">
					<div class="gradient-border" style="overflow: hidden;">
						<div style="aspect-ratio: 1/1; display: flex; align-items: center; justify-content: center; padding: 16px; background: var(--bm-surface);">
							<img
								src={product.image}
								alt={product.name}
								style="max-width: 100%; max-height: 100%; object-fit: contain; border-radius: 4px;"
								loading="lazy"
							/>
						</div>
						<div style="padding: 16px;">
							<p style="font-size: 15px; font-weight: 600; color: var(--bm-white); margin: 0 0 4px;">{product.name}</p>
							<p class="gradient-text" style="font-size: 14px; font-weight: 600; margin: 0;">{product.price}</p>
						</div>
					</div>
				</a>
			{/each}
		</div>
		<div style="margin-top: 32px;">
			<a href="/n/" class="gradient-text" style="font-size: 14px; font-weight: 500; text-decoration: none; display: inline-flex; align-items: center; gap: 6px;">
				Shop All <ArrowRight size={16} />
			</a>
		</div>
	</div>
</section>

<!-- ============================================
     SECTION 6: PATHS — Three paths
     ============================================ -->
<section class="bm-section" style="background: var(--bm-black);">
	<div class="bm-container">
		<h2 style="font-size: 36px; font-weight: 700; color: var(--bm-white); text-align: center; margin: 0 0 64px;">
			Start where you are
		</h2>
		<div class="bm-grid-3" style="gap: 40px;">
			{#each [
				{
					number: '01',
					title: 'Exploring Islam',
					description: 'Curious about the faith? Begin with accessible introductions and common questions answered.'
				},
				{
					number: '02',
					title: 'Recently Converted',
					description: 'Step-by-step guidance on prayer, community, and building your new life as a Muslim.'
				},
				{
					number: '03',
					title: 'Reconnecting',
					description: 'Rediscover the beauty of Islam with resources for those returning to their practice.'
				}
			] as path}
				<div>
					<p class="gradient-text" style="font-size: 28px; font-weight: 700; margin: 0 0 12px;">{path.number}</p>
					<h3 style="font-size: 20px; font-weight: 600; color: var(--bm-white); margin: 0 0 8px;">{path.title}</h3>
					<p style="font-size: 14px; font-weight: 400; color: var(--bm-muted); margin: 0 0 20px; line-height: 1.6;">{path.description}</p>
					<div style="width: 40px; height: 2px; background: var(--bm-gradient); border-radius: 1px;"></div>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- ============================================
     SECTION 7: COMMUNITY — Social proof
     ============================================ -->
<section class="bm-section" style="background: var(--bm-black);">
	<div class="bm-container">
		<div style="background: var(--bm-surface); border-radius: 16px; overflow: hidden;">
			<div class="bm-grid-2">
				<!-- Left: stats + CTA -->
				<div style="padding: 48px;">
					<p class="gradient-text" style="font-size: 64px; font-weight: 800; margin: 0 0 8px; line-height: 1;">2,500+</p>
					<h3 style="font-size: 20px; font-weight: 600; color: var(--bm-white); margin: 0 0 24px;">Muslims learning together</h3>
					<div style="display: flex; gap: 32px; margin-bottom: 32px;">
						<div>
							<p style="font-size: 14px; color: var(--bm-white); font-weight: 600; margin: 0;">1,200+</p>
							<p style="font-size: 12px; color: var(--bm-muted); margin: 4px 0 0;">Discussions</p>
						</div>
						<div>
							<p style="font-size: 14px; color: var(--bm-white); font-weight: 600; margin: 0;">50+</p>
							<p style="font-size: 12px; color: var(--bm-muted); margin: 4px 0 0;">Countries</p>
						</div>
						<div>
							<p style="font-size: 14px; color: var(--bm-white); font-weight: 600; margin: 0;">24/7</p>
							<p style="font-size: 12px; color: var(--bm-muted); margin: 4px 0 0;">Support</p>
						</div>
					</div>
					<a href="/n/" class="bm-btn-gradient" style="font-size: 14px; padding: 12px 24px;">
						Join Now <ArrowRight size={16} />
					</a>
				</div>

				<!-- Right: chat preview -->
				<div style="padding: 48px; background: rgba(0,0,0,0.3); display: flex; flex-direction: column; gap: 16px; justify-content: center;">
					{#each [
						{ name: 'Sarah K.', avatar: 'S', color: '#4F46E5', message: 'Assalamu alaikum everyone! I just took my shahada last week. So grateful for this community.', time: '2m ago' },
						{ name: 'Yusuf M.', avatar: 'Y', color: '#7C3AED', message: 'Welcome Sarah! MashaAllah. This place helped me so much when I first converted.', time: '1m ago' },
						{ name: 'Fatima A.', avatar: 'F', color: '#C084FC', message: 'The Being Muslim book was a lifesaver for me. Highly recommend starting there!', time: 'Just now' }
					] as msg}
						<div style="display: flex; gap: 12px;">
							<div style="width: 32px; height: 32px; border-radius: 50%; background: {msg.color}; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
								<span style="font-size: 12px; font-weight: 600; color: #fff;">{msg.avatar}</span>
							</div>
							<div style="flex: 1; min-width: 0;">
								<div style="display: flex; align-items: baseline; gap: 8px; margin-bottom: 2px;">
									<span style="font-size: 13px; font-weight: 600; color: var(--bm-white);">{msg.name}</span>
									<span style="font-size: 11px; color: rgba(255,255,255,0.25);">{msg.time}</span>
								</div>
								<p style="font-size: 13px; color: rgba(255,255,255,0.5); line-height: 1.5; margin: 0;">{msg.message}</p>
							</div>
						</div>
					{/each}
					<div style="display: flex; align-items: center; gap: 8px; padding-top: 12px; border-top: 1px solid rgba(255,255,255,0.06);">
						<MessageCircle size={14} style="color: rgba(255,255,255,0.2);" />
						<span style="font-size: 12px; color: rgba(255,255,255,0.2);">3 people typing...</span>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- ============================================
     SECTION 8: IMPACT
     ============================================ -->
<section class="bm-section" style="background: var(--bm-black); text-align: center;">
	<div class="bm-container" style="max-width: 600px;">
		<p class="gradient-text" style="font-size: 80px; font-weight: 800; margin: 0 0 8px; line-height: 1; letter-spacing: -0.03em;">3,247</p>
		<p style="font-size: 20px; font-weight: 500; color: var(--bm-white); margin: 0 0 32px;">
			boxed sets sponsored for new Muslims
		</p>
		<div style="display: flex; justify-content: center; gap: 48px; margin-bottom: 40px;">
			<div>
				<p style="font-size: 14px; color: var(--bm-muted); margin: 0;">10,000+ communities</p>
			</div>
			<div>
				<p style="font-size: 14px; color: var(--bm-muted); margin: 0;">50+ countries</p>
			</div>
			<div>
				<p style="font-size: 14px; color: var(--bm-muted); margin: 0;">4.9&#9733; average rating</p>
			</div>
		</div>
		<a href="/n/" class="bm-btn-gradient" style="font-size: 15px; padding: 14px 28px;">
			Support the Mission
		</a>
	</div>
</section>

<!-- ============================================
     SECTION 9: TESTIMONIAL
     ============================================ -->
<section class="bm-section" style="background: var(--bm-black);">
	<div class="bm-container" style="max-width: 700px;">
		<div style="background: var(--bm-surface); border-radius: 16px; padding: 48px; text-align: center; position: relative; overflow: hidden;">
			<!-- Thin gradient line at top -->
			<div style="position: absolute; top: 0; left: 0; right: 0; height: 2px; background: var(--bm-gradient);"></div>

			<!-- Stars -->
			<div style="display: flex; justify-content: center; gap: 4px; margin-bottom: 24px;">
				{#each Array(5) as _}
					<Star size={18} style="color: #7C3AED; fill: #7C3AED;" />
				{/each}
			</div>

			<!-- Quote -->
			<p style="font-size: 20px; font-weight: 400; font-style: italic; color: var(--bm-white); line-height: 1.6; margin: 0 0 24px;">
				"This book was the first thing I received after taking my shahada. It made me feel seen, supported, and less alone. I carry it everywhere."
			</p>

			<!-- Attribution -->
			<p style="font-size: 14px; color: var(--bm-muted); margin: 0;">
				<strong style="color: rgba(247,247,247,0.8); font-weight: 600;">Amina R.</strong> &middot; New Muslim, Chicago
			</p>
		</div>
	</div>
</section>

<!-- ============================================
     SECTION 10: CTA — Final push
     ============================================ -->
<section style="min-height: 100vh; display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 80px 24px; background: var(--bm-black); text-align: center;">
	<!-- Heading -->
	<h2 class="gradient-text" style="font-size: clamp(36px, 6vw, 56px); font-weight: 800; margin: 0 0 32px; line-height: 1.1; letter-spacing: -0.03em;">
		Ready to start?
	</h2>

	<!-- CTAs -->
	<div style="display: flex; align-items: center; gap: 16px; flex-wrap: wrap; justify-content: center; margin-bottom: 56px;">
		<a href="/n/" class="bm-btn-gradient" style="font-size: 15px; padding: 14px 28px;">
			Start Learning
		</a>
		<a href="/n/" class="bm-btn-outline" style="font-size: 15px; padding: 14px 28px;">
			Browse Resources
		</a>
	</div>

	<!-- Email signup -->
	<form onsubmit={(e) => e.preventDefault()} style="display: flex; gap: 12px; max-width: 440px; width: 100%; margin: 0 auto;">
		<input
			type="email"
			placeholder="Enter your email"
			style="flex: 1; min-width: 0; padding: 12px 20px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.12); background: var(--bm-surface); color: var(--bm-white); font-family: var(--bm-font); font-size: 14px; outline: none; transition: border-color 0.2s;"
		/>
		<button type="submit" class="bm-btn-gradient" style="padding: 12px 24px; flex-shrink: 0;">
			<Mail size={16} />
			Subscribe
		</button>
	</form>
	<p style="font-size: 13px; color: var(--bm-muted); margin-top: 16px;">
		5,000+ subscribers
	</p>
</section>

<style>
	/* Feature icon gradient */
	:global(.feature-icon) {
		stroke: url(#icon-gradient) !important;
	}

	/* Course row hover */
	.course-row {
		border-radius: 8px;
		padding-left: 12px !important;
		padding-right: 12px !important;
		margin-left: -12px;
		margin-right: -12px;
	}
	.course-row:hover {
		background: rgba(255,255,255,0.02) !important;
	}

	/* Course enroll button hide on mobile */
	@media (max-width: 640px) {
		.course-enroll {
			display: none !important;
		}
	}

	/* Email input */
	input::placeholder {
		color: rgba(255,255,255,0.3);
	}
	input:focus {
		border-color: rgba(124,58,237,0.5) !important;
	}

	/* View All arrow link hover */
	:global(.gradient-text svg) {
		transition: transform 0.2s;
	}
	:global(a.gradient-text:hover svg) {
		transform: translateX(3px);
	}
</style>
