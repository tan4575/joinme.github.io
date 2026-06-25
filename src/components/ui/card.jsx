import { cn } from '@/lib/utils';

function Card({ className, ...props }) {
  return (
    <div
      className={cn(
        'rounded-lg border border-ink/10 bg-white text-ink shadow-sm dark:border-white/10 dark:bg-white/10 dark:text-paper',
        className,
      )}
      {...props}
    />
  );
}

function CardHeader({ className, ...props }) {
  return <div className={cn('flex flex-col space-y-2 p-6', className)} {...props} />;
}

function CardTitle({ className, ...props }) {
  return <h3 className={cn('text-xl font-semibold leading-snug tracking-normal', className)} {...props} />;
}

function CardDescription({ className, ...props }) {
  return <p className={cn('text-sm leading-7 text-ink/68 dark:text-paper/68', className)} {...props} />;
}

function CardContent({ className, ...props }) {
  return <div className={cn('p-6 pt-0', className)} {...props} />;
}

function CardFooter({ className, ...props }) {
  return <div className={cn('flex items-center p-6 pt-0', className)} {...props} />;
}

export { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle };
