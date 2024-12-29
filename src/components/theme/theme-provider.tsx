import { ThemeProvider as BaseThemeProvider } from 'next-themes';
import { PropsWithChildren } from 'react';

export function ThemeProvider({ children }: PropsWithChildren) {
  return <BaseThemeProvider attribute="class">{children}</BaseThemeProvider>;
}
