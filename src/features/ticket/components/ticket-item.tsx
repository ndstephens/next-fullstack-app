import { LucideSquareArrowOutUpRight } from 'lucide-react';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

import { TICKET_ICONS } from '@/features/ticket/constants';
import { Ticket } from '@/features/ticket/types';
import { ticketPath } from '@/paths';

type TicketItemProps = {
  ticket: Ticket;
};

export function TicketItem({ ticket }: TicketItemProps) {
  const detailButton = (
    <Button variant="outline" size="icon" asChild>
      <Link href={ticketPath(ticket.id)}>
        <LucideSquareArrowOutUpRight className="h-4 w-4" />
      </Link>
    </Button>
  );

  return (
    <div className="flex w-full max-w-105 gap-x-1">
      <Card>
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
      </Card>

      <div className="flex flex-col gap-y-1">{detailButton}</div>
    </div>
  );
}
