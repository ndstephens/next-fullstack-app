import { type Metadata } from 'next';
import Link from 'next/link';

import { Heading } from '@/components/heading';

import { ticketsPath } from '@/lib/paths';

export const metadata: Metadata = {
  title: 'Next Fullstack App',
};

export default function HomePage() {
  return (
    <div className="flex grow flex-col gap-y-8">
      <Heading title="Home" subtitle="Your home place to start" />

      <section className="flex grow flex-col items-center">
        <Link href={ticketsPath()} className="underline">
          Go to tickets
        </Link>
      </section>
    </div>
  );
}
