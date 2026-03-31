<script lang="ts">
	import { withPrefix } from '$lib/data/utils.js';
	import { Eye, EyeOff, Mail, Lock, User, Check } from 'lucide-svelte';

	const p = (href: string) => withPrefix('/e', href);

	let name = $state('');
	let email = $state('');
	let password = $state('');
	let showPassword = $state(false);
	let agreeToTerms = $state(false);

	const passwordChecks = $derived({
		length: password.length >= 8,
		uppercase: /[A-Z]/.test(password),
		lowercase: /[a-z]/.test(password),
		number: /\d/.test(password)
	});

	const passwordStrength = $derived(Object.values(passwordChecks).filter(Boolean).length);
</script>

<svelte:head>
	<title>Create Account — Being Muslim</title>
</svelte:head>

<div class="w-full max-w-sm">
	<div class="text-center">
		<h1 class="font-display text-2xl font-semibold text-text-primary">Begin your journey</h1>
		<p class="mt-2 text-sm text-text-secondary">Create a free account to get started</p>
	</div>

	<form class="mt-8 space-y-4" onsubmit={(e) => e.preventDefault()}>
		<div>
			<label for="name" class="block text-sm font-medium text-text-primary">Full Name</label>
			<div class="relative mt-1.5">
				<User class="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-text-secondary" />
				<input id="name" type="text" bind:value={name} placeholder="Your name" required class="w-full rounded-full border border-border bg-white/80 py-2.5 pl-10 pr-4 text-sm text-text-primary placeholder:text-text-secondary/60 focus:border-accent-primary focus:outline-none focus:ring-2 focus:ring-accent-primary/20" />
			</div>
		</div>

		<div>
			<label for="email" class="block text-sm font-medium text-text-primary">Email</label>
			<div class="relative mt-1.5">
				<Mail class="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-text-secondary" />
				<input id="email" type="email" bind:value={email} placeholder="you@example.com" required class="w-full rounded-full border border-border bg-white/80 py-2.5 pl-10 pr-4 text-sm text-text-primary placeholder:text-text-secondary/60 focus:border-accent-primary focus:outline-none focus:ring-2 focus:ring-accent-primary/20" />
			</div>
		</div>

		<div>
			<label for="password" class="block text-sm font-medium text-text-primary">Password</label>
			<div class="relative mt-1.5">
				<Lock class="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-text-secondary" />
				<input id="password" type={showPassword ? 'text' : 'password'} bind:value={password} placeholder="Create a password" required class="w-full rounded-full border border-border bg-white/80 py-2.5 pl-10 pr-10 text-sm text-text-primary placeholder:text-text-secondary/60 focus:border-accent-primary focus:outline-none focus:ring-2 focus:ring-accent-primary/20" />
				<button type="button" onclick={() => (showPassword = !showPassword)} class="absolute right-3 top-1/2 -translate-y-1/2 text-text-secondary hover:text-text-primary" aria-label="Toggle password">
					{#if showPassword}<EyeOff class="h-4 w-4" />{:else}<Eye class="h-4 w-4" />{/if}
				</button>
			</div>

			{#if password.length > 0}
				<div class="mt-3">
					<div class="flex gap-1">
						{#each Array(4) as _, i}
							<div class="h-1 flex-1 rounded-full {i < passwordStrength ? (passwordStrength <= 2 ? 'bg-accent-gold' : 'bg-accent-primary') : 'bg-border'}"></div>
						{/each}
					</div>
					<div class="mt-2 grid grid-cols-2 gap-1">
						<div class="flex items-center gap-1.5 text-xs {passwordChecks.length ? 'text-accent-primary' : 'text-text-secondary'}"><Check class="h-3 w-3" /> 8+ characters</div>
						<div class="flex items-center gap-1.5 text-xs {passwordChecks.uppercase ? 'text-accent-primary' : 'text-text-secondary'}"><Check class="h-3 w-3" /> Uppercase</div>
						<div class="flex items-center gap-1.5 text-xs {passwordChecks.lowercase ? 'text-accent-primary' : 'text-text-secondary'}"><Check class="h-3 w-3" /> Lowercase</div>
						<div class="flex items-center gap-1.5 text-xs {passwordChecks.number ? 'text-accent-primary' : 'text-text-secondary'}"><Check class="h-3 w-3" /> Number</div>
					</div>
				</div>
			{/if}
		</div>

		<label class="flex items-start gap-2">
			<input type="checkbox" bind:checked={agreeToTerms} class="mt-1 h-4 w-4 rounded border-border text-accent-primary focus:ring-accent-primary" />
			<span class="text-xs text-text-secondary">I agree to the <a href="/terms" class="text-accent-primary hover:underline">Terms of Service</a> and <a href="/privacy" class="text-accent-primary hover:underline">Privacy Policy</a></span>
		</label>

		<button type="submit" disabled={!agreeToTerms} class="glow w-full rounded-full bg-accent-primary py-2.5 text-sm font-medium text-white disabled:opacity-50">Create Account</button>
	</form>

	<div class="mt-6 flex items-center gap-3">
		<div class="h-px flex-1 bg-border"></div>
		<span class="text-xs text-text-secondary">or sign up with</span>
		<div class="h-px flex-1 bg-border"></div>
	</div>

	<div class="mt-6 grid grid-cols-2 gap-3">
		<button class="glow flex items-center justify-center gap-2 rounded-full border border-border bg-white/80 py-2.5 text-sm font-medium text-text-primary">
			<svg class="h-4 w-4" viewBox="0 0 24 24"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>
			Google
		</button>
		<button class="glow flex items-center justify-center gap-2 rounded-full border border-border bg-white/80 py-2.5 text-sm font-medium text-text-primary">
			<svg class="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z"/></svg>
			GitHub
		</button>
	</div>

	<p class="mt-8 text-center text-sm text-text-secondary">
		Already have an account?
		<a href={p('/login')} class="font-medium text-accent-primary hover:underline">Sign in</a>
	</p>
</div>
