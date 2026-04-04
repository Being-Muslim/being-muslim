<script lang="ts">
	import {
		ArrowRight,
		Compass,
		Sunrise,
		RefreshCw,
		Star,
		Users,
		MessageCircle,
		Mail
	} from 'lucide-svelte';
	import {
		articles,
		products,
		testimonials,
		donationStats
	} from '$lib/data/mock.js';

	const featuredArticles = articles.filter((a) => a.featured).slice(0, 3);
	const featuredProducts = products.slice(0, 4);

	let email = $state('');
</script>

<svelte:head>
	<title>Being Muslim — Grow in Faith, One Step at a Time</title>
	<meta
		name="description"
		content="Nurturing faith through knowledge, community, and compassion. A garden where every soul can grow."
	/>
</svelte:head>

<!-- ============================== -->
<!-- 1. HERO                        -->
<!-- ============================== -->
<section
	style="
		min-height: 100vh;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		text-align: center;
		background: radial-gradient(ellipse at 30% 20%, #e8dfd3 0%, #d4cfbf 30%, #c5d4c0 60%, #F4EDE4 100%);
		padding: 120px 24px 80px;
		position: relative;
		overflow: hidden;
	"
>
	<div style="max-width: 720px; position: relative; z-index: 1;">
		<h1
			style="
				font-family: 'Cormorant Garamond', serif;
				font-size: clamp(42px, 6vw, 72px);
				font-weight: 400;
				line-height: 1.08;
				color: #3A3632;
				margin: 0 0 24px;
				letter-spacing: -0.02em;
			"
		>
			<span style="font-style: italic; color: #1A5653;">Grow</span> in faith,<br />one step at a time
		</h1>
		<p
			style="
				font-family: 'Manrope', sans-serif;
				font-size: 17px;
				color: #8a8278;
				line-height: 1.7;
				max-width: 520px;
				margin: 0 auto 36px;
			"
		>
			Whether you are exploring Islam, newly converted, or deepening your practice — find the knowledge, community, and support to nurture your journey.
		</p>
		<a
			href="/g"
			class="bm-btn-dark"
			style="padding: 14px 32px; font-size: 15px; font-weight: 600;"
		>
			Begin your journey <ArrowRight size={16} />
		</a>

		<!-- Decorative botanical SVG motif -->
		<div style="margin-top: 48px; opacity: 0.25;">
			<svg width="120" height="60" viewBox="0 0 120 60" fill="none" xmlns="http://www.w3.org/2000/svg" style="display: block; margin: 0 auto;">
				<path d="M60 58 C60 58 60 30 60 10" stroke="#1A5653" stroke-width="1.5" stroke-linecap="round"/>
				<path d="M60 35 C50 28 42 18 38 8" stroke="#1A5653" stroke-width="1.2" stroke-linecap="round" fill="none"/>
				<path d="M60 35 C70 28 78 18 82 8" stroke="#1A5653" stroke-width="1.2" stroke-linecap="round" fill="none"/>
				<ellipse cx="38" cy="8" rx="6" ry="9" transform="rotate(-30 38 8)" fill="none" stroke="#1A5653" stroke-width="1"/>
				<ellipse cx="82" cy="8" rx="6" ry="9" transform="rotate(30 82 8)" fill="none" stroke="#1A5653" stroke-width="1"/>
				<path d="M60 22 C52 16 46 8 44 2" stroke="#1A5653" stroke-width="1" stroke-linecap="round" fill="none"/>
				<path d="M60 22 C68 16 74 8 76 2" stroke="#1A5653" stroke-width="1" stroke-linecap="round" fill="none"/>
				<ellipse cx="44" cy="2" rx="4" ry="6" transform="rotate(-25 44 2)" fill="none" stroke="#1A5653" stroke-width="0.8"/>
				<ellipse cx="76" cy="2" rx="4" ry="6" transform="rotate(25 76 2)" fill="none" stroke="#1A5653" stroke-width="0.8"/>
			</svg>
		</div>
	</div>
</section>

<!-- ============================== -->
<!-- 2. WAVE DIVIDER: Hero → Paths  -->
<!-- ============================== -->
<div class="bm-wave-divider" style="background: radial-gradient(ellipse at 30% 20%, #e8dfd3 0%, #d4cfbf 30%, #c5d4c0 60%, #F4EDE4 100%);">
	<svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M0,0 C360,80 1080,0 1440,60 L1440,80 L0,80 Z" fill="#F4EDE4"/>
	</svg>
</div>

<!-- ============================== -->
<!-- 3. JOURNEY PATHS               -->
<!-- ============================== -->
<section style="background: #F4EDE4; padding: 64px 0 80px;">
	<div class="bm-container">
		<h2
			style="
				font-family: 'Cormorant Garamond', serif;
				font-size: clamp(28px, 4vw, 44px);
				font-weight: 400;
				color: #3A3632;
				text-align: center;
				margin: 0 0 48px;
				line-height: 1.15;
			"
		>
			Find where you belong
		</h2>

		<div class="bm-grid-3">
			<!-- Exploring Islam -->
			<div class="bm-organic-card" style="padding: 32px; display: flex; flex-direction: column;">
				<div
					style="
						width: 56px;
						height: 56px;
						border-radius: 999px;
						background: rgba(26, 86, 83, 0.1);
						display: flex;
						align-items: center;
						justify-content: center;
						margin-bottom: 20px;
					"
				>
					<Compass size={24} style="color: #1A5653;" />
				</div>
				<h3
					style="
						font-family: 'Cormorant Garamond', serif;
						font-size: 24px;
						font-weight: 500;
						color: #3A3632;
						margin: 0 0 12px;
						line-height: 1.2;
					"
				>
					Exploring Islam
				</h3>
				<p
					style="
						font-family: 'Manrope', sans-serif;
						font-size: 14px;
						color: #8a8278;
						line-height: 1.7;
						margin: 0 0 24px;
						flex: 1;
					"
				>
					Curious about Islam or considering converting? Start here with foundational knowledge presented with warmth and clarity.
				</p>
				<a
					href="/g"
					style="
						font-family: 'Manrope', sans-serif;
						font-size: 14px;
						font-weight: 600;
						color: #1A5653;
						text-decoration: none;
						display: inline-flex;
						align-items: center;
						gap: 6px;
					"
				>
					Learn more <ArrowRight size={14} />
				</a>
			</div>

			<!-- Newly Converted -->
			<div class="bm-organic-card" style="padding: 32px; display: flex; flex-direction: column;">
				<div
					style="
						width: 56px;
						height: 56px;
						border-radius: 999px;
						background: rgba(193, 123, 123, 0.12);
						display: flex;
						align-items: center;
						justify-content: center;
						margin-bottom: 20px;
					"
				>
					<Sunrise size={24} style="color: #C17B7B;" />
				</div>
				<h3
					style="
						font-family: 'Cormorant Garamond', serif;
						font-size: 24px;
						font-weight: 500;
						color: #3A3632;
						margin: 0 0 12px;
						line-height: 1.2;
					"
				>
					Newly Converted
				</h3>
				<p
					style="
						font-family: 'Manrope', sans-serif;
						font-size: 14px;
						color: #8a8278;
						line-height: 1.7;
						margin: 0 0 24px;
						flex: 1;
					"
				>
					Just taken your shahada? Welcome home. Find step-by-step guidance for your first days, weeks, and months as a Muslim.
				</p>
				<a
					href="/g"
					style="
						font-family: 'Manrope', sans-serif;
						font-size: 14px;
						font-weight: 600;
						color: #C17B7B;
						text-decoration: none;
						display: inline-flex;
						align-items: center;
						gap: 6px;
					"
				>
					Learn more <ArrowRight size={14} />
				</a>
			</div>

			<!-- Reconnecting -->
			<div class="bm-organic-card" style="padding: 32px; display: flex; flex-direction: column;">
				<div
					style="
						width: 56px;
						height: 56px;
						border-radius: 999px;
						background: rgba(107, 124, 81, 0.12);
						display: flex;
						align-items: center;
						justify-content: center;
						margin-bottom: 20px;
					"
				>
					<RefreshCw size={24} style="color: #6B7C51;" />
				</div>
				<h3
					style="
						font-family: 'Cormorant Garamond', serif;
						font-size: 24px;
						font-weight: 500;
						color: #3A3632;
						margin: 0 0 12px;
						line-height: 1.2;
					"
				>
					Reconnecting
				</h3>
				<p
					style="
						font-family: 'Manrope', sans-serif;
						font-size: 14px;
						color: #8a8278;
						line-height: 1.7;
						margin: 0 0 24px;
						flex: 1;
					"
				>
					A lifelong Muslim looking to deepen your practice? Rediscover the beauty of your faith with fresh perspectives and deeper knowledge.
				</p>
				<a
					href="/g"
					style="
						font-family: 'Manrope', sans-serif;
						font-size: 14px;
						font-weight: 600;
						color: #6B7C51;
						text-decoration: none;
						display: inline-flex;
						align-items: center;
						gap: 6px;
					"
				>
					Learn more <ArrowRight size={14} />
				</a>
			</div>
		</div>
	</div>
</section>

<!-- ============================== -->
<!-- 4. WAVE DIVIDER: Paths → Resources -->
<!-- ============================== -->
<div class="bm-wave-divider" style="background: #F4EDE4;">
	<svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M0,20 C240,80 720,0 1080,60 C1260,80 1380,40 1440,30 L1440,80 L0,80 Z" fill="#EBE3D8"/>
	</svg>
</div>

<!-- ============================== -->
<!-- 5. FEATURED RESOURCES          -->
<!-- ============================== -->
<section style="background: #EBE3D8; padding: 64px 0 80px;">
	<div class="bm-container">
		<div style="display: flex; justify-content: space-between; align-items: end; margin-bottom: 40px;">
			<h2
				style="
					font-family: 'Cormorant Garamond', serif;
					font-size: clamp(28px, 4vw, 44px);
					font-weight: 400;
					color: #3A3632;
					margin: 0;
					line-height: 1.15;
				"
			>
				Nourish your understanding
			</h2>
			<a
				href="/g"
				class="bm-view-all"
				style="
					font-family: 'Manrope', sans-serif;
					font-size: 13px;
					font-weight: 500;
					color: #3A3632;
					text-decoration: none;
					display: inline-flex;
					align-items: center;
					gap: 4px;
					flex-shrink: 0;
				"
			>
				View all <ArrowRight size={14} />
			</a>
		</div>

		<div class="bm-grid-3">
			{#each [
				{ title: 'Understanding the Five Pillars of Islam', category: 'Belief', time: '8 min read', img: 'https://www.beingmuslim.org/wp-content/uploads/2022/03/livingislamwithpurpose.png' },
				{ title: 'Your First Prayer: A Gentle Step-by-Step Guide', category: 'Prayer', time: '12 min read', img: 'https://www.beingmuslim.org/wp-content/uploads/2021/08/being-muslim-book.jpeg' },
				{ title: 'Finding Community as a Convert', category: 'Community', time: '6 min read', img: 'https://www.beingmuslim.org/wp-content/uploads/2022/03/oneGodmanynames.jpeg' }
			] as article}
				<a href="/g" style="text-decoration: none; display: block;" class="bm-title-underline-parent">
					<div style="aspect-ratio: 4/3; background: #d8d0c4; border-radius: 12px; overflow: hidden; margin-bottom: 16px;">
						<img src={article.img} alt={article.title} style="width: 100%; height: 100%; object-fit: cover; display: block;" />
					</div>
					<div style="margin-bottom: 10px;">
						<span
							style="
								font-family: 'Manrope', sans-serif;
								font-size: 11px;
								font-weight: 600;
								color: #fff;
								background: #1A5653;
								padding: 3px 10px;
								border-radius: 999px;
								text-transform: uppercase;
								letter-spacing: 0.04em;
							"
						>
							{article.category}
						</span>
					</div>
					<h3
						class="bm-title-underline"
						style="
							font-family: 'Cormorant Garamond', serif;
							font-size: 20px;
							font-weight: 500;
							color: #3A3632;
							margin: 0 0 8px;
							line-height: 1.3;
						"
					>
						{article.title}
					</h3>
					<span style="font-family: 'Manrope', sans-serif; font-size: 12px; color: #8a8278;">{article.time}</span>
				</a>
			{/each}
		</div>
	</div>
</section>

<!-- ============================== -->
<!-- 6. WAVE DIVIDER: Resources → Products -->
<!-- ============================== -->
<div class="bm-wave-divider" style="background: #EBE3D8;">
	<svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M0,40 C320,0 640,70 960,20 C1200,-10 1360,50 1440,30 L1440,80 L0,80 Z" fill="#F4EDE4"/>
	</svg>
</div>

<!-- ============================== -->
<!-- 7. PRODUCTS                    -->
<!-- ============================== -->
<section style="background: #F4EDE4; padding: 64px 0 80px;">
	<div class="bm-container">
		<h2
			style="
				font-family: 'Cormorant Garamond', serif;
				font-size: clamp(28px, 4vw, 44px);
				font-weight: 400;
				color: #3A3632;
				text-align: center;
				margin: 0 0 48px;
				line-height: 1.15;
			"
		>
			Seeds for your journey
		</h2>

		<div class="bm-grid-4">
			{#each [
				{ title: 'Being Muslim: A Practical Guide', price: '$14.95', badge: 'Bestseller', img: 'https://www.beingmuslim.org/wp-content/uploads/2021/08/being-muslim-book.jpeg' },
				{ title: 'The Complete Boxed Set', price: '$85.00', badge: 'Most Popular', img: 'https://www.beingmuslim.org/wp-content/uploads/2021/08/the-boxed-set-900x1200.jpeg' },
				{ title: 'Prayer Reference Cards (25-Pack)', price: '$37.50', badge: '', img: 'https://www.beingmuslim.org/wp-content/uploads/2021/08/the-prayer-card-900x610.jpeg' },
				{ title: 'Digital Edition (eBook)', price: '$9.00', badge: '', img: 'https://www.beingmuslim.org/wp-content/uploads/2021/08/BM-E-Book-900x1200.png' }
			] as product}
				<a href="/g" style="text-decoration: none; display: block;" class="bm-card-hover">
					<div
						style="
							background: #fff;
							border-radius: 20px;
							overflow: hidden;
							box-shadow: 0 2px 16px rgba(58, 54, 50, 0.06);
						"
					>
						<div style="aspect-ratio: 1; background: #ebe3d8; overflow: hidden; position: relative;">
							<img
								src={product.img}
								alt={product.title}
								style="width: 100%; height: 100%; object-fit: cover; display: block; transition: transform 500ms ease;"
								class="product-img"
							/>
							{#if product.badge}
								<span
									style="
										position: absolute;
										top: 12px;
										left: 12px;
										font-family: 'Manrope', sans-serif;
										font-size: 10px;
										font-weight: 600;
										color: #3A3632;
										background: #fff;
										padding: 4px 12px;
										border-radius: 999px;
										z-index: 2;
									"
								>
									{product.badge}
								</span>
							{/if}
						</div>
						<div style="padding: 20px;">
							<h3
								style="
									font-family: 'Cormorant Garamond', serif;
									font-size: 17px;
									font-weight: 500;
									color: #3A3632;
									margin: 0 0 6px;
									line-height: 1.3;
								"
							>
								{product.title}
							</h3>
							<span
								style="
									font-family: 'Manrope', sans-serif;
									font-size: 14px;
									font-weight: 600;
									color: #1A5653;
								"
							>
								{product.price}
							</span>
						</div>
					</div>
				</a>
			{/each}
		</div>

		<div style="text-align: center; margin-top: 40px;">
			<a href="/g" class="bm-btn-outline" style="padding: 12px 28px;">
				Browse All Products <ArrowRight size={14} />
			</a>
		</div>
	</div>
</section>

<!-- ============================== -->
<!-- 8. WAVE DIVIDER: Products → Community -->
<!-- ============================== -->
<div class="bm-wave-divider" style="background: #F4EDE4;">
	<svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M0,60 C180,0 540,70 900,20 C1140,-10 1320,40 1440,10 L1440,80 L0,80 Z" fill="#1A5653"/>
	</svg>
</div>

<!-- ============================== -->
<!-- 9. COMMUNITY                   -->
<!-- ============================== -->
<section style="background: #1A5653; padding: 64px 0 80px;">
	<div class="bm-container">
		<div class="bm-grid-2-gap">
			<!-- Left -->
			<div>
				<h2
					style="
						font-family: 'Cormorant Garamond', serif;
						font-size: clamp(28px, 4vw, 44px);
						font-weight: 400;
						color: #F4EDE4;
						margin: 0 0 16px;
						line-height: 1.15;
					"
				>
					A garden grows together
				</h2>
				<p
					style="
						font-family: 'Manrope', sans-serif;
						font-size: 15px;
						color: rgba(244, 237, 228, 0.65);
						line-height: 1.7;
						margin: 0 0 28px;
					"
				>
					Join a supportive community of fellow seekers, converts, and lifelong Muslims. Ask questions, share experiences, and grow together in faith.
				</p>
				<div style="display: flex; gap: 28px; margin-bottom: 32px;">
					<div style="display: flex; align-items: center; gap: 8px;">
						<Users size={18} style="color: #C17B7B;" />
						<span style="font-family: 'Manrope', sans-serif; font-size: 14px; color: rgba(244, 237, 228, 0.8);">
							<strong style="font-family: 'Cormorant Garamond', serif; font-size: 22px; color: #C17B7B; font-weight: 600;">2,500+</strong> members
						</span>
					</div>
					<div style="display: flex; align-items: center; gap: 8px;">
						<MessageCircle size={18} style="color: #C17B7B;" />
						<span style="font-family: 'Manrope', sans-serif; font-size: 14px; color: rgba(244, 237, 228, 0.8);">
							<strong style="font-family: 'Cormorant Garamond', serif; font-size: 22px; color: #C17B7B; font-weight: 600;">1,200+</strong> discussions
						</span>
					</div>
				</div>
				<a
					href="/g"
					class="bm-btn-white"
					style="padding: 14px 28px; font-weight: 600; color: #1A5653;"
				>
					Join the Community <ArrowRight size={14} />
				</a>
			</div>

			<!-- Right: chat preview -->
			<div
				style="
					background: rgba(244, 237, 228, 0.08);
					border-radius: 20px;
					padding: 28px;
					border: 1px solid rgba(244, 237, 228, 0.1);
				"
			>
				{#each [
					{ name: 'Aminah', msg: 'Salaam everyone! Just took my shahada yesterday', time: '2m ago' },
					{ name: 'Omar', msg: 'MashaAllah! Welcome to the family, sister!', time: '1m ago' },
					{ name: 'Fatima', msg: 'So happy for you! Feel free to ask anything here.', time: 'just now' }
				] as message, i}
					<div
						style="
							display: flex;
							gap: 12px;
							padding: 14px 0;
							{i > 0 ? 'border-top: 1px solid rgba(244, 237, 228, 0.08);' : ''}
						"
					>
						<div
							style="
								width: 36px;
								height: 36px;
								border-radius: 999px;
								background: rgba(244, 237, 228, 0.12);
								display: flex;
								align-items: center;
								justify-content: center;
								flex-shrink: 0;
								font-family: 'Manrope', sans-serif;
								font-size: 13px;
								font-weight: 600;
								color: #C17B7B;
							"
						>
							{message.name[0]}
						</div>
						<div>
							<div style="display: flex; align-items: center; gap: 8px;">
								<span
									style="
										font-family: 'Manrope', sans-serif;
										font-size: 13px;
										font-weight: 600;
										color: #F4EDE4;
									"
								>
									{message.name}
								</span>
								<span
									style="
										font-family: 'Manrope', sans-serif;
										font-size: 11px;
										color: rgba(244, 237, 228, 0.35);
									"
								>
									{message.time}
								</span>
							</div>
							<p
								style="
									font-family: 'Manrope', sans-serif;
									font-size: 13px;
									color: rgba(244, 237, 228, 0.6);
									margin: 4px 0 0;
									line-height: 1.5;
								"
							>
								{message.msg}
							</p>
						</div>
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>

<!-- ============================== -->
<!-- 10. WAVE DIVIDER: Community → Support -->
<!-- ============================== -->
<div class="bm-wave-divider" style="background: #1A5653;">
	<svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M0,30 C360,80 720,-10 1080,50 C1260,70 1380,20 1440,40 L1440,80 L0,80 Z" fill="#F4EDE4"/>
	</svg>
</div>

<!-- ============================== -->
<!-- 11. SUPPORT                    -->
<!-- ============================== -->
<section style="background: #F4EDE4; padding: 64px 0 80px;">
	<div class="bm-container">
		<div class="bm-grid-2-gap">
			<div>
				<h2
					style="
						font-family: 'Cormorant Garamond', serif;
						font-size: clamp(28px, 4vw, 44px);
						font-weight: 400;
						color: #3A3632;
						margin: 0 0 16px;
						line-height: 1.15;
					"
				>
					Help someone plant their first seed
				</h2>
				<p
					style="
						font-family: 'Manrope', sans-serif;
						font-size: 15px;
						color: #8a8278;
						line-height: 1.7;
						margin: 0 0 28px;
					"
				>
					Many new Muslims cannot afford the resources they need. Your sponsorship puts a complete Being Muslim boxed set in their hands — a gift that transforms lives.
				</p>
				<a href="/g" class="bm-btn-dark" style="padding: 14px 28px; font-weight: 600;">
					Support the Mission <ArrowRight size={14} />
				</a>
			</div>

			<div class="bm-grid-stats">
				{#each [
					{ value: '3,247', label: 'Sets Sponsored' },
					{ value: '520', label: 'Communities Reached' },
					{ value: '52', label: 'Countries' },
					{ value: '180', label: 'Monthly Donors' }
				] as stat}
					<div
						style="
							background: #fff;
							border-radius: 20px;
							padding: 28px;
							text-align: center;
							box-shadow: 0 2px 12px rgba(58, 54, 50, 0.04);
						"
					>
						<p
							style="
								font-family: 'Cormorant Garamond', serif;
								font-size: 36px;
								font-weight: 600;
								line-height: 1;
								color: #C17B7B;
								margin: 0 0 6px;
							"
						>
							{stat.value}
						</p>
						<p
							style="
								font-family: 'Manrope', sans-serif;
								font-size: 12px;
								font-weight: 500;
								color: #8a8278;
								margin: 0;
							"
						>
							{stat.label}
						</p>
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>

<!-- ============================== -->
<!-- 12. WAVE DIVIDER: Support → Testimonials -->
<!-- ============================== -->
<div class="bm-wave-divider" style="background: #F4EDE4;">
	<svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M0,50 C480,0 960,70 1440,20 L1440,80 L0,80 Z" fill="#EBE3D8"/>
	</svg>
</div>

<!-- ============================== -->
<!-- 12. TESTIMONIALS               -->
<!-- ============================== -->
<section style="background: #EBE3D8; padding: 64px 0 80px;">
	<div class="bm-container">
		<h2
			style="
				font-family: 'Cormorant Garamond', serif;
				font-size: clamp(28px, 4vw, 44px);
				font-weight: 400;
				color: #3A3632;
				text-align: center;
				margin: 0 0 48px;
				line-height: 1.15;
			"
		>
			Voices from the garden
		</h2>

		<div class="bm-grid-3">
			{#each testimonials.slice(0, 3) as testimonial}
				<div
					style="
						background: #fff;
						border-radius: 20px;
						padding: 32px;
						display: flex;
						flex-direction: column;
						box-shadow: 0 2px 16px rgba(58, 54, 50, 0.05);
					"
				>
					<div style="display: flex; gap: 3px; margin-bottom: 16px;">
						{#each Array(5) as _}
							<Star size={16} style="color: #C17B7B; fill: #C17B7B;" />
						{/each}
					</div>
					<blockquote
						style="
							font-family: 'Cormorant Garamond', serif;
							font-size: 17px;
							font-style: italic;
							line-height: 1.6;
							color: #3A3632;
							margin: 0 0 24px;
							flex: 1;
						"
					>
						"{testimonial.quote}"
					</blockquote>
					<div>
						<p
							style="
								font-family: 'Manrope', sans-serif;
								font-size: 14px;
								font-weight: 600;
								color: #3A3632;
								margin: 0;
							"
						>
							{testimonial.name}
						</p>
						<p
							style="
								font-family: 'Manrope', sans-serif;
								font-size: 13px;
								color: #8a8278;
								margin: 4px 0 0;
							"
						>
							{testimonial.role}
						</p>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- ============================== -->
<!-- 13. WAVE DIVIDER: Testimonials → Newsletter -->
<!-- ============================== -->
<div class="bm-wave-divider" style="background: #EBE3D8;">
	<svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M0,10 C240,70 600,0 900,50 C1100,70 1300,20 1440,40 L1440,80 L0,80 Z" fill="#3A3632"/>
	</svg>
</div>

<!-- ============================== -->
<!-- 14. NEWSLETTER                 -->
<!-- ============================== -->
<section style="background: #3A3632; padding: 64px 0 80px;">
	<div class="bm-container">
		<div class="bm-grid-newsletter">
			<!-- Left: text -->
			<div>
				<h2
					style="
						font-family: 'Cormorant Garamond', serif;
						font-size: clamp(28px, 4vw, 40px);
						font-weight: 400;
						color: #F4EDE4;
						margin: 0 0 12px;
						line-height: 1.15;
					"
				>
					Stay rooted
				</h2>
				<p
					style="
						font-family: 'Manrope', sans-serif;
						font-size: 15px;
						color: rgba(244, 237, 228, 0.55);
						line-height: 1.7;
						margin: 0;
					"
				>
					Join our mailing list for community updates, new resources, and thoughtful reflections delivered to your inbox.
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
						style="
							width: 100%;
							padding: 16px 60px 16px 20px;
							border-radius: 999px;
							border: 1px solid rgba(244, 237, 228, 0.15);
							background: rgba(244, 237, 228, 0.08);
							color: #F4EDE4;
							font-family: 'Manrope', sans-serif;
							font-size: 14px;
							outline: none;
							box-sizing: border-box;
							transition: border-color 0.2s;
						"
					/>
					<button
						type="submit"
						class="bm-newsletter-btn"
						style="
							position: absolute;
							right: 4px;
							top: 50%;
							transform: translateY(-50%);
							width: 44px;
							height: 44px;
							border-radius: 999px;
							background: #1A5653;
							border: none;
							display: flex;
							align-items: center;
							justify-content: center;
							cursor: pointer;
						"
					>
						<ArrowRight size={16} style="color: #F4EDE4;" />
					</button>
				</form>
				<p
					style="
						font-family: 'Manrope', sans-serif;
						font-size: 12px;
						color: rgba(244, 237, 228, 0.35);
						margin: 0;
					"
				>
					Join 5,000+ subscribers. Unsubscribe anytime.
				</p>
			</div>
		</div>
	</div>
</section>

<style>
	:global(.product-img) {
		transition: transform 500ms ease;
	}
	:global(.bm-card-hover:hover .product-img) {
		transform: scale(1.05);
	}
</style>
