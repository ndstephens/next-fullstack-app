import { Ticket } from '@prisma/client';
import clsx from 'clsx';
import { LucideSquareArrowOutUpRight } from 'lucide-react';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

import { TICKET_ICONS } from '@/features/ticket/constants';

import { ticketPath } from '@/paths';

type TicketItemProps = {
  ticket: Ticket;
  isDetail?: boolean;
};

export function TicketItem({ ticket, isDetail }: TicketItemProps) {
  const ticketDetailsLink = (
    <Button variant="outline" size="icon" asChild>
      <Link
        href={ticketPath(ticket.id)}
        aria-label={`View details for ticket ${ticket.title}`}
      >
        <LucideSquareArrowOutUpRight className="h-4 w-4" aria-hidden />
      </Link>
    </Button>
  );

  return (
    <div
      className={clsx('flex w-full gap-x-1', {
        'max-w-145': isDetail,
        'max-w-105': !isDetail,
      })}
    >
      <Card className="w-full overflow-hidden">
        <CardHeader>
          <CardTitle className="flex items-center gap-x-2">
            <span aria-hidden>{TICKET_ICONS[ticket.status]}</span>
            <h3 className="truncate">{ticket.title}</h3>
            <p className="sr-only">{`Ticket status is ${ticket.status}`}</p>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p
            className={clsx('text-pretty whitespace-break-spaces', {
              'line-clamp-3': !isDetail,
            })}
          >
            {ticket.content}
          </p>
        </CardContent>
      </Card>

      {!isDetail && (
        <div className="flex flex-col gap-y-1">{ticketDetailsLink}</div>
      )}
    </div>
  );
}
