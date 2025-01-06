import { Ticket } from '@prisma/client';
import clsx from 'clsx';
import {
  LucidePencil,
  LucideSquareArrowOutUpRight,
  LucideTrash2,
} from 'lucide-react';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

import { TICKET_ICONS } from '@/features/ticket/constants';

import { ticketEditPath, ticketPath } from '@/paths';

import { deleteTicket } from '../actions/delete-ticket';

type TicketItemProps = {
  ticket: Ticket;
  isDetail?: boolean;
};

export function TicketItem({ ticket, isDetail }: TicketItemProps) {
  const ticketDetailsLink = (
    <Button variant="outline" size="icon" asChild>
      <Link
        prefetch
        href={ticketPath(ticket.id)}
        aria-label={`View details for ticket ${ticket.title}`}
      >
        <LucideSquareArrowOutUpRight className="h-4 w-4" aria-hidden />
      </Link>
    </Button>
  );

  const ticketEditLink = (
    <Button variant="outline" size="icon" asChild>
      <Link
        prefetch
        href={ticketEditPath(ticket.id)}
        aria-label={`Edit ticket ${ticket.title}`}
      >
        <LucidePencil className="h-4 w-4" aria-hidden />
      </Link>
    </Button>
  );

  const ticketDeleteButton = (
    <form action={deleteTicket.bind(null, ticket.id)}>
      <Button
        variant="outline"
        size="icon"
        aria-label={`Delete ticket ${ticket.title}`}
      >
        <LucideTrash2 className="h-4 w-4" aria-hidden />
      </Button>
    </form>
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
        <CardFooter className="flex justify-between">
          <p className="text-muted-foreground text-sm">{ticket.deadline}</p>
          {/* <p>{`$${(ticket.bounty / 100).toFixed(2)}`}</p> */}
          <p className="text-muted-foreground text-sm">{ticket.bounty}</p>
        </CardFooter>
      </Card>

      {/* CARD BUTTONS */}
      {isDetail ? (
        <div className="flex flex-col gap-y-1">
          {ticketEditLink}
          {ticketDeleteButton}
        </div>
      ) : (
        <div className="flex flex-col gap-y-1">
          {ticketDetailsLink}
          {ticketEditLink}
        </div>
      )}
    </div>
  );
}
