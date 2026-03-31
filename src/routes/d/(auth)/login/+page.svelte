<script lang="ts">
	import { withPrefix } from '$lib/data/utils.js';
	import { Eye, EyeOff, Mail, Lock } from 'lucide-svelte';

	const p = (href: string) => withPrefix('/d', href);

	let email = $state('');
	let password = $state('');
	let showPassword = $state(false);
</script>

<svelte:head>
	<title>Sign In — Being Muslim</title>
</svelte:head>

<div class="w-full max-w-sm">
	<div class="text-center">
		<h1 class="font-display text-3xl font-light text-text-primary">Welcome Back</h1>
		<hr class="bronze-rule mx-auto my-4 w-10" />
		<p class="text-sm text-text-secondary">Sign in to continue your journey.</p>
	</div>

	<form
		class="mt-8 space-y-5"
		onsubmit={(e) => {
			e.preventDefault();
		}}
	>
		<!-- Email -->
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

		<!-- Password -->
		<div>
			<div class="flex items-center justify-between">
				<label for="password" class="text-xs text-text-secondary">Password</label>
				<a
					href={p('/forgot-password')}
					class="text-xs text-accent-primary hover:underline"
				>
					Forgot password?
				</a>
			</div>
			<div class="relative mt-1.5">
				<Lock
					class="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-text-secondary/50"
				/>
				<input
					id="password"
					type={showPassword ? 'text' : 'password'}
					bind:value={password}
					placeholder="Enter your password"
					required
					class="w-full rounded-sm border border-border bg-surface py-2.5 pl-10 pr-10 text-sm text-text-primary placeholder:text-text-secondary/40 focus:border-accent-primary focus:outline-none"
				/>
				<button
					type="button"
					onclick={() => (showPassword = !showPassword)}
					class="absolute right-3 top-1/2 -translate-y-1/2 text-text-secondary/50 hover:text-text-secondary"
				>
					{#if showPassword}<EyeOff class="h-4 w-4" />{:else}<Eye
							class="h-4 w-4"
						/>{/if}
				</button>
			</div>
		</div>

		<!-- Submit -->
		<button
			type="submit"
			class="w-full rounded-sm bg-accent-primary py-2.5 text-sm font-medium text-bg-primary transition-colors hover:bg-accent-hover"
		>
			Sign In
		</button>
	</form>

	<hr class="bronze-rule my-6" />

	<!-- Social Login -->
	<div class="space-y-3">
		<button
			class="flex w-full items-center justify-center gap-2 rounded-sm border border-border py-2.5 text-sm text-text-secondary transition-colors hover:border-accent-primary hover:text-text-primary"
		>
			Continue with Google
		</button>
		<button
			class="flex w-full items-center justify-center gap-2 rounded-sm border border-border py-2.5 text-sm text-text-secondary transition-colors hover:border-accent-primary hover:text-text-primary"
		>
			Continue with Facebook
		</button>
	</div>

	<p class="mt-8 text-center text-xs text-text-secondary">
		Don't have an account?
		<a href={p('/register')} class="text-accent-primary hover:underline">Create one</a>
	</p>
</div>
