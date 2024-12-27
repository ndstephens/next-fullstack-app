import clsx from 'clsx';
import { type Metadata } from 'next';
import Link from 'next/link';

import { initialTickets } from '@/data';
import { ticketPath } from '@/paths';

export const metadata: Metadata = {
  title: 'Tickets',
};

const TICKET_ICONS = {
  DONE: '✅',
  OPEN: '❌',
  IN_PROGRESS: '🕒',
};

export default function TicketsPage() {
  return (
    <div className="flex grow flex-col gap-y-8">
      <header>
        <h1 className="text-3xl font-bold tracking-tight">TicketsPage</h1>
        <h2 className="text-muted-foreground text-sm">
          All your tickets in one place
        </h2>
      </header>

      <section className="animate-fade-in-from-top flex grow flex-col items-center gap-y-4">
        {initialTickets.map((ticket) => (
          <div
            key={ticket.id}
            className="flex w-full max-w-105 flex-col rounded-sm border border-slate-100 p-4"
          >
            <h3 className="truncate text-lg font-semibold">{ticket.title}</h3>
            <p
              className={clsx('truncate text-sm text-slate-400', {
                'line-through': ticket.status === 'DONE',
              })}
            >
              {ticket.content}
            </p>
            <div className="order-first">
              <span aria-hidden>{TICKET_ICONS[ticket.status]}</span>
              <p className="sr-only">Ticket status is: ${ticket.status}</p>
            </div>
            <Link href={ticketPath(ticket.id)} className="text-sm underline">
              View ticket
            </Link>
          </div>
        ))}
      </section>
    </div>
  );
}
