<script lang="ts">
	import { Lock, Bell, Link2, AlertTriangle, Eye, EyeOff, CheckCircle } from 'lucide-svelte';

	let currentPassword = $state('');
	let newPassword = $state('');
	let confirmPassword = $state('');
	let showPasswords = $state(false);

	let emailNotifications = $state(true);
	let communityDigest = $state(true);
	let courseReminders = $state(true);

	let saved = $state(false);

	function handleSave() {
		saved = true;
		setTimeout(() => (saved = false), 3000);
	}
</script>

<svelte:head>
	<title>Settings — Being Muslim</title>
</svelte:head>

<div>
	<span class="text-xs font-medium uppercase tracking-[0.2em] text-accent-primary">Account</span>
	<h1 class="mt-2 font-display text-3xl font-light">Settings</h1>
	<hr class="bronze-rule my-5 w-12" />

	{#if saved}
		<div
			class="mb-6 flex items-center gap-2 rounded-sm border border-accent-green/30 bg-accent-green/10 px-4 py-3 text-sm text-accent-green"
		>
			<CheckCircle class="h-4 w-4" /> Settings saved.
		</div>
	{/if}

	<!-- Password -->
	<section class="rounded-sm border border-border bg-surface p-6">
		<div class="flex items-center gap-2">
			<Lock class="h-4 w-4 text-accent-primary" />
			<h2 class="font-display text-lg font-light text-text-primary">Change Password</h2>
		</div>
		<hr class="bronze-rule my-4 w-10" />
		<form
			class="space-y-4"
			onsubmit={(e) => {
				e.preventDefault();
				handleSave();
			}}
		>
			<div>
				<label for="current-pw" class="text-xs text-text-secondary">Current Password</label>
				<input
					id="current-pw"
					type={showPasswords ? 'text' : 'password'}
					bind:value={currentPassword}
					class="mt-1.5 w-full rounded-sm border border-border bg-bg-primary px-4 py-2.5 text-sm text-text-primary focus:border-accent-primary focus:outline-none"
				/>
			</div>
			<div>
				<label for="new-pw" class="text-xs text-text-secondary">New Password</label>
				<input
					id="new-pw"
					type={showPasswords ? 'text' : 'password'}
					bind:value={newPassword}
					class="mt-1.5 w-full rounded-sm border border-border bg-bg-primary px-4 py-2.5 text-sm text-text-primary focus:border-accent-primary focus:outline-none"
				/>
			</div>
			<div>
				<label for="confirm-pw" class="text-xs text-text-secondary">Confirm New Password</label>
				<input
					id="confirm-pw"
					type={showPasswords ? 'text' : 'password'}
					bind:value={confirmPassword}
					class="mt-1.5 w-full rounded-sm border border-border bg-bg-primary px-4 py-2.5 text-sm text-text-primary focus:border-accent-primary focus:outline-none"
				/>
			</div>
			<div class="flex items-center gap-4">
				<button
					type="submit"
					class="rounded-sm bg-accent-primary px-5 py-2 text-sm text-bg-primary hover:bg-accent-hover"
				>
					Update Password
				</button>
				<button
					type="button"
					onclick={() => (showPasswords = !showPasswords)}
					class="flex items-center gap-1 text-xs text-text-secondary hover:text-text-primary"
				>
					{#if showPasswords}<EyeOff class="h-3 w-3" /> Hide{:else}<Eye class="h-3 w-3" />
						Show{/if}
				</button>
			</div>
		</form>
	</section>

	<!-- Notifications -->
	<section class="mt-6 rounded-sm border border-border bg-surface p-6">
		<div class="flex items-center gap-2">
			<Bell class="h-4 w-4 text-accent-primary" />
			<h2 class="font-display text-lg font-light text-text-primary">Notifications</h2>
		</div>
		<hr class="bronze-rule my-4 w-10" />
		<div class="space-y-4">
			{#each [
				{
					label: 'Email Notifications',
					desc: 'Receive updates via email',
					get: () => emailNotifications,
					set: (v: boolean) => (emailNotifications = v)
				},
				{
					label: 'Community Digest',
					desc: 'Weekly summary of community activity',
					get: () => communityDigest,
					set: (v: boolean) => (communityDigest = v)
				},
				{
					label: 'Course Reminders',
					desc: 'Reminders to continue your courses',
					get: () => courseReminders,
					set: (v: boolean) => (courseReminders = v)
				}
			] as item}
				<div class="flex items-center justify-between">
					<div>
						<p class="text-sm text-text-primary">{item.label}</p>
						<p class="text-xs text-text-secondary">{item.desc}</p>
					</div>
					<button
						onclick={() => item.set(!item.get())}
						class="h-6 w-11 rounded-full transition-colors {item.get()
							? 'bg-accent-primary'
							: 'bg-border'}"
					>
						<div
							class="h-5 w-5 rounded-full bg-white transition-transform {item.get()
								? 'translate-x-5'
								: 'translate-x-0.5'}"
						></div>
					</button>
				</div>
			{/each}
		</div>
	</section>

	<!-- Danger Zone -->
	<section class="mt-6 rounded-sm border border-destructive/30 bg-surface p-6">
		<div class="flex items-center gap-2">
			<AlertTriangle class="h-4 w-4 text-destructive" />
			<h2 class="font-display text-lg font-light text-destructive">Danger Zone</h2>
		</div>
		<hr class="bronze-rule my-4 w-10" />
		<p class="text-sm text-text-secondary">
			Permanently delete your account and all associated data. This action cannot be undone.
		</p>
		<button
			class="mt-4 rounded-sm border border-destructive px-5 py-2 text-sm text-destructive transition-colors hover:bg-destructive hover:text-white"
		>
			Delete Account
		</button>
	</section>
</div>
