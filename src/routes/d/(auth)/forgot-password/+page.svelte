<script lang="ts">
	import { withPrefix } from '$lib/data/utils.js';
	import { Mail, ArrowLeft, CheckCircle } from 'lucide-svelte';

	const p = (href: string) => withPrefix('/d', href);

	let email = $state('');
	let submitted = $state(false);
</script>

<svelte:head>
	<title>Reset Password — Being Muslim</title>
</svelte:head>

<div class="w-full max-w-sm">
	{#if submitted}
		<div class="text-center">
			<CheckCircle class="mx-auto h-10 w-10 text-accent-green" />
			<h1 class="mt-4 font-display text-3xl font-light text-text-primary">Check Your Email</h1>
			<hr class="bronze-rule mx-auto my-4 w-10" />
			<p class="text-sm text-text-secondary">
				We sent a password reset link to <strong class="text-text-primary">{email}</strong>.
				Check your inbox and follow the instructions.
			</p>
			<a
				href={p('/login')}
				class="mt-8 inline-flex items-center gap-1 text-sm text-accent-primary hover:underline"
			>
				<ArrowLeft class="h-3 w-3" /> Back to Sign In
			</a>
		</div>
	{:else}
		<div class="text-center">
			<h1 class="font-display text-3xl font-light text-text-primary">Reset Password</h1>
			<hr class="bronze-rule mx-auto my-4 w-10" />
			<p class="text-sm text-text-secondary">
				Enter your email and we will send you a reset link.
			</p>
		</div>

		<form
			class="mt-8 space-y-5"
			onsubmit={(e) => {
				e.preventDefault();
				submitted = true;
			}}
		>
			<div>
				<label for="email" class="text-xs text-text-secondary">Email</label>
				<div class="relative mt-1.5">
					<Mail
						class="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-text-secondary/50"
					/>
					<input
						id="email"
						type="email"
						bind:value={email}
						placeholder="you@example.com"
						required
						class="w-full rounded-sm border border-border bg-surface py-2.5 pl-10 pr-4 text-sm text-text-primary placeholder:text-text-secondary/40 focus:border-accent-primary focus:outline-none"
					/>
				</div>
			</div>

			<button
				type="submit"
				class="w-full rounded-sm bg-accent-primary py-2.5 text-sm font-medium text-bg-primary transition-colors hover:bg-accent-hover"
			>
				Send Reset Link
			</button>
		</form>

		<p class="mt-8 text-center text-xs text-text-secondary">
			<a
				href={p('/login')}
				class="inline-flex items-center gap-1 text-accent-primary hover:underline"
			>
				<ArrowLeft class="h-3 w-3" /> Back to Sign In
			</a>
		</p>
	{/if}
</div>
