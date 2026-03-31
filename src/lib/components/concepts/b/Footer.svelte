<script lang="ts">
	import { footerLinks } from '$lib/data/mock';
	import { withPrefix } from '$lib/data/utils';

	const p = (href: string) => withPrefix('/b', href);

	const sections = [
		{ title: 'Learn', links: footerLinks.learn },
		{ title: 'Shop', links: footerLinks.shop },
		{ title: 'Community', links: footerLinks.community },
		{ title: 'About', links: footerLinks.about }
	];
</script>

<!-- Footer — thick border top, monospace section headers -->
<footer class="border-t-[3px] border-border bg-bg-primary">
	<div class="mx-auto max-w-[1200px] px-6">
		<!-- Columns -->
		<div class="grid grid-cols-2 gap-8 py-16 md:grid-cols-5 md:py-20">
			<!-- Brand column -->
			<div class="col-span-2 md:col-span-1">
				<a href={p('/')} class="font-display text-xl font-bold tracking-tight text-text-primary">
					BEING <span class="highlight">MUSLIM</span>
				</a>
				<p class="mt-4 text-sm leading-relaxed text-text-secondary">
					Empowering converts and beginners on their Islamic journey with clarity, warmth, and honesty.
				</p>
			</div>

			<!-- Link columns with monospace section headers -->
			{#each sections as section}
				<div>
					<h3 class="mono mb-4 border-b-[3px] border-border pb-2 text-text-primary">{section.title}</h3>
					<ul class="space-y-3">
						{#each section.links as link}
							<li>
								<a
									href={p(link.href)}
									class="text-sm text-text-secondary transition-colors hover:text-accent-primary"
								>
									{link.label}
								</a>
							</li>
						{/each}
					</ul>
				</div>
			{/each}
		</div>

		<!-- Bottom bar -->
		<div class="flex flex-col items-start justify-between gap-4 border-t-[3px] border-border py-6 sm:flex-row sm:items-center">
			<p class="mono text-text-secondary">&copy; {new Date().getFullYear()} THE BEING MUSLIM PROJECT</p>
			<div class="flex gap-6">
				<a href={p('/privacy')} class="mono text-text-secondary hover:text-text-primary">Privacy</a>
				<a href={p('/terms')} class="mono text-text-secondary hover:text-text-primary">Terms</a>
			</div>
		</div>
	</div>
</footer>
