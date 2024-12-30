import { type Metadata } from 'next';

import { Heading } from '@/components/heading';

import { TicketItem } from '@/features/ticket/components/ticket-item';
import { getTickets } from '@/features/ticket/queries/get-tickets';

export const metadata: Metadata = {
  title: 'Tickets',
};

export default async function TicketsPage() {
  const tickets = await getTickets();

  return (
    <div className="flex grow flex-col gap-y-8">
      <Heading title="Tickets" subtitle="All your tickets in one place" />

      <section className="animate-fade-in-from-top flex grow flex-col items-center gap-y-4">
        {tickets.map((ticket) => (
          <TicketItem key={ticket.id} ticket={ticket} />
        ))}
      </section>
    </div>
  );
}
