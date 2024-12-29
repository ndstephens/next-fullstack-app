'use client';

import { LucideMoon, LucideSun } from 'lucide-react';
import { useTheme } from 'next-themes';

import { Button } from '@/components/ui/button';

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      aria-label="Toggle user interface theme"
    >
      <LucideSun aria-hidden className="h-5 w-5 scale-100 dark:scale-0" />
      <LucideMoon
        aria-hidden
        className="absolute h-5 w-5 scale-0 dark:scale-100"
      />
    </Button>
  );
}
