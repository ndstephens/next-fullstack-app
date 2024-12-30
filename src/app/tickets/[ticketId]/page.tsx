import { type Metadata } from 'next';
import Link from 'next/link';

import { Placeholder } from '@/components/placeholder';
import { buttonVariants } from '@/components/ui/button';

import { TicketItem } from '@/features/ticket/components/ticket-item';
import { getTicket } from '@/features/ticket/queries/get-ticket';

import { ticketsPath } from '@/paths';

export const metadata: Metadata = {
  title: 'Ticket',
};

type TicketPageProps = {
  params: Promise<{ ticketId: string }>;
};

export default async function TicketPage({ params }: TicketPageProps) {
  const { ticketId } = await params;

  const ticket = await getTicket(ticketId);

  if (!ticket) {
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

  return (
    <section className="animate-fade-in-from-top flex justify-center">
      <TicketItem ticket={ticket} isDetail />
    </section>
  );
}
