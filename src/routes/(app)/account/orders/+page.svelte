<script lang="ts">
	import { Button } from '$lib/components/ui/button/index.js';
	import { Badge } from '$lib/components/ui/badge/index.js';
	import { ShoppingBag, ExternalLink } from 'lucide-svelte';

	const orders = [
		{
			id: 'BM-2026-0142',
			date: 'Feb 10, 2026',
			items: [
				{ name: 'Being Muslim Boxed Set', qty: 1, price: 84.99 },
				{ name: 'Prayer Reference Cards', qty: 1, price: 14.99 }
			],
			status: 'Shipped' as const,
			total: 99.98,
			tracking: 'USPS-9405511899223456789012'
		},
		{
			id: 'BM-2026-0118',
			date: 'Jan 25, 2026',
			items: [
				{ name: 'Being Muslim: Digital Edition', qty: 1, price: 12.99 }
			],
			status: 'Delivered' as const,
			total: 12.99
		},
		{
			id: 'BM-2025-0087',
			date: 'Dec 15, 2025',
			items: [
				{ name: 'Being Muslim: A Practical Guide', qty: 2, price: 49.98 },
				{ name: 'Prayer Reference Cards', qty: 1, price: 14.99 }
			],
			status: 'Delivered' as const,
			total: 64.97
		},
		{
			id: 'BM-2025-0063',
			date: 'Nov 2, 2025',
			items: [
				{ name: 'Being Muslim: A Practical Guide', qty: 1, price: 24.99 }
			],
			status: 'Delivered' as const,
			total: 24.99
		}
	];

	const statusVariant: Record<string, 'gold' | 'green' | 'secondary'> = {
		Processing: 'gold',
		Shipped: 'gold',
		Delivered: 'green'
	};
</script>

<svelte:head>
	<title>Orders - Being Muslim</title>
</svelte:head>

<div class="space-y-6">
	<div>
		<h1 class="font-display text-2xl font-bold text-text-primary sm:text-3xl">Order History</h1>
		<p class="mt-1 text-text-secondary">View and track all your orders.</p>
	</div>

	<div class="space-y-4">
		{#each orders as order}
			<div class="rounded-xl border border-border bg-surface overflow-hidden">
				<!-- Order Header -->
				<div class="flex flex-col gap-2 border-b border-border bg-secondary/30 px-5 py-3 sm:flex-row sm:items-center sm:justify-between">
					<div class="flex flex-wrap items-center gap-3">
						<p class="text-sm font-semibold text-text-primary">Order #{order.id}</p>
						<Badge variant={statusVariant[order.status]}>
							{#snippet children()}{order.status}{/snippet}
						</Badge>
					</div>
					<p class="text-sm text-text-secondary">{order.date}</p>
				</div>

				<!-- Order Items -->
				<div class="divide-y divide-border">
					{#each order.items as item}
						<div class="flex items-center justify-between px-5 py-3">
							<div class="flex items-center gap-3">
								<div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent-primary/10">
									<ShoppingBag class="h-4 w-4 text-accent-primary" />
								</div>
								<div>
									<p class="text-sm font-medium text-text-primary">{item.name}</p>
									<p class="text-xs text-text-secondary">Qty: {item.qty}</p>
								</div>
							</div>
							<p class="text-sm font-medium text-text-primary">${item.price.toFixed(2)}</p>
						</div>
					{/each}
				</div>

				<!-- Order Footer -->
				<div class="flex flex-col gap-3 border-t border-border px-5 py-3 sm:flex-row sm:items-center sm:justify-between">
					<div class="flex items-center gap-4">
						{#if order.tracking}
							<button
								type="button"
								class="inline-flex items-center gap-1 text-xs font-medium text-accent-primary hover:underline cursor-pointer"
							>
								<ExternalLink class="h-3 w-3" />
								Track Package
							</button>
						{/if}
						<Button variant="outline" size="sm">
							{#snippet children()}
								View Details
							{/snippet}
						</Button>
					</div>
					<div class="text-right">
						<p class="text-xs text-text-secondary">Total</p>
						<p class="font-display text-lg font-bold text-text-primary">${order.total.toFixed(2)}</p>
					</div>
				</div>
			</div>
		{/each}
	</div>
</div>
