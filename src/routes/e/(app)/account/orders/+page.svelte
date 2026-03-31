<script lang="ts">
	import { withPrefix } from '$lib/data/utils.js';
	import { ShoppingBag, Package, ChevronRight } from 'lucide-svelte';

	const p = (href: string) => withPrefix('/e', href);

	const orders = [
		{ id: '#BM-1234', date: 'February 10, 2026', total: 84.99, status: 'Delivered', items: [{ name: 'Being Muslim Boxed Set', qty: 1, price: 84.99 }] },
		{ id: '#BM-1189', date: 'January 25, 2026', total: 24.99, status: 'Delivered', items: [{ name: 'Being Muslim: A Practical Guide', qty: 1, price: 24.99 }] },
		{ id: '#BM-1102', date: 'January 5, 2026', total: 29.98, status: 'Delivered', items: [{ name: 'Prayer Reference Cards', qty: 2, price: 14.99 }] }
	];

	function statusColor(status: string): string {
		switch (status) {
			case 'Delivered': return 'bg-accent-primary/10 text-accent-primary';
			case 'Shipped': return 'bg-blue-50 text-blue-600';
			case 'Processing': return 'bg-accent-gold/10 text-accent-gold';
			default: return 'bg-border text-text-secondary';
		}
	}
</script>

<svelte:head>
	<title>Orders — Being Muslim</title>
</svelte:head>

<div>
	<h1 class="font-display text-2xl font-semibold text-text-primary sm:text-3xl">Order History</h1>
	<p class="mt-1 text-text-secondary">View and track your past orders.</p>

	<div class="mt-8 space-y-4">
		{#each orders as order}
			<div class="glass-panel p-5">
				<div class="flex items-center justify-between">
					<div>
						<div class="flex items-center gap-3">
							<span class="font-display text-sm font-semibold text-text-primary">{order.id}</span>
							<span class="rounded-full px-2.5 py-0.5 text-xs font-medium {statusColor(order.status)}">{order.status}</span>
						</div>
						<p class="mt-1 text-xs text-text-secondary">{order.date}</p>
					</div>
					<p class="font-display text-lg font-bold text-accent-primary">${order.total.toFixed(2)}</p>
				</div>
				<div class="mt-4 space-y-2 border-t border-border pt-4">
					{#each order.items as item}
						<div class="flex items-center justify-between text-sm">
							<div class="flex items-center gap-3">
								<div class="flex h-10 w-10 items-center justify-center rounded-xl bg-accent-primary/10">
									<Package class="h-4 w-4 text-accent-primary" />
								</div>
								<div>
									<p class="font-medium text-text-primary">{item.name}</p>
									<p class="text-xs text-text-secondary">Qty: {item.qty}</p>
								</div>
							</div>
							<span class="text-text-secondary">${item.price.toFixed(2)}</span>
						</div>
					{/each}
				</div>
			</div>
		{/each}
	</div>
</div>
