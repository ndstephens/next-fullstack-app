import { LucideKanban } from 'lucide-react';
import Link from 'next/link';

import { ThemeSwitcher } from '@/components/theme/theme-switcher';
import { buttonVariants } from '@/components/ui/button';

import { homePath, ticketsPath } from '@/lib/paths';

export function Header() {
  return (
    <header className="bg-background/60 sticky top-0 flex items-center justify-between border-b px-5 py-2.5 backdrop-blur">
      <Link href={homePath()} className={buttonVariants({ variant: 'ghost' })}>
        <LucideKanban aria-hidden />
        <span className="text-lg font-semibold">TicketBounty</span>
      </Link>

      <div className="flex items-center gap-x-2">
        <ThemeSwitcher />
        <nav>
          <Link
            href={ticketsPath()}
            className={buttonVariants({ variant: 'default' })}
          >
            Tickets
          </Link>
        </nav>
      </div>
    </header>
  );
}
