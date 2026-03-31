<script lang="ts">
	import { Camera, Save } from 'lucide-svelte';

	let name = $state('Aminah Rahman');
	let email = $state('aminah@example.com');
	let bio = $state('New Muslim, learning and growing every day. Passionate about sharing knowledge with others on the same path.');
	let location = $state('Portland, OR');
	let website = $state('');
</script>

<svelte:head>
	<title>Profile — Being Muslim</title>
</svelte:head>

<div>
	<h1 class="font-display text-2xl font-semibold text-text-primary sm:text-3xl">Profile</h1>
	<p class="mt-1 text-text-secondary">Manage your personal information.</p>

	<form class="mt-8 space-y-6" onsubmit={(e) => e.preventDefault()}>
		<!-- Avatar -->
		<div class="flex items-center gap-6">
			<div class="relative">
				<div class="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-accent-primary/20 to-accent-gold/20">
					<span class="font-display text-2xl font-bold text-accent-primary">AR</span>
				</div>
				<button type="button" class="absolute -bottom-1 -right-1 flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-accent-primary text-white transition-colors hover:bg-accent-primary/90" aria-label="Change photo">
					<Camera class="h-3.5 w-3.5" />
				</button>
			</div>
			<div>
				<p class="font-medium text-text-primary">{name}</p>
				<p class="text-sm text-text-secondary">{email}</p>
			</div>
		</div>

		<!-- Fields -->
		<div class="grid gap-6 sm:grid-cols-2">
			<div>
				<label for="name" class="block text-sm font-medium text-text-primary">Full Name</label>
				<input id="name" type="text" bind:value={name} class="mt-1.5 w-full rounded-full border border-border bg-white/80 px-4 py-2.5 text-sm text-text-primary focus:border-accent-primary focus:outline-none focus:ring-2 focus:ring-accent-primary/20" />
			</div>
			<div>
				<label for="email" class="block text-sm font-medium text-text-primary">Email</label>
				<input id="email" type="email" bind:value={email} class="mt-1.5 w-full rounded-full border border-border bg-white/80 px-4 py-2.5 text-sm text-text-primary focus:border-accent-primary focus:outline-none focus:ring-2 focus:ring-accent-primary/20" />
			</div>
			<div>
				<label for="location" class="block text-sm font-medium text-text-primary">Location</label>
				<input id="location" type="text" bind:value={location} class="mt-1.5 w-full rounded-full border border-border bg-white/80 px-4 py-2.5 text-sm text-text-primary focus:border-accent-primary focus:outline-none focus:ring-2 focus:ring-accent-primary/20" />
			</div>
			<div>
				<label for="website" class="block text-sm font-medium text-text-primary">Website</label>
				<input id="website" type="url" bind:value={website} placeholder="https://" class="mt-1.5 w-full rounded-full border border-border bg-white/80 px-4 py-2.5 text-sm text-text-primary placeholder:text-text-secondary/60 focus:border-accent-primary focus:outline-none focus:ring-2 focus:ring-accent-primary/20" />
			</div>
		</div>

		<div>
			<label for="bio" class="block text-sm font-medium text-text-primary">Bio</label>
			<textarea id="bio" bind:value={bio} rows="4" class="mt-1.5 w-full rounded-2xl border border-border bg-white/80 px-4 py-2.5 text-sm text-text-primary focus:border-accent-primary focus:outline-none focus:ring-2 focus:ring-accent-primary/20"></textarea>
		</div>

		<div class="flex justify-end">
			<button type="submit" class="glow inline-flex items-center gap-2 rounded-full bg-accent-primary px-6 py-2.5 text-sm font-medium text-white">
				<Save class="h-4 w-4" /> Save Changes
			</button>
		</div>
	</form>
</div>
