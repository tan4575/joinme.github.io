import Image from 'next/image';
import { publications } from '@/data/portfolio';
import { Card, CardContent, CardDescription, CardTitle } from '@/components/ui/card';
import { assetPath } from '@/lib/assets';
import SectionHeading from './SectionHeading';

export default function Publications() {
  return (
    <section id="publications" className="bg-white px-6 py-20 dark:bg-[#10171b] sm:px-10 lg:px-16">
      <SectionHeading eyebrow="Publications" title="Recent publications" />
      <div className="mt-10 grid gap-6 xl:grid-cols-3">
        {publications.map((publication) => (
          <Card key={publication.href} className="overflow-hidden bg-paper/70 dark:bg-white/10">
            <a href={publication.href} target="_blank" rel="noreferrer" className="group block">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={assetPath(publication.image)}
                  alt=""
                  fill
                  sizes="(min-width: 1280px) 25vw, (min-width: 768px) 50vw, 100vw"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <CardContent className="p-6">
                <CardTitle className="group-hover:text-orbit">
                  {publication.title}
                </CardTitle>
                <CardDescription className="mt-4">{publication.abstract}</CardDescription>
              </CardContent>
            </a>
          </Card>
        ))}
      </div>
    </section>
  );
}
