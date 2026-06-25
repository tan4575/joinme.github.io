import { cva } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const badgeVariants = cva(
  'inline-flex items-center rounded-md px-2.5 py-1 text-xs font-semibold uppercase tracking-[0.16em] transition-colors',
  {
    variants: {
      variant: {
        default: 'bg-ink text-white dark:bg-paper dark:text-ink',
        secondary: 'bg-paper text-ink/70 dark:bg-white/10 dark:text-paper/70',
        outline: 'border border-ink/15 text-ink/70 dark:border-white/20 dark:text-paper/70',
        orbit: 'bg-orbit text-white dark:bg-signal dark:text-white',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
);

function Badge({ className, variant, ...props }) {
  return <span className={cn(badgeVariants({ variant, className }))} {...props} />;
}

export { Badge, badgeVariants };
