import { type VariantProps, tv } from 'tailwind-variants';
import type { Snippet } from 'svelte';
import type { HTMLButtonAttributes } from 'svelte/elements';
import Root from './button.svelte';

const buttonVariants = tv({
	base: 'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 cursor-pointer',
	variants: {
		variant: {
			default: 'bg-primary text-primary-foreground hover:bg-accent-hover',
			secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
			outline: 'border border-border bg-transparent hover:bg-secondary hover:text-foreground',
			ghost: 'hover:bg-secondary hover:text-foreground',
			destructive: 'bg-destructive text-destructive-foreground hover:bg-destructive/90',
			link: 'text-primary underline-offset-4 hover:underline'
		},
		size: {
			default: 'h-10 px-5 py-2',
			sm: 'h-9 px-3 text-xs',
			lg: 'h-12 px-8 text-base',
			icon: 'h-10 w-10'
		}
	},
	defaultVariants: {
		variant: 'default',
		size: 'default'
	}
});

type Variant = VariantProps<typeof buttonVariants>['variant'];
type Size = VariantProps<typeof buttonVariants>['size'];

type Props = HTMLButtonAttributes & {
	variant?: Variant;
	size?: Size;
	children?: Snippet;
	class?: string;
};

export {
	Root,
	type Props,
	Root as Button,
	type Props as ButtonProps,
	buttonVariants
};
