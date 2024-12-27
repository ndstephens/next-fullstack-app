import { LucideKanban } from 'lucide-react';
import { type Metadata } from 'next';
import { Inter } from 'next/font/google';
import Link from 'next/link';
import { type PropsWithChildren } from 'react';

import { buttonVariants } from '@/components/ui/button';

import { homePath, ticketsPath } from '@/paths';

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
    <html lang="en" className={`${sans.variable} dark`}>
      <body className="bg-background text-foreground flex min-h-dvh flex-col font-sans antialiased">
        <header className="bg-background/60 sticky top-0 flex justify-between border-b px-5 py-2.5 backdrop-blur">
          <Link
            href={homePath()}
            className={buttonVariants({ variant: 'ghost' })}
          >
            <LucideKanban />
            <span className="text-lg font-semibold">TicketBounty</span>
          </Link>
          <nav>
            <Link
              href={ticketsPath()}
              className={buttonVariants({ variant: 'outline' })}
            >
              Tickets
            </Link>
          </nav>
        </header>

        <main className="bg-secondary/20 flex grow flex-col overflow-x-hidden px-8 py-10">
          {children}
        </main>
      </body>
    </html>
  );
}
