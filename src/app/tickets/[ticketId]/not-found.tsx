import Link from 'next/link';

import { Placeholder } from '@/components/placeholder';
import { buttonVariants } from '@/components/ui/button';

import { ticketsPath } from '@/lib/paths';

export default function NotFound() {
  return (
    <div className="flex grow items-center justify-center">
      <Placeholder
        message="Ticket not found"
        link={
          <Link
            href={ticketsPath()}
            className={buttonVariants({ variant: 'outline' })}
          >
            Go to Tickets
          </Link>
        }
      />
    </div>
  );
}
