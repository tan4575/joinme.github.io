import About from '@/components/About';
import CapstoneModel from '@/components/CapstoneModel';
import Hero from '@/components/Hero';
import Publications from '@/components/Publications';
import Sidebar from '@/components/Sidebar';
import ThemeIsland from '@/components/ThemeIsland';
import Timeline from '@/components/Timeline';

export default function Home() {
  return (
    <main className="min-h-dvh bg-white text-ink dark:bg-[#10171b] dark:text-paper lg:flex">
      <ThemeIsland />
      <div className="lg:shrink-0">
        <Sidebar />
      </div>
      <div className="min-w-0 flex-1">
        <Hero />
        <About />
        <Timeline />
        <Publications />
        <CapstoneModel />
      </div>
    </main>
  );
}
