import { type Metadata } from 'next';
import { Inter } from 'next/font/google';
import Link from 'next/link';
import { type PropsWithChildren } from 'react';

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

// TODO: do these "bg-*" classes need to be in the global stylesheet?

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en" className={`${sans.variable}`}>
      <body className="flex min-h-dvh flex-col bg-gray-800 font-sans text-gray-200 antialiased selection:bg-gray-300 selection:text-gray-900">
        <header className="bg-background/60 sticky top-0 border-b px-5 py-2.5 backdrop-blur">
          <nav>
            <ul className="flex w-full justify-between">
              <li>
                <Link href={homePath()} className="text-lg font-bold">
                  Home
                </Link>
              </li>
              <li>
                <Link href={ticketsPath()} className="text-sm underline">
                  Tickets
                </Link>
              </li>
            </ul>
          </nav>
        </header>

        <main className="bg-secondary/20 flex grow flex-col overflow-x-hidden px-8 py-20">
          {children}
        </main>

        <footer>Footer</footer>
      </body>
    </html>
  );
}
