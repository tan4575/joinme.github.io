'use client';

import Script from 'next/script';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

export default function CapstoneModel() {
  return (
    <section id="modeling" className="bg-ink px-6 py-20 text-white sm:px-10 lg:px-16">
      <div className="max-w-4xl">
        <Badge variant="outline" className="border-white/20 text-white/70">
          Projects
        </Badge>
        <h2 className="mt-3 text-3xl font-semibold tracking-normal sm:text-4xl">3D modeling</h2>
        <p className="mt-4 text-sm leading-7 text-white/65">
          Place your mouse over each room to view its callout.
        </p>
      </div>

      <Card className="mt-10 overflow-hidden border-white/15 bg-white/5 text-white">
        <CardContent className="p-0">
          <div id="mcontainer" className="h-[70vh] min-h-[420px] w-full" />
          <div id="controls" className="sr-only" />
        </CardContent>
      </Card>

      <Script src={`${basePath}/assests/output.js`} strategy="lazyOnload" />
    </section>
  );
}
