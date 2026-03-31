<script lang="ts">
	import { ShoppingBag, ExternalLink } from 'lucide-svelte';

	const orders = [
		{
			id: 'BM-1234',
			date: 'February 10, 2026',
			status: 'Delivered',
			total: '$84.99',
			items: [{ name: 'Being Muslim Boxed Set', quantity: 1, price: '$84.99' }]
		},
		{
			id: 'BM-1198',
			date: 'January 22, 2026',
			status: 'Delivered',
			total: '$24.99',
			items: [{ name: 'Being Muslim: A Practical Guide', quantity: 1, price: '$24.99' }]
		},
		{
			id: 'BM-1156',
			date: 'January 5, 2026',
			status: 'Delivered',
			total: '$14.99',
			items: [{ name: 'Prayer Reference Cards', quantity: 1, price: '$14.99' }]
		}
	];
</script>

<svelte:head>
	<title>Orders — Being Muslim</title>
</svelte:head>

<div>
	<span class="text-xs font-medium uppercase tracking-[0.2em] text-accent-primary">Account</span>
	<h1 class="mt-2 font-display text-3xl font-light">Orders</h1>
	<hr class="bronze-rule my-5 w-12" />

	{#if orders.length === 0}
		<div class="py-16 text-center">
			<ShoppingBag class="mx-auto h-10 w-10 text-text-secondary/30" />
			<p class="mt-4 font-display text-lg font-light text-text-primary">No orders yet</p>
			<p class="mt-1 text-sm text-text-secondary">
				When you make a purchase, it will appear here.
			</p>
		</div>
	{:else}
		<div class="space-y-4">
			{#each orders as order}
				<div class="rounded-sm border border-border bg-surface p-5">
					<div class="flex items-center justify-between">
						<div>
							<p class="text-sm font-medium text-text-primary">Order #{order.id}</p>
							<p class="mt-0.5 text-xs text-text-secondary">{order.date}</p>
						</div>
						<div class="text-right">
							<span
								class="rounded-sm bg-accent-green/10 px-2 py-0.5 text-xs text-accent-green"
								>{order.status}</span
							>
							<p class="mt-1 text-sm text-accent-primary">{order.total}</p>
						</div>
					</div>
					<hr class="bronze-rule my-3" />
					{#each order.items as item}
						<div class="flex items-center justify-between text-sm">
							<span class="text-text-secondary"
								>{item.name} x{item.quantity}</span
							>
							<span class="text-text-primary">{item.price}</span>
						</div>
					{/each}
					<button
						class="mt-3 flex items-center gap-1 text-xs text-accent-primary hover:underline"
					>
						View Details <ExternalLink class="h-3 w-3" />
					</button>
				</div>
			{/each}
		</div>
	{/if}
</div>
