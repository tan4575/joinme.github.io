'use client';

import { Moon, Sun } from 'lucide-react';

export default function ThemeIsland() {
  const toggleTheme = () => {
    const root = document.documentElement;
    const nextTheme = root.classList.contains('dark') ? 'light' : 'dark';

    root.classList.toggle('dark', nextTheme === 'dark');
    window.localStorage.setItem('theme', nextTheme);
  };

  return (
    <button
      type="button"
      aria-label="Toggle color mode"
      title="Toggle color mode"
      onClick={toggleTheme}
      className="fixed right-4 top-4 z-50 flex h-12 w-12 items-center justify-center rounded-full border border-ink/10 bg-white/85 text-ink shadow-soft backdrop-blur transition hover:-translate-y-0.5 hover:border-orbit hover:text-orbit dark:border-white/15 dark:bg-ink/85 dark:text-white dark:hover:border-signal dark:hover:text-signal"
    >
      <span className="flex h-8 w-8 rotate-90 items-center justify-center rounded-full bg-orbit/10 text-signal transition-transform dark:rotate-0 dark:bg-white/10 dark:text-paper">
        <Sun className="h-5 w-5 dark:hidden" aria-hidden="true" />
        <Moon className="hidden h-5 w-5 dark:block" aria-hidden="true" />
      </span>
    </button>
  );
}
