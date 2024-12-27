import { type Metadata } from 'next';
import Link from 'next/link';

import { ticketsPath } from '@/paths';

export const metadata: Metadata = {
  title: 'Next Fullstack App',
};

export default function HomePage() {
  return (
    <section>
      <h1 className="text-2xl">HomePage</h1>

      <Link href={ticketsPath()} className="underline">
        Go to tickets
      </Link>
    </section>
  );
}
