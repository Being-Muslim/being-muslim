<script lang="ts">
	import { Button } from '$lib/components/ui/button/index.js';
	import { Input } from '$lib/components/ui/input/index.js';
	import { Separator } from '$lib/components/ui/separator/index.js';
	import { Lock, Bell, Link2, AlertTriangle, Eye, EyeOff, Check } from 'lucide-svelte';

	// Change Password
	let currentPassword = $state('');
	let newPassword = $state('');
	let confirmNewPassword = $state('');
	let showCurrentPassword = $state(false);
	let showNewPassword = $state(false);

	// Notifications
	let weeklyDigest = $state(true);
	let courseUpdates = $state(true);
	let communityReplies = $state(true);
	let promotions = $state(false);

	// Connected Accounts
	const connectedAccounts = [
		{ provider: 'Google', connected: true, email: 'aminah@gmail.com' },
		{ provider: 'Apple', connected: false, email: '' }
	];
</script>

<svelte:head>
	<title>Settings - Being Muslim</title>
</svelte:head>

<div class="space-y-8">
	<div>
		<h1 class="font-display text-2xl font-bold text-text-primary sm:text-3xl">Settings</h1>
		<p class="mt-1 text-text-secondary">Manage your account preferences and security.</p>
	</div>

	<!-- Change Password Section -->
	<div class="rounded-xl border border-border bg-surface p-6">
		<div class="flex items-center gap-3 mb-5">
			<div class="flex h-9 w-9 items-center justify-center rounded-lg bg-accent-primary/10">
				<Lock class="h-4 w-4 text-accent-primary" />
			</div>
			<div>
				<h2 class="font-display text-lg font-semibold text-text-primary">Change Password</h2>
				<p class="text-sm text-text-secondary">Update your password to keep your account secure.</p>
			</div>
		</div>

		<form
			class="max-w-md space-y-4"
			onsubmit={(e) => {
				e.preventDefault();
				// TODO: Handle password change
			}}
		>
			<!-- Current Password -->
			<div class="space-y-2">
				<label for="currentPassword" class="text-sm font-medium text-text-primary">Current password</label>
				<div class="relative">
					<Input
						id="currentPassword"
						type={showCurrentPassword ? 'text' : 'password'}
						bind:value={currentPassword}
						placeholder="Enter current password"
						class="pr-10"
					/>
					<button
						type="button"
						onclick={() => (showCurrentPassword = !showCurrentPassword)}
						class="absolute right-3 top-1/2 -translate-y-1/2 text-text-secondary hover:text-text-primary"
						aria-label={showCurrentPassword ? 'Hide password' : 'Show password'}
					>
						{#if showCurrentPassword}
							<EyeOff class="h-4 w-4" />
						{:else}
							<Eye class="h-4 w-4" />
						{/if}
					</button>
				</div>
			</div>

			<!-- New Password -->
			<div class="space-y-2">
				<label for="newPassword" class="text-sm font-medium text-text-primary">New password</label>
				<div class="relative">
					<Input
						id="newPassword"
						type={showNewPassword ? 'text' : 'password'}
						bind:value={newPassword}
						placeholder="Enter new password"
						class="pr-10"
					/>
					<button
						type="button"
						onclick={() => (showNewPassword = !showNewPassword)}
						class="absolute right-3 top-1/2 -translate-y-1/2 text-text-secondary hover:text-text-primary"
						aria-label={showNewPassword ? 'Hide password' : 'Show password'}
					>
						{#if showNewPassword}
							<EyeOff class="h-4 w-4" />
						{:else}
							<Eye class="h-4 w-4" />
						{/if}
					</button>
				</div>
			</div>

			<!-- Confirm New Password -->
			<div class="space-y-2">
				<label for="confirmNewPassword" class="text-sm font-medium text-text-primary">Confirm new password</label>
				<Input
					id="confirmNewPassword"
					type="password"
					bind:value={confirmNewPassword}
					placeholder="Confirm new password"
				/>
				{#if confirmNewPassword.length > 0 && newPassword !== confirmNewPassword}
					<p class="text-xs text-destructive">Passwords do not match</p>
				{/if}
			</div>

			<Button type="submit">
				{#snippet children()}
					Update Password
				{/snippet}
			</Button>
		</form>
	</div>

	<!-- Email Notifications Section -->
	<div class="rounded-xl border border-border bg-surface p-6">
		<div class="flex items-center gap-3 mb-5">
			<div class="flex h-9 w-9 items-center justify-center rounded-lg bg-accent-gold/10">
				<Bell class="h-4 w-4 text-accent-gold" />
			</div>
			<div>
				<h2 class="font-display text-lg font-semibold text-text-primary">Email Notifications</h2>
				<p class="text-sm text-text-secondary">Choose what updates you'd like to receive.</p>
			</div>
		</div>

		<div class="space-y-4">
			<label class="flex items-center justify-between cursor-pointer rounded-lg p-3 hover:bg-secondary/50 transition-colors">
				<div>
					<p class="text-sm font-medium text-text-primary">Weekly digest</p>
					<p class="text-xs text-text-secondary">A summary of new articles, courses, and community highlights.</p>
				</div>
				<input
					type="checkbox"
					bind:checked={weeklyDigest}
					class="h-4 w-4 rounded border-border text-accent-primary focus:ring-accent-primary"
				/>
			</label>

			<Separator />

			<label class="flex items-center justify-between cursor-pointer rounded-lg p-3 hover:bg-secondary/50 transition-colors">
				<div>
					<p class="text-sm font-medium text-text-primary">Course updates</p>
					<p class="text-xs text-text-secondary">New lessons, course completions, and learning reminders.</p>
				</div>
				<input
					type="checkbox"
					bind:checked={courseUpdates}
					class="h-4 w-4 rounded border-border text-accent-primary focus:ring-accent-primary"
				/>
			</label>

			<Separator />

			<label class="flex items-center justify-between cursor-pointer rounded-lg p-3 hover:bg-secondary/50 transition-colors">
				<div>
					<p class="text-sm font-medium text-text-primary">Community replies</p>
					<p class="text-xs text-text-secondary">Notifications when someone replies to your posts or mentions you.</p>
				</div>
				<input
					type="checkbox"
					bind:checked={communityReplies}
					class="h-4 w-4 rounded border-border text-accent-primary focus:ring-accent-primary"
				/>
			</label>

			<Separator />

			<label class="flex items-center justify-between cursor-pointer rounded-lg p-3 hover:bg-secondary/50 transition-colors">
				<div>
					<p class="text-sm font-medium text-text-primary">Promotions</p>
					<p class="text-xs text-text-secondary">Sales, new product launches, and special offers.</p>
				</div>
				<input
					type="checkbox"
					bind:checked={promotions}
					class="h-4 w-4 rounded border-border text-accent-primary focus:ring-accent-primary"
				/>
			</label>
		</div>
	</div>

	<!-- Connected Accounts Section -->
	<div class="rounded-xl border border-border bg-surface p-6">
		<div class="flex items-center gap-3 mb-5">
			<div class="flex h-9 w-9 items-center justify-center rounded-lg bg-accent-green/10">
				<Link2 class="h-4 w-4 text-accent-green" />
			</div>
			<div>
				<h2 class="font-display text-lg font-semibold text-text-primary">Connected Accounts</h2>
				<p class="text-sm text-text-secondary">Manage your social login connections.</p>
			</div>
		</div>

		<div class="space-y-3">
			{#each connectedAccounts as account}
				<div class="flex items-center justify-between rounded-lg border border-border p-4">
					<div class="flex items-center gap-3">
						{#if account.provider === 'Google'}
							<svg class="h-5 w-5" viewBox="0 0 24 24">
								<path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4" />
								<path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
								<path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
								<path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
							</svg>
						{:else}
							<svg class="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
								<path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
							</svg>
						{/if}
						<div>
							<p class="text-sm font-medium text-text-primary">{account.provider}</p>
							{#if account.connected}
								<p class="text-xs text-text-secondary">{account.email}</p>
							{/if}
						</div>
					</div>
					{#if account.connected}
						<div class="flex items-center gap-2">
							<span class="flex items-center gap-1 text-xs font-medium text-accent-green">
								<Check class="h-3 w-3" />
								Connected
							</span>
							<Button variant="ghost" size="sm">
								{#snippet children()}
									Disconnect
								{/snippet}
							</Button>
						</div>
					{:else}
						<Button variant="outline" size="sm">
							{#snippet children()}
								Connect
							{/snippet}
						</Button>
					{/if}
				</div>
			{/each}
		</div>
	</div>

	<!-- Danger Zone -->
	<div class="rounded-xl border border-destructive/30 bg-destructive/5 p-6">
		<div class="flex items-center gap-3 mb-4">
			<div class="flex h-9 w-9 items-center justify-center rounded-lg bg-destructive/10">
				<AlertTriangle class="h-4 w-4 text-destructive" />
			</div>
			<div>
				<h2 class="font-display text-lg font-semibold text-text-primary">Danger Zone</h2>
				<p class="text-sm text-text-secondary">Irreversible and destructive actions.</p>
			</div>
		</div>

		<div class="rounded-lg border border-destructive/20 bg-surface p-4">
			<div class="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
				<div>
					<p class="text-sm font-medium text-text-primary">Delete your account</p>
					<p class="text-xs text-text-secondary">
						Permanently remove your account and all associated data. This action cannot be undone.
					</p>
				</div>
				<Button variant="destructive" size="sm" class="shrink-0">
					{#snippet children()}
						Delete Account
					{/snippet}
				</Button>
			</div>
		</div>
	</div>
</div>
