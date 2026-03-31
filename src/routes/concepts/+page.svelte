<script lang="ts">
	import { ArrowRight } from 'lucide-svelte';

	const concepts = [
		{
			id: 'A',
			name: 'Current Design',
			subtitle: 'Warm scholarly',
			href: '/',
			primary: '#8b2e36',
			fonts: 'Brill + Inter',
			description: 'The original design — warm, scholarly, and rooted in tradition. Dark hero sections with geometric patterns, burgundy accent, moderate shadows.'
		},
		{
			id: 'B',
			name: 'Sahil',
			subtitle: 'Neo-Brutalist',
			href: '/b',
			primary: '#E63946',
			fonts: 'Space Grotesk + Work Sans',
			description: 'Raw, bold, unapologetically honest. Thick 3px borders, yellow-highlighted keywords, monospace metadata, zero border-radius, horizontal strip layouts. Typography IS the decoration.'
		},
		{
			id: 'C',
			name: 'Lawh',
			subtitle: 'Bento Dashboard',
			href: '/c',
			primary: '#007AFF',
			fonts: 'Manrope + Albert Sans',
			description: 'Explorable, modular, Apple-inspired. Bento tile grids, iOS blue accent, status dot indicators, compact navigation with search, rounded 20px tiles on cool gray background.'
		},
		{
			id: 'D',
			name: 'Miraj',
			subtitle: 'Cinematic Dark',
			href: '/d',
			primary: '#D4A574',
			fonts: 'Fraunces + Outfit',
			description: 'Dramatic, immersive, storytelling-first. Near-black background, warm bronze accent, 60/40 split-screen sections, extreme font scale, full-bleed imagery. Like a documentary film site.'
		},
		{
			id: 'E',
			name: 'Rawdah',
			subtitle: 'Glassmorphic Ethereal',
			href: '/e',
			primary: '#6366F1',
			fonts: 'Lora + Rubik',
			description: 'Serene, layered, spiritually uplifting. Frosted glass panels on animated gradient mesh, floating pill navbar, organic SVG wave dividers, soft indigo glow, centered meditative layouts.'
		},
		{
			id: 'F',
			name: 'Centered & Immersive',
			subtitle: 'Layout variant of A',
			href: '/f',
			primary: '#8b2e36',
			fonts: 'Brill + Inter',
			description: 'Full-screen centered hero, stats inline below CTA, large centered audience cards, magazine-style articles (1 featured + 2 smaller), 3-col product grid, full-width dark testimonial, centered donate section. Same palette & components as A with a cinematic, immersive layout.'
		},
		{
			id: 'G',
			name: 'Content-Forward',
			subtitle: 'Layout variant of A',
			href: '/g',
			primary: '#8b2e36',
			fonts: 'Brill + Inter',
			description: 'Compact split hero with stats cards on the right, editorial article list (no images), featured product spotlight + sidebar list, community & donate side-by-side, inline newsletter. Same palette & components as A with a dense, information-first layout.'
		}
	];
</script>

<svelte:head>
	<title>Design Concepts — Being Muslim</title>
</svelte:head>

<div class="min-h-screen bg-bg-primary py-16 sm:py-24">
	<div class="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
		<div class="text-center">
			<h1 class="font-display text-4xl font-bold sm:text-5xl">Design Concepts</h1>
			<p class="mx-auto mt-4 max-w-2xl text-lg text-text-secondary">
				Seven design approaches for BeingMuslim.org. A is the base design — B through E explore different visual identities, while F and G are layout variations of A.
			</p>
		</div>

		<div class="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
			{#each concepts as concept}
				<a href={concept.href} class="group">
					<div class="flex h-full flex-col overflow-hidden rounded-xl border border-border bg-surface transition-all duration-200 hover:shadow-lg">
						<!-- Color bar -->
						<div class="h-2" style="background-color: {concept.primary}"></div>

						<div class="flex flex-1 flex-col p-6">
							<!-- Header -->
							<div class="flex items-center gap-3">
								<div
									class="flex h-10 w-10 items-center justify-center rounded-lg text-lg font-bold text-white"
									style="background-color: {concept.primary}"
								>
									{concept.id}
								</div>
								<div>
									<h2 class="font-display text-xl font-bold">{concept.name}</h2>
									<p class="text-sm text-text-secondary">{concept.subtitle}</p>
								</div>
							</div>

							<!-- Description -->
							<p class="mt-4 flex-1 text-sm leading-relaxed text-text-secondary">
								{concept.description}
							</p>

							<!-- Meta -->
							<div class="mt-4 flex items-center justify-between border-t border-border pt-4">
								<span class="text-xs text-text-secondary">Fonts: {concept.fonts}</span>
								<span class="flex items-center gap-1 text-sm font-medium text-accent-primary transition-colors group-hover:text-accent-hover">
									View
									<ArrowRight class="h-4 w-4 transition-transform group-hover:translate-x-1" />
								</span>
							</div>
						</div>
					</div>
				</a>
			{/each}
		</div>
	</div>
</div>
