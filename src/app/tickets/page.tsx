import { type Metadata } from 'next';
import Link from 'next/link';

import { initialTickets } from '@/data';
import { ticketPath } from '@/paths';

export const metadata: Metadata = {
  title: 'Tickets',
};

export default function TicketsPage() {
  return (
    <section>
      <h1 className="text-2xl">TicketsPage</h1>

      {initialTickets.map((ticket) => (
        <div key={ticket.id}>
          <h2 className="text-lg">{ticket.title}</h2>
          <Link href={ticketPath(ticket.id)} className="text-sm underline">
            View ticket
          </Link>
        </div>
      ))}
    </section>
  );
}
