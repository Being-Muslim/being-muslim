<script lang="ts">
	import { cn } from '$lib/utils/cn.js';
	import { buttonVariants, type Props } from './index.js';

	let {
		class: className,
		variant = 'default',
		size = 'default',
		children,
		...restProps
	}: Props = $props();
</script>

<button class={cn(buttonVariants({ variant, size }), className)} {...restProps}>
	{@render children?.()}
</button>
