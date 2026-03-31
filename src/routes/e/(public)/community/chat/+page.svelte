<script lang="ts">
	import { withPrefix } from '$lib/data/utils.js';
	import { chatChannels } from '$lib/data/mock.js';
	import { Hash, Send, Users, ArrowLeft, Smile, Paperclip } from 'lucide-svelte';

	const p = (href: string) => withPrefix('/e', href);

	let activeChannel = $state('General');
	let messageText = $state('');

	const messages = [
		{ author: 'Aminah', time: '10:32 AM', text: 'Salaam everyone! How is everyone doing today?', avatar: 'A' },
		{ author: 'Omar', time: '10:34 AM', text: 'Wa alaikum assalaam! Alhamdulillah, doing well. Just finished Fajr.', avatar: 'O' },
		{ author: 'Fatima', time: '10:35 AM', text: 'MashaAllah! I have a question about wudu — is it okay to wipe over socks?', avatar: 'F' },
		{ author: 'Imam Ahmad', time: '10:37 AM', text: 'Yes, wiping over socks (khuffayn) is permissible under certain conditions. You need to have put them on while in a state of wudu.', avatar: 'I' },
		{ author: 'Khalid', time: '10:38 AM', text: 'JazakAllah khair, Imam! That is very helpful.', avatar: 'K' },
		{ author: 'Sarah', time: '10:40 AM', text: 'Has anyone started the Foundations of Faith course? I am thinking about enrolling.', avatar: 'S' },
		{ author: 'Aminah', time: '10:42 AM', text: 'I did! It is wonderful. Dr. Tarsin explains everything so clearly. Highly recommend it.', avatar: 'A' }
	];

	const members = [
		{ name: 'Imam Ahmad', status: 'online' },
		{ name: 'Aminah R.', status: 'online' },
		{ name: 'Omar K.', status: 'online' },
		{ name: 'Fatima S.', status: 'online' },
		{ name: 'Khalid M.', status: 'away' },
		{ name: 'Sarah A.', status: 'away' }
	];
</script>

<svelte:head>
	<title>Live Chat — Being Muslim Community</title>
</svelte:head>

<div class="flex h-screen pt-16">
	<!-- Sidebar -->
	<aside class="hidden w-64 flex-col border-r border-border bg-white/60 backdrop-blur-xl md:flex">
		<div class="border-b border-border p-4">
			<a href={p('/community')} class="mb-3 inline-flex items-center gap-2 text-xs text-text-secondary transition-colors hover:text-accent-primary"><ArrowLeft class="h-3 w-3" /> Back to Community</a>
			<h2 class="font-display text-lg font-semibold text-text-primary">Channels</h2>
		</div>
		<div class="flex-1 overflow-y-auto p-2">
			{#each chatChannels as channel}
				<button onclick={() => (activeChannel = channel.name)} class="flex w-full items-center gap-2 rounded-full px-3 py-2 text-sm transition-colors {activeChannel === channel.name ? 'bg-accent-primary/10 font-medium text-accent-primary' : 'text-text-secondary hover:bg-white/60 hover:text-text-primary'}">
					<Hash class="h-4 w-4 shrink-0" />
					<span class="flex-1 truncate text-left">{channel.name}</span>
					{#if channel.unread > 0}<span class="flex h-5 min-w-5 items-center justify-center rounded-full bg-accent-primary px-1.5 text-xs font-bold text-white">{channel.unread}</span>{/if}
				</button>
			{/each}
		</div>
		<div class="border-t border-border p-4">
			<h3 class="mb-2 text-xs font-semibold uppercase tracking-wider text-text-secondary">Online Members</h3>
			<div class="space-y-2">
				{#each members as member}
					<div class="flex items-center gap-2">
						<div class="relative">
							<div class="flex h-6 w-6 items-center justify-center rounded-full bg-accent-primary/10 text-xs font-bold text-accent-primary">{member.name[0]}</div>
							<div class="absolute -bottom-0.5 -right-0.5 h-2.5 w-2.5 rounded-full border-2 border-white {member.status === 'online' ? 'bg-accent-primary' : 'bg-accent-gold'}"></div>
						</div>
						<span class="text-xs text-text-secondary">{member.name}</span>
					</div>
				{/each}
			</div>
		</div>
	</aside>

	<!-- Main Chat Area -->
	<div class="flex flex-1 flex-col">
		<div class="flex items-center gap-3 border-b border-border bg-white/60 px-4 py-3 backdrop-blur-xl sm:px-6">
			<Hash class="h-5 w-5 text-text-secondary" />
			<h2 class="font-display text-lg font-semibold text-text-primary">{activeChannel}</h2>
			<span class="flex items-center gap-1 text-xs text-text-secondary"><Users class="h-3.5 w-3.5" /> {chatChannels.find(c => c.name === activeChannel)?.members ?? 0} members</span>
		</div>

		<div class="flex-1 overflow-y-auto p-4 sm:p-6">
			<div class="space-y-4">
				{#each messages as message}
					<div class="flex gap-3">
						<div class="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent-primary/10 text-sm font-bold text-accent-primary">{message.avatar}</div>
						<div>
							<div class="flex items-center gap-2">
								<span class="text-sm font-semibold text-text-primary">{message.author}</span>
								<span class="text-xs text-text-secondary">{message.time}</span>
							</div>
							<p class="mt-1 text-sm text-text-secondary">{message.text}</p>
						</div>
					</div>
				{/each}
			</div>
		</div>

		<div class="border-t border-border bg-white/60 p-4 backdrop-blur-xl">
			<div class="flex items-center gap-2">
				<button class="glow rounded-full p-2 text-text-secondary transition-colors hover:bg-white/60 hover:text-text-primary" aria-label="Attach"><Paperclip class="h-5 w-5" /></button>
				<input type="text" bind:value={messageText} placeholder="Type a message..." class="flex-1 rounded-full border border-border bg-white/80 px-4 py-2.5 text-sm text-text-primary placeholder:text-text-secondary/60 focus:border-accent-primary focus:outline-none focus:ring-2 focus:ring-accent-primary/20" onkeydown={(e) => { if (e.key === 'Enter' && messageText.trim()) { messageText = ''; } }} />
				<button class="glow rounded-full p-2 text-text-secondary transition-colors hover:bg-white/60 hover:text-text-primary" aria-label="Emoji"><Smile class="h-5 w-5" /></button>
				<button class="glow rounded-full bg-accent-primary p-2.5 text-white" aria-label="Send"><Send class="h-4 w-4" /></button>
			</div>
		</div>
	</div>
</div>
