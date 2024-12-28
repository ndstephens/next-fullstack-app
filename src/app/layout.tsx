import { type Metadata } from 'next';
import { Inter } from 'next/font/google';
import { type PropsWithChildren } from 'react';

import { Header } from '@/components/header';

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
        <Header />
        <main className="bg-secondary/20 flex grow flex-col overflow-x-hidden px-8 py-10">
          {children}
        </main>
      </body>
    </html>
  );
}
