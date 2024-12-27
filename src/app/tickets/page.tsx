import { LucideCircleCheck, LucideFileText, LucidePencil } from 'lucide-react';
import { type Metadata } from 'next';
import Link from 'next/link';

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

import { initialTickets } from '@/data';
import { ticketPath } from '@/paths';

export const metadata: Metadata = {
  title: 'Tickets',
};

const TICKET_ICONS = {
  OPEN: <LucideFileText />,
  IN_PROGRESS: <LucidePencil />,
  DONE: <LucideCircleCheck />,
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

      <Separator />

      <section className="animate-fade-in-from-top flex grow flex-col items-center gap-y-4">
        {initialTickets.map((ticket) => (
          <Card key={ticket.id} className="w-full max-w-105">
            <CardHeader>
              <CardTitle className="flex items-center gap-x-2">
                <span aria-hidden>{TICKET_ICONS[ticket.status]}</span>
                <h3 className="truncate">{ticket.title}</h3>
                <p className="sr-only">{`Ticket status is: ${ticket.status}`}</p>
              </CardTitle>
            </CardHeader>

            <CardContent>
              <p className="line-clamp-3 text-pretty whitespace-break-spaces">
                {ticket.content}
              </p>
            </CardContent>

            <CardFooter>
              <Link href={ticketPath(ticket.id)} className="text-sm underline">
                View ticket
              </Link>
            </CardFooter>
          </Card>
        ))}
      </section>
    </div>
  );
}
