import Image from 'next/image';
import { Download } from 'lucide-react';
import { heroSlides } from '@/data/portfolio';
import { Button } from '@/components/ui/button';
import { assetPath } from '@/lib/assets';

export default function Hero() {
  return (
    <section id="home" className="bg-ink text-white">
      <div className="grid min-h-dvh lg:grid-cols-[1.25fr_0.75fr]">
        <div className="relative flex min-h-[620px] items-end overflow-hidden px-6 py-10 sm:px-10 lg:px-16">
          <Image
            src={assetPath(heroSlides[0].image)}
            alt=""
            fill
            sizes="(min-width: 1024px) 70vw, 100vw"
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/45 to-ink/10" />
          <div className="relative max-w-3xl pb-10">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-white/70">
              {heroSlides[0].eyebrow}
            </p>
            <h2 className="mt-5 max-w-2xl text-5xl font-semibold leading-tight tracking-normal sm:text-6xl">
              {heroSlides[0].title}
            </h2>
            <Button
              asChild
              variant="secondary"
              size="lg"
              className="mt-8 bg-white/90 text-ink shadow-soft backdrop-blur hover:bg-orbit hover:text-white"
            >
              <a href={heroSlides[0].href} target="_blank" rel="noreferrer">
                {heroSlides[0].action}
                <Download className="h-4 w-4" aria-hidden="true" />
              </a>
            </Button>
          </div>
        </div>

        <div className="grid bg-white text-ink sm:grid-cols-2 lg:grid-cols-1">
          {heroSlides.slice(1).map((slide) => (
            <a
              key={slide.title}
              href={slide.href}
              target="_blank"
              rel="noreferrer"
              className="group relative isolate flex min-h-80 items-end overflow-hidden p-8"
            >
              <Image
                src={assetPath(slide.image)}
                alt=""
                fill
                sizes="(min-width: 1024px) 30vw, 50vw"
                className="object-cover transition duration-500 group-hover:scale-105"
                priority
              />
              <div className="absolute inset-0 bg-ink/55 transition group-hover:bg-ink/40" />
              <div className="relative text-white">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/70">{slide.action}</p>
                <h3 className="mt-3 text-2xl font-semibold leading-tight">{slide.title}</h3>
                <p className="mt-3 max-w-sm text-sm leading-6 text-white/75">{slide.eyebrow}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
