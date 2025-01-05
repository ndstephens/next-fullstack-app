import { type Metadata } from 'next';
import { Inter } from 'next/font/google';
import { type PropsWithChildren } from 'react';

import { Header } from '@/components/header';
import { RedirectToast } from '@/components/redirect-toast';
import { ThemeProvider } from '@/components/theme/theme-provider';
import { Toaster } from '@/components/ui/sonner';

import './main.css';

const sans = Inter({ subsets: ['latin'], variable: '--custom-sans' });

export const metadata: Metadata = {
  title: {
    template: '%s | Next Fullstack App',
    default: 'Home',
  },
  description: 'A fullstack Next.js app',
  // metadataBase: new URL('https://www.siteurl.com'),
  keywords: ['next', 'fullstack', 'typescript', 'react'],
  openGraph: {
    title: 'Next Fullstack App',
    description: 'A fullstack Next.js app',
    siteName: 'Next Fullstack App',
    // url: 'https://www.siteurl.com',
    type: 'website',
    locale: 'en_US',
  },
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en" className={`${sans.variable}`} suppressHydrationWarning>
      <body className="bg-background text-foreground flex min-h-dvh flex-col font-sans antialiased">
        <ThemeProvider>
          <Header />
          <main className="bg-secondary/20 flex grow flex-col overflow-x-hidden px-8 pt-8 pb-24">
            {children}
          </main>
          <Toaster expand duration={3000} />
          <RedirectToast />
        </ThemeProvider>
      </body>
    </html>
  );
}
