<script lang="ts">
	import { MessageCircle, X, Send, Bot } from 'lucide-svelte';

	let open = $state(false);

	interface Message {
		role: 'assistant' | 'user';
		text: string;
	}

	const messages: Message[] = [
		{
			role: 'assistant',
			text: "Salaam! I'm the Being Muslim AI assistant. I can help you find articles, answer questions about Islamic practice, or guide you to the right resource. How can I help you today?"
		},
		{ role: 'user', text: 'How do I start learning to pray?' },
		{
			role: 'assistant',
			text: "Great question! I'd recommend starting with our step-by-step prayer guide. It walks you through wudu (ablution) and each movement of the prayer with clear instructions. Would you like me to link you to it?"
		}
	];

	let input = $state('');

	function handleSend() {
		if (!input.trim()) return;
		input = '';
	}
</script>

<!-- Floating Chat Button -->
{#if !open}
	<button
		onclick={() => (open = true)}
		class="fixed right-6 bottom-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-accent-primary text-primary-foreground shadow-lg transition-transform hover:scale-105 active:scale-95"
		aria-label="Open chat"
	>
		<MessageCircle class="h-6 w-6" />
		<!-- Pulse ring -->
		<span class="absolute inset-0 animate-ping rounded-full bg-accent-primary/30"></span>
	</button>
{/if}

<!-- Chat Panel -->
{#if open}
	<div class="fixed right-6 bottom-6 z-50 flex h-[500px] w-[400px] max-w-[calc(100vw-3rem)] flex-col overflow-hidden rounded-2xl border border-border bg-surface shadow-2xl">
		<!-- Header -->
		<div class="flex items-center justify-between border-b border-border bg-accent-primary px-4 py-3">
			<div class="flex items-center gap-2">
				<Bot class="h-5 w-5 text-primary-foreground" />
				<span class="text-sm font-semibold text-primary-foreground">Ask Being Muslim</span>
			</div>
			<button
				onclick={() => (open = false)}
				class="rounded-lg p-1 text-primary-foreground/80 transition-colors hover:text-primary-foreground hover:bg-white/10"
				aria-label="Close chat"
			>
				<X class="h-5 w-5" />
			</button>
		</div>

		<!-- Messages -->
		<div class="flex-1 overflow-y-auto p-4 space-y-4">
			{#each messages as msg}
				<div class="flex gap-3 {msg.role === 'user' ? 'flex-row-reverse' : ''}">
					{#if msg.role === 'assistant'}
						<div class="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent-primary/10">
							<Bot class="h-4 w-4 text-accent-primary" />
						</div>
					{/if}
					<div
						class="max-w-[80%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed {msg.role === 'user'
							? 'bg-accent-primary text-primary-foreground'
							: 'bg-secondary text-foreground'}"
					>
						{msg.text}
					</div>
				</div>
			{/each}
		</div>

		<!-- Input -->
		<div class="border-t border-border p-3">
			<form
				class="flex gap-2"
				onsubmit={(e) => {
					e.preventDefault();
					handleSend();
				}}
			>
				<input
					type="text"
					bind:value={input}
					placeholder="Ask a question..."
					class="flex-1 rounded-xl border border-input bg-background px-4 py-2.5 text-sm placeholder:text-muted-foreground focus:border-accent-primary focus:outline-none focus:ring-2 focus:ring-accent-primary/20"
				/>
				<button
					type="submit"
					class="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent-primary text-primary-foreground transition-colors hover:bg-accent-hover"
					aria-label="Send message"
				>
					<Send class="h-4 w-4" />
				</button>
			</form>
			<p class="mt-2 text-center text-[10px] text-muted-foreground">Powered by AI</p>
		</div>
	</div>
{/if}
