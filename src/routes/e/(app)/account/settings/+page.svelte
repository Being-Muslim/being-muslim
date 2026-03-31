<script lang="ts">
	import { withPrefix } from '$lib/data/utils.js';
	import { Lock, Bell, Shield, Trash2, Eye, EyeOff } from 'lucide-svelte';

	const p = (href: string) => withPrefix('/e', href);

	let currentPassword = $state('');
	let newPassword = $state('');
	let confirmPassword = $state('');
	let showCurrentPassword = $state(false);
	let showNewPassword = $state(false);

	let emailNotifications = $state(true);
	let weeklyDigest = $state(true);
	let communityUpdates = $state(false);
	let marketingEmails = $state(false);
</script>

<svelte:head>
	<title>Settings — Being Muslim</title>
</svelte:head>

<div>
	<h1 class="font-display text-2xl font-semibold text-text-primary sm:text-3xl">Settings</h1>
	<p class="mt-1 text-text-secondary">Manage your account settings and preferences.</p>

	<!-- Change Password -->
	<div class="glass-panel mt-8 p-6">
		<div class="flex items-center gap-3">
			<Lock class="h-5 w-5 text-accent-primary" />
			<h2 class="font-display text-lg font-semibold text-text-primary">Change Password</h2>
		</div>
		<form class="mt-6 space-y-4" onsubmit={(e) => e.preventDefault()}>
			<div>
				<label for="current" class="block text-sm font-medium text-text-primary">Current Password</label>
				<div class="relative mt-1.5">
					<input id="current" type={showCurrentPassword ? 'text' : 'password'} bind:value={currentPassword} class="w-full rounded-full border border-border bg-white/80 px-4 py-2.5 text-sm text-text-primary focus:border-accent-primary focus:outline-none focus:ring-2 focus:ring-accent-primary/20" />
					<button type="button" onclick={() => showCurrentPassword = !showCurrentPassword} class="absolute right-3 top-1/2 -translate-y-1/2 text-text-secondary hover:text-text-primary">
						{#if showCurrentPassword}<EyeOff class="h-4 w-4" />{:else}<Eye class="h-4 w-4" />{/if}
					</button>
				</div>
			</div>
			<div>
				<label for="new" class="block text-sm font-medium text-text-primary">New Password</label>
				<div class="relative mt-1.5">
					<input id="new" type={showNewPassword ? 'text' : 'password'} bind:value={newPassword} class="w-full rounded-full border border-border bg-white/80 px-4 py-2.5 text-sm text-text-primary focus:border-accent-primary focus:outline-none focus:ring-2 focus:ring-accent-primary/20" />
					<button type="button" onclick={() => showNewPassword = !showNewPassword} class="absolute right-3 top-1/2 -translate-y-1/2 text-text-secondary hover:text-text-primary">
						{#if showNewPassword}<EyeOff class="h-4 w-4" />{:else}<Eye class="h-4 w-4" />{/if}
					</button>
				</div>
			</div>
			<div>
				<label for="confirm" class="block text-sm font-medium text-text-primary">Confirm New Password</label>
				<input id="confirm" type="password" bind:value={confirmPassword} class="mt-1.5 w-full rounded-full border border-border bg-white/80 px-4 py-2.5 text-sm text-text-primary focus:border-accent-primary focus:outline-none focus:ring-2 focus:ring-accent-primary/20" />
			</div>
			<button type="submit" class="glow rounded-full bg-accent-primary px-6 py-2.5 text-sm font-medium text-white">
				Update Password
			</button>
		</form>
	</div>

	<!-- Notifications -->
	<div class="glass-panel mt-6 p-6">
		<div class="flex items-center gap-3">
			<Bell class="h-5 w-5 text-accent-primary" />
			<h2 class="font-display text-lg font-semibold text-text-primary">Notifications</h2>
		</div>
		<div class="mt-6 space-y-4">
			{#each [
				{ label: 'Email Notifications', desc: 'Receive important updates via email', value: emailNotifications, toggle: () => emailNotifications = !emailNotifications },
				{ label: 'Weekly Digest', desc: 'Get a summary of new content each week', value: weeklyDigest, toggle: () => weeklyDigest = !weeklyDigest },
				{ label: 'Community Updates', desc: 'Notifications about forum replies and mentions', value: communityUpdates, toggle: () => communityUpdates = !communityUpdates },
				{ label: 'Marketing Emails', desc: 'Product announcements and promotional offers', value: marketingEmails, toggle: () => marketingEmails = !marketingEmails }
			] as setting}
				<div class="flex items-center justify-between">
					<div>
						<p class="text-sm font-medium text-text-primary">{setting.label}</p>
						<p class="text-xs text-text-secondary">{setting.desc}</p>
					</div>
					<button
						onclick={setting.toggle}
						class="relative h-6 w-11 rounded-full transition-colors {setting.value ? 'bg-accent-primary' : 'bg-border'}"
						role="switch"
						aria-checked={setting.value}
					>
						<span class="absolute top-0.5 left-0.5 h-5 w-5 rounded-full bg-white shadow-sm transition-transform {setting.value ? 'translate-x-5' : 'translate-x-0'}"></span>
					</button>
				</div>
			{/each}
		</div>
	</div>

	<!-- Connected Accounts -->
	<div class="glass-panel mt-6 p-6">
		<div class="flex items-center gap-3">
			<Shield class="h-5 w-5 text-accent-primary" />
			<h2 class="font-display text-lg font-semibold text-text-primary">Connected Accounts</h2>
		</div>
		<div class="mt-6 space-y-4">
			<div class="flex items-center justify-between">
				<div class="flex items-center gap-3">
					<div class="flex h-9 w-9 items-center justify-center rounded-lg bg-accent-primary/10 text-sm font-semibold text-accent-primary">G</div>
					<div>
						<p class="text-sm font-medium text-text-primary">Google</p>
						<p class="text-xs text-text-secondary">aminah@gmail.com</p>
					</div>
				</div>
				<button class="rounded-full border border-border px-3 py-1.5 text-xs font-medium text-text-secondary hover:border-red-300 hover:text-red-600">Disconnect</button>
			</div>
		</div>
	</div>

	<!-- Danger Zone -->
	<div class="mt-6 rounded-2xl border border-red-200 bg-red-50/50 p-6">
		<div class="flex items-center gap-3">
			<Trash2 class="h-5 w-5 text-red-500" />
			<h2 class="font-display text-lg font-semibold text-red-700">Danger Zone</h2>
		</div>
		<p class="mt-2 text-sm text-red-600/70">Once you delete your account, there is no going back. Please be certain.</p>
		<button class="mt-4 rounded-full border border-red-300 px-5 py-2 text-sm font-medium text-red-600 transition-colors hover:bg-red-100">
			Delete Account
		</button>
	</div>
</div>
