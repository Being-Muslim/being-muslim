<script lang="ts">
	import { withPrefix } from '$lib/data/utils.js';
	import { products } from '$lib/data/mock.js';
	import { Minus, Plus, Trash2, ShoppingBag, BookOpen, ArrowRight, ArrowLeft, Heart } from 'lucide-svelte';

	const p = (href: string) => withPrefix('/e', href);

	let cartItems = $state([
		{ product: products[0], quantity: 1 },
		{ product: products[2], quantity: 2 }
	]);

	const subtotal = $derived(cartItems.reduce((sum, item) => sum + item.product.price * item.quantity, 0));
	const shipping = $derived(subtotal >= 50 ? 0 : 5.99);
	const total = $derived(subtotal + shipping);

	function updateQuantity(index: number, delta: number) {
		const newQty = cartItems[index].quantity + delta;
		if (newQty >= 1 && newQty <= 10) { cartItems[index].quantity = newQty; }
	}

	function removeItem(index: number) {
		cartItems = cartItems.filter((_, i) => i !== index);
	}
</script>

<svelte:head>
	<title>Cart — Being Muslim Shop</title>
</svelte:head>

<section class="py-12 pt-24 sm:py-16 sm:pt-28">
	<div class="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
		<a href={p('/shop')} class="mb-6 inline-flex items-center gap-2 text-sm text-text-secondary transition-colors hover:text-accent-primary"><ArrowLeft class="h-4 w-4" /> Continue Shopping</a>
		<h1 class="font-display text-3xl font-semibold text-text-primary sm:text-4xl">Your Cart</h1>

		{#if cartItems.length === 0}
			<div class="glass-panel mx-auto mt-16 max-w-md p-12 text-center">
				<ShoppingBag class="mx-auto h-16 w-16 text-text-secondary/30" />
				<h2 class="mt-4 font-display text-xl font-semibold text-text-primary">Your cart is empty</h2>
				<p class="mt-2 text-text-secondary">Browse our shop to find resources for your journey.</p>
				<a href={p('/shop')} class="glow mt-6 inline-flex items-center gap-2 rounded-full bg-accent-primary px-6 py-3 text-sm font-medium text-white">Browse Shop <ArrowRight class="h-4 w-4" /></a>
			</div>
		{:else}
			<div class="mt-8 grid gap-8 lg:grid-cols-3">
				<!-- Cart Items -->
				<div class="lg:col-span-2">
					<div class="space-y-4">
						{#each cartItems as item, index}
							<div class="glass-panel flex gap-4 p-4 sm:p-6">
								<div class="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-accent-primary/10 to-accent-gold/10 sm:h-24 sm:w-24">
									<BookOpen class="h-8 w-8 text-accent-primary/20" />
								</div>
								<div class="flex flex-1 flex-col justify-between">
									<div>
										<a href={p('/shop/' + item.product.handle)} class="font-display text-base font-semibold text-text-primary hover:text-accent-primary">{item.product.title}</a>
										{#if item.product.badge}<span class="ml-2 rounded-full bg-accent-gold/10 px-2 py-0.5 text-xs font-medium text-accent-gold">{item.product.badge}</span>{/if}
									</div>
									<div class="mt-2 flex items-center justify-between">
										<div class="flex items-center gap-1">
											<button onclick={() => updateQuantity(index, -1)} disabled={item.quantity <= 1} class="glow flex h-8 w-8 items-center justify-center rounded-full border border-border bg-white/80 disabled:opacity-40" aria-label="Decrease"><Minus class="h-3 w-3" /></button>
											<span class="flex h-8 w-10 items-center justify-center text-sm font-semibold text-text-primary">{item.quantity}</span>
											<button onclick={() => updateQuantity(index, 1)} disabled={item.quantity >= 10} class="glow flex h-8 w-8 items-center justify-center rounded-full border border-border bg-white/80 disabled:opacity-40" aria-label="Increase"><Plus class="h-3 w-3" /></button>
										</div>
										<div class="flex items-center gap-4">
											<span class="font-semibold text-accent-primary">${(item.product.price * item.quantity).toFixed(2)}</span>
											<button onclick={() => removeItem(index)} class="rounded-full p-1.5 text-text-secondary transition-colors hover:bg-red-50 hover:text-red-600" aria-label="Remove"><Trash2 class="h-4 w-4" /></button>
										</div>
									</div>
								</div>
							</div>
						{/each}
					</div>
				</div>

				<!-- Order Summary -->
				<div>
					<div class="glass-panel p-6">
						<h2 class="font-display text-lg font-semibold text-text-primary">Order Summary</h2>
						<div class="mt-6 space-y-3 text-sm">
							<div class="flex items-center justify-between"><span class="text-text-secondary">Subtotal</span><span class="font-medium text-text-primary">${subtotal.toFixed(2)}</span></div>
							<div class="flex items-center justify-between"><span class="text-text-secondary">Shipping</span><span class="font-medium text-text-primary">{shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}</span></div>
							{#if shipping === 0}<p class="text-xs text-accent-primary">Free shipping on orders over $50</p>{/if}
							<hr class="border-border" />
							<div class="flex items-center justify-between"><span class="font-semibold text-text-primary">Total</span><span class="font-display text-xl font-bold text-accent-primary">${total.toFixed(2)}</span></div>
						</div>
						<button class="glow mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-accent-primary py-3 text-sm font-medium text-white">Proceed to Checkout <ArrowRight class="h-4 w-4" /></button>
						<p class="mt-3 text-center text-xs text-text-secondary">Secure checkout powered by Stripe</p>
					</div>

					<!-- Sponsor Add-on -->
					<div class="glass-panel mt-4 border-accent-gold/30 p-5">
						<div class="flex items-center gap-3">
							<Heart class="h-5 w-5 text-accent-gold" />
							<div>
								<p class="text-sm font-semibold text-text-primary">Sponsor a boxed set</p>
								<p class="text-xs text-text-secondary">Add $85 to send one to a new Muslim</p>
							</div>
						</div>
						<button class="glow mt-3 w-full rounded-full border border-accent-gold/30 py-2 text-sm font-medium text-accent-gold">Add Sponsorship</button>
					</div>
				</div>
			</div>
		{/if}
	</div>
</section>
