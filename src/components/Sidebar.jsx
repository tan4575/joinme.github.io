import Image from 'next/image';
import {
  BookOpenText,
  BriefcaseBusiness,
  Clock3,
  Cuboid,
  Home,
  Mail,
  MapPin,
  Phone,
  UserRound,
} from 'lucide-react';
import { credits, navItems, profile } from '@/data/portfolio';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { assetPath } from '@/lib/assets';
import SocialIcon from '@/components/SocialIcon';

const navIcons = {
  Introduction: Home,
  About: UserRound,
  Timeline: Clock3,
  Publications: BookOpenText,
  '3D Modeling': Cuboid,
};

export default function Sidebar() {
  return (
    <aside className="sticky top-0 flex min-h-dvh flex-col justify-between border-r border-ink/10 bg-paper px-6 py-8 text-ink dark:border-white/10 dark:bg-[#121c21] dark:text-paper lg:w-80">
      <div>
        <header className="text-center">
          <a href="#home" aria-label={`${profile.name}, back to introduction`}>
            <Image
              src={assetPath('/images/me.jpg')}
              width={144}
              height={144}
              alt="Portrait of Tan Wei Siang"
              className="mx-auto aspect-square rounded-full object-cover shadow-soft transition hover:scale-[1.02]"
              priority
            />
          </a>
          <h1 className="mt-5 text-2xl font-semibold tracking-normal">
            <a href="#home" className="underline-offset-4 hover:text-orbit hover:underline">
              {profile.name}
            </a>
          </h1>
          <Badge variant="secondary" className="mt-3 inline-flex gap-2 normal-case tracking-normal">
            <BriefcaseBusiness className="h-4 w-4" aria-hidden="true" />
            {profile.role}
          </Badge>
        </header>

        <Card className="mt-6 bg-white/55 dark:bg-white/10">
          <CardContent className="space-y-2 p-4 text-sm text-ink/70 dark:text-paper/70">
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4 shrink-0" aria-hidden="true" />
              <div className="space-y-1">
                {profile.emails.map((email) => (
                  <a key={email} href={`mailto:${email}`} className="block rounded-sm transition hover:text-orbit">
                    {email}
                  </a>
                ))}
              </div>
            </div>
            <a href="tel:+6597826269" className="flex items-center gap-2 rounded-sm transition hover:text-orbit">
              <Phone className="h-4 w-4 shrink-0" aria-hidden="true" />
              <span>{profile.phone}</span>
            </a>
            <p className="flex items-center gap-2">
              <MapPin className="h-4 w-4 shrink-0" aria-hidden="true" />
              <span>{profile.location}</span>
            </p>
          </CardContent>
        </Card>

        <nav aria-label="Main navigation" className="mt-8">
          <p className="px-3 text-xs font-semibold uppercase tracking-[0.18em] text-ink/45 dark:text-paper/45">
            Sections
          </p>
          <ul className="mt-3 space-y-1.5">
            {navItems.map((item) => {
              const Icon = navIcons[item.label] || Home;

              return (
                <li key={item.href}>
                  <Button
                    asChild
                    variant="ghost"
                    className="group h-auto w-full justify-start rounded-lg px-3 py-3 normal-case tracking-normal hover:bg-white/70 hover:text-ink dark:hover:bg-white/10 dark:hover:text-white"
                  >
                    <a href={item.href}>
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-ink/5 text-ink/55 transition group-hover:bg-orbit group-hover:text-white dark:bg-white/10 dark:text-paper/60 dark:group-hover:bg-signal dark:group-hover:text-white">
                        <Icon className="h-4 w-4" aria-hidden="true" />
                      </span>
                      <span className="font-medium">{item.label}</span>
                    </a>
                  </Button>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="mt-8 flex flex-wrap justify-center gap-2">
          {profile.links.map((link) => (
            <Button
              key={link.href}
              asChild
              variant="outline"
              size="sm"
              className="h-10 w-10 p-0"
              title={link.label}
            >
              <a href={link.href} target="_blank" rel="noreferrer">
                <SocialIcon name={link.label} className="h-4 w-4" />
                <span className="sr-only">{link.label}</span>
              </a>
            </Button>
          ))}
        </div>
      </div>

      <footer className="mt-10 space-y-4 text-xs leading-5 text-ink/55 dark:text-paper/55">
        <p>
          Image credits:{' '}
          {credits.map((credit, index) => (
            <span key={credit.href}>
              <a href={credit.href} target="_blank" rel="noreferrer" className="underline-offset-2 hover:underline">
                {credit.label}
              </a>
              {index < credits.length - 1 ? ', ' : '.'}
            </span>
          ))}
        </p>
      </footer>
    </aside>
  );
}
