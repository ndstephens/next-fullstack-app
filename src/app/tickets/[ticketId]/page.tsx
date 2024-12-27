import { type Metadata } from 'next';

import { initialTickets } from '@/data';

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
    return <h1 className="text-2xl">Ticket not found</h1>;
  }

  return (
    <section>
      <h1 className="text-2xl">TicketPage: {ticket.id}</h1>
      <h2 className="text-lg">{ticket.title}</h2>
      <p className="text-sm">{ticket.content}</p>
    </section>
  );
}
