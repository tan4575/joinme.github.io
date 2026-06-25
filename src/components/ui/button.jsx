import { Slot } from '@radix-ui/react-slot';
import { cva } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-semibold uppercase tracking-[0.14em] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orbit focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'bg-ink text-white hover:bg-orbit dark:bg-paper dark:text-ink dark:hover:bg-signal dark:hover:text-white',
        signal: 'bg-signal text-white hover:bg-white hover:text-ink dark:hover:bg-paper',
        secondary: 'bg-white text-ink hover:bg-signal hover:text-white dark:bg-paper dark:text-ink',
        outline:
          'border border-ink/15 bg-transparent text-ink/70 hover:border-orbit hover:text-orbit dark:border-white/15 dark:text-paper/70 dark:hover:border-signal dark:hover:text-signal',
        ghost: 'bg-transparent text-ink/70 hover:bg-ink hover:text-white dark:text-paper/70 dark:hover:bg-white/10 dark:hover:text-white',
      },
      size: {
        default: 'h-10 px-4 py-2',
        sm: 'h-9 px-3 text-xs',
        lg: 'h-12 px-5',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
);

function Button({ className, variant, size, asChild = false, ...props }) {
  const Comp = asChild ? Slot : 'button';

  return <Comp className={cn(buttonVariants({ variant, size, className }))} {...props} />;
}

export { Button, buttonVariants };
