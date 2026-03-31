<script lang="ts">
	import { withPrefix } from '$lib/data/utils.js';
	import { ArrowLeft, Mail, CheckCircle } from 'lucide-svelte';

	const p = (href: string) => withPrefix('/e', href);

	let email = $state('');
	let submitted = $state(false);
</script>

<svelte:head>
	<title>Reset Password — Being Muslim</title>
</svelte:head>

<div class="w-full max-w-sm">
	{#if submitted}
		<div class="text-center">
			<div class="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-accent-primary/10">
				<CheckCircle class="h-8 w-8 text-accent-primary" />
			</div>
			<h1 class="mt-4 font-display text-2xl font-semibold text-text-primary">Check your email</h1>
			<p class="mt-2 text-sm text-text-secondary">
				We've sent a password reset link to <strong class="text-text-primary">{email}</strong>. Please check your inbox and follow the instructions.
			</p>
			<a href={p('/login')} class="mt-6 inline-flex items-center gap-2 text-sm font-medium text-accent-primary hover:underline">
				<ArrowLeft class="h-4 w-4" /> Back to Sign In
			</a>
		</div>
	{:else}
		<div class="text-center">
			<h1 class="font-display text-2xl font-semibold text-text-primary">Reset your password</h1>
			<p class="mt-2 text-sm text-text-secondary">Enter your email and we'll send you a reset link</p>
		</div>

		<form class="mt-8 space-y-4" onsubmit={(e) => { e.preventDefault(); submitted = true; }}>
			<div>
				<label for="email" class="block text-sm font-medium text-text-primary">Email</label>
				<div class="relative mt-1.5">
					<Mail class="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-text-secondary" />
					<input
						id="email"
						type="email"
						bind:value={email}
						placeholder="you@example.com"
						required
						class="w-full rounded-full border border-border bg-white/80 py-2.5 pl-10 pr-4 text-sm text-text-primary placeholder:text-text-secondary/60 focus:border-accent-primary focus:outline-none focus:ring-2 focus:ring-accent-primary/20"
					/>
				</div>
			</div>
			<button type="submit" class="glow w-full rounded-full bg-accent-primary py-2.5 text-sm font-medium text-white">
				Send Reset Link
			</button>
		</form>

		<p class="mt-6 text-center text-sm text-text-secondary">
			Remember your password?
			<a href={p('/login')} class="font-medium text-accent-primary hover:underline">Sign in</a>
		</p>
	{/if}
</div>
