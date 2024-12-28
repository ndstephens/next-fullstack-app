import Link from 'next/link';

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

import { TICKET_ICONS } from '@/features/ticket/constants';
import { Ticket } from '@/features/ticket/types';
import { ticketPath } from '@/paths';

type TicketItemProps = {
  ticket: Ticket;
};

export function TicketItem({ ticket }: TicketItemProps) {
  return (
    <Card className="w-full max-w-105">
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
  );
}
