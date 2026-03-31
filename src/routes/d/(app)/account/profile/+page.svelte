<script lang="ts">
	import { Camera, CheckCircle, MapPin } from 'lucide-svelte';

	let fullName = $state('Aminah Rahman');
	let email = $state('aminah@example.com');
	let bio = $state('A seeker of knowledge on the path of Islam. Converted in 2024.');
	let location = $state('Toronto, Canada');
	let saved = $state(false);

	function handleSave() {
		saved = true;
		setTimeout(() => (saved = false), 3000);
	}
</script>

<svelte:head>
	<title>Profile — Being Muslim</title>
</svelte:head>

<div>
	<span class="text-xs font-medium uppercase tracking-[0.2em] text-accent-primary">Account</span>
	<h1 class="mt-2 font-display text-3xl font-light">Profile</h1>
	<hr class="bronze-rule my-5 w-12" />

	{#if saved}
		<div
			class="mb-6 flex items-center gap-2 rounded-sm border border-accent-green/30 bg-accent-green/10 px-4 py-3 text-sm text-accent-green"
		>
			<CheckCircle class="h-4 w-4" /> Profile updated successfully.
		</div>
	{/if}

	<form
		class="space-y-6"
		onsubmit={(e) => {
			e.preventDefault();
			handleSave();
		}}
	>
		<!-- Avatar -->
		<div class="flex items-center gap-4">
			<div
				class="relative flex h-20 w-20 items-center justify-center rounded-sm bg-accent-primary/10 font-display text-2xl text-accent-primary"
			>
				A
				<button
					type="button"
					class="absolute -right-1 -bottom-1 flex h-7 w-7 items-center justify-center rounded-full bg-accent-primary text-bg-primary"
				>
					<Camera class="h-3.5 w-3.5" />
				</button>
			</div>
			<div>
				<p class="font-display text-lg font-light text-text-primary">{fullName}</p>
				<p class="text-xs text-text-secondary">{email}</p>
			</div>
		</div>

		<hr class="bronze-rule" />

		<!-- Full Name -->
		<div>
			<label for="name" class="text-xs text-text-secondary">Full Name</label>
			<input
				id="name"
				type="text"
				bind:value={fullName}
				class="mt-1.5 w-full rounded-sm border border-border bg-surface px-4 py-2.5 text-sm text-text-primary focus:border-accent-primary focus:outline-none"
			/>
		</div>

		<!-- Email -->
		<div>
			<label for="profile-email" class="text-xs text-text-secondary">Email</label>
			<input
				id="profile-email"
				type="email"
				bind:value={email}
				class="mt-1.5 w-full rounded-sm border border-border bg-surface px-4 py-2.5 text-sm text-text-primary focus:border-accent-primary focus:outline-none"
			/>
		</div>

		<!-- Location -->
		<div>
			<label for="location" class="text-xs text-text-secondary">Location</label>
			<div class="relative mt-1.5">
				<MapPin
					class="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-text-secondary/50"
				/>
				<input
					id="location"
					type="text"
					bind:value={location}
					class="w-full rounded-sm border border-border bg-surface py-2.5 pl-10 pr-4 text-sm text-text-primary focus:border-accent-primary focus:outline-none"
				/>
			</div>
		</div>

		<!-- Bio -->
		<div>
			<label for="bio" class="text-xs text-text-secondary">Bio</label>
			<textarea
				id="bio"
				bind:value={bio}
				rows="3"
				class="mt-1.5 w-full rounded-sm border border-border bg-surface px-4 py-2.5 text-sm text-text-primary focus:border-accent-primary focus:outline-none"
			></textarea>
		</div>

		<button
			type="submit"
			class="rounded-sm bg-accent-primary px-6 py-2.5 text-sm font-medium text-bg-primary transition-colors hover:bg-accent-hover"
		>
			Save Changes
		</button>
	</form>
</div>
