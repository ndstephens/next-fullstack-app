import { type Metadata } from 'next';
import { notFound } from 'next/navigation';

import { TicketItem } from '@/features/ticket/components/ticket-item';
import { getTicket } from '@/features/ticket/queries/get-ticket';

export const metadata: Metadata = {
  title: 'Ticket Details',
};

type TicketPageProps = {
  params: Promise<{ ticketId: string }>;
};

export default async function TicketPage({ params }: TicketPageProps) {
  const { ticketId } = await params;
  const ticket = await getTicket(ticketId);

  if (!ticket) {
    notFound();
  }

  return (
    <section className="animate-fade-in-from-top flex justify-center">
      <TicketItem ticket={ticket} isDetail />
    </section>
  );
}
