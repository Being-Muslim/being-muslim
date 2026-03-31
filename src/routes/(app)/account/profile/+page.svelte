<script lang="ts">
	import { Button } from '$lib/components/ui/button/index.js';
	import { Input } from '$lib/components/ui/input/index.js';
	import { Badge } from '$lib/components/ui/badge/index.js';
	import { Textarea } from '$lib/components/ui/textarea/index.js';
	import { Separator } from '$lib/components/ui/separator/index.js';
	import { Camera, CheckCircle, MapPin } from 'lucide-svelte';

	let fullName = $state('Aminah Rahman');
	let email = $state('aminah@example.com');
	let bio = $state('A seeker on the path. Took my shahada in 2024 and have been growing ever since. I love learning about Islamic history and building community.');
	let location = $state('Austin, Texas');
</script>

<svelte:head>
	<title>Profile - Being Muslim</title>
</svelte:head>

<div class="space-y-8">
	<div>
		<h1 class="font-display text-2xl font-bold text-text-primary sm:text-3xl">Profile</h1>
		<p class="mt-1 text-text-secondary">Manage your public profile and personal information.</p>
	</div>

	<form
		class="space-y-8"
		onsubmit={(e) => {
			e.preventDefault();
			// TODO: Save profile
		}}
	>
		<!-- Avatar -->
		<div class="flex items-center gap-6">
			<div class="relative">
				<div class="flex h-20 w-20 items-center justify-center rounded-full bg-accent-primary text-2xl font-bold text-text-cream">
					AR
				</div>
				<button
					type="button"
					class="absolute -bottom-1 -right-1 flex h-8 w-8 items-center justify-center rounded-full border-2 border-surface bg-secondary text-text-secondary transition-colors hover:bg-accent-primary hover:text-text-cream"
					aria-label="Upload avatar"
				>
					<Camera class="h-3.5 w-3.5" />
				</button>
			</div>
			<div>
				<p class="font-display text-lg font-semibold text-text-primary">{fullName}</p>
				<p class="text-sm text-text-secondary">Member since November 2024</p>
			</div>
		</div>

		<Separator />

		<!-- Form Fields -->
		<div class="space-y-6">
			<!-- Full Name -->
			<div class="space-y-2">
				<label for="fullName" class="text-sm font-medium text-text-primary">Full name</label>
				<Input
					id="fullName"
					type="text"
					bind:value={fullName}
					class="max-w-md"
				/>
			</div>

			<!-- Email (read-only) -->
			<div class="space-y-2">
				<label for="email" class="text-sm font-medium text-text-primary">Email</label>
				<div class="flex items-center gap-3">
					<Input
						id="email"
						type="email"
						value={email}
						readonly
						class="max-w-md bg-secondary/50 cursor-not-allowed"
					/>
					<Badge variant="green">
						{#snippet children()}
							<CheckCircle class="mr-1 h-3 w-3" />
							Verified
						{/snippet}
					</Badge>
				</div>
				<p class="text-xs text-text-secondary">Email cannot be changed here. Contact support if you need to update it.</p>
			</div>

			<!-- Bio -->
			<div class="space-y-2">
				<label for="bio" class="text-sm font-medium text-text-primary">Bio</label>
				<Textarea
					id="bio"
					bind:value={bio}
					placeholder="Tell us a little about yourself and your journey..."
					rows={4}
					class="max-w-lg"
				/>
				<p class="text-xs text-text-secondary">This will be visible on your community profile.</p>
			</div>

			<!-- Location -->
			<div class="space-y-2">
				<label for="location" class="text-sm font-medium text-text-primary">Location</label>
				<div class="relative max-w-md">
					<MapPin class="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-text-secondary" />
					<Input
						id="location"
						type="text"
						bind:value={location}
						placeholder="City, State"
						class="pl-10"
					/>
				</div>
			</div>
		</div>

		<Separator />

		<!-- Save -->
		<div class="flex items-center gap-3">
			<Button type="submit">
				{#snippet children()}
					Save Changes
				{/snippet}
			</Button>
			<Button variant="ghost" type="button">
				{#snippet children()}
					Cancel
				{/snippet}
			</Button>
		</div>
	</form>
</div>
