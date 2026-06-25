import { about, experiences } from '@/data/portfolio';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import SectionHeading from './SectionHeading';

export default function About() {
  return (
    <section id="about" className="bg-white px-6 py-20 dark:bg-[#10171b] sm:px-10 lg:px-16">
      <SectionHeading eyebrow="About me" title="Who am I?" />
      <p className="mt-8 max-w-5xl text-lg leading-9 text-ink/72 dark:text-paper/72">{about}</p>

      <div className="mt-16">
        <SectionHeading eyebrow="What I do" title="Experiences" />
        <div className="mt-8 grid gap-5 xl:grid-cols-3">
          {experiences.map((item, index) => (
            <Card key={item.title} className="bg-paper/70 dark:bg-white/10">
              <CardHeader>
                <div className="flex h-11 w-11 items-center justify-center rounded-md bg-ink text-sm font-bold text-white">
                  {String(index + 1).padStart(2, '0')}
                </div>
                <CardTitle className="pt-3">{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{item.summary}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
