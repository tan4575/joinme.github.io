import { Badge } from '@/components/ui/badge';

export default function SectionHeading({ eyebrow, title }) {
  return (
    <div className="max-w-3xl">
      <Badge variant="orbit">{eyebrow}</Badge>
      <h2 className="mt-3 text-3xl font-semibold tracking-normal text-ink dark:text-paper sm:text-4xl">{title}</h2>
    </div>
  );
}
