'use client';

import { useEffect, useRef, useState } from 'react';
import { timeline } from '@/data/portfolio';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import SectionHeading from './SectionHeading';

export default function Timeline() {
  const itemRefs = useRef([]);
  const [visibleItems, setVisibleItems] = useState(() => new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute('data-timeline-index'));
            setVisibleItems((current) => {
              const next = new Set(current);
              next.add(index);
              return next;
            });
            observer.unobserve(entry.target);
          }
        });
      },
      {
        rootMargin: '0px 0px -18% 0px',
        threshold: 0.25,
      },
    );

    itemRefs.current.forEach((item) => {
      if (item) {
        observer.observe(item);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="timeline" className="bg-mist px-6 py-20 dark:bg-[#152127] sm:px-10 lg:px-16">
      <SectionHeading eyebrow="Highlights" title="Timeline" />
      <div className="relative mt-10 space-y-8 pl-8 before:absolute before:bottom-4 before:left-3 before:top-4 before:w-px before:bg-ink/15 dark:before:bg-white/15">
        <div
          className="absolute left-3 top-4 w-px origin-top bg-orbit transition-[height] duration-700 ease-out dark:bg-signal"
          style={{
            height:
              visibleItems.size === 0
                ? '0%'
                : `${Math.min(100, (visibleItems.size / timeline.length) * 100)}%`,
          }}
          aria-hidden="true"
        />

        {timeline.map((item, index) => (
          <div
            key={`${item.title}-${item.date}`}
            ref={(element) => {
              itemRefs.current[index] = element;
            }}
            data-timeline-index={index}
            className={[
              'relative transition duration-700 ease-out',
              visibleItems.has(index) ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0',
            ].join(' ')}
          >
            <span
              className={[
                'absolute -left-[1.58rem] top-7 z-10 h-3.5 w-3.5 rounded-full border-2 transition duration-500',
                visibleItems.has(index)
                  ? 'border-orbit bg-orbit shadow-[0_0_0_6px_rgba(39,117,143,0.14)] dark:border-signal dark:bg-signal dark:shadow-[0_0_0_6px_rgba(212,91,63,0.16)]'
                  : 'border-ink/20 bg-mist dark:border-white/20 dark:bg-[#152127]',
              ].join(' ')}
              aria-hidden="true"
            />
            <Card>
              <CardHeader className="gap-3 md:flex-row md:items-start md:justify-between md:space-y-0">
                <CardTitle className="max-w-3xl">{item.title}</CardTitle>
                <Badge variant="secondary" className="shrink-0 normal-case tracking-normal">
                  {item.date}
                </Badge>
              </CardHeader>
              <CardContent>
                <p className="text-sm leading-7 text-ink/70 dark:text-paper/70">{item.detail}</p>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
}
