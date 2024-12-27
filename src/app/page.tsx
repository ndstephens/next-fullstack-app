import { type Metadata } from 'next';
import Link from 'next/link';

import { ticketsPath } from '@/paths';

export const metadata: Metadata = {
  title: 'Next Fullstack App',
};

export default function HomePage() {
  return (
    <div className="flex grow flex-col gap-y-8">
      <header>
        <h1 className="text-3xl font-bold tracking-tight">HomePage</h1>
        <h2 className="text-muted-foreground text-sm">
          Your home place to start
        </h2>
      </header>

      <section className="flex grow flex-col items-center">
        <Link href={ticketsPath()} className="underline">
          Go to tickets
        </Link>
      </section>
    </div>
  );
}
