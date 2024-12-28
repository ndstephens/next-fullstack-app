import { LucideKanban } from 'lucide-react';
import Link from 'next/link';

import { buttonVariants } from '@/components/ui/button';

import { homePath, ticketsPath } from '@/paths';

export function Header() {
  return (
    <header className="bg-background/60 sticky top-0 flex justify-between border-b px-5 py-2.5 backdrop-blur">
      <Link href={homePath()} className={buttonVariants({ variant: 'ghost' })}>
        <LucideKanban />
        <span className="text-lg font-semibold">TicketBounty</span>
      </Link>
      <nav>
        <Link
          href={ticketsPath()}
          className={buttonVariants({ variant: 'default' })}
        >
          Tickets
        </Link>
      </nav>
    </header>
  );
}
