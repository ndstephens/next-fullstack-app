import { type Metadata } from 'next';
import Link from 'next/link';

import { Placeholder } from '@/components/placeholder';
import { buttonVariants } from '@/components/ui/button';

import { initialTickets } from '@/data';
import { TicketItem } from '@/features/ticket/components/ticket-item';
import { ticketsPath } from '@/paths';

export const metadata: Metadata = {
  title: 'Ticket',
};

type TicketPageProps = {
  params: Promise<{ ticketId: string }>;
};

export default async function TicketPage({ params }: TicketPageProps) {
  const { ticketId } = await params;

  const ticket = initialTickets.find((ticket) => ticket.id === ticketId);

  if (!ticket) {
    return (
      <div className="flex grow items-center justify-center">
        <Placeholder
          label="Ticket not found"
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

  return (
    <section className="animate-fade-in-from-top flex justify-center">
      <TicketItem ticket={ticket} isDetail />
    </section>
  );
}
