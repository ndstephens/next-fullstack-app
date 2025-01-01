import { notFound } from 'next/navigation';

import { CardCompact } from '@/components/card-compact';

import { TicketUpdateForm } from '@/features/ticket/components/ticket-update-form';
import { getTicket } from '@/features/ticket/queries/get-ticket';

type TicketEditPageProps = {
  params: Promise<{ ticketId: string }>;
};

export default async function TicketEditPage({ params }: TicketEditPageProps) {
  const { ticketId } = await params;
  const ticket = await getTicket(ticketId);

  if (!ticket) {
    notFound();
  }

  return (
    <div className="flex grow flex-col items-center justify-center">
      <CardCompact
        title="Edit Ticket"
        description="Edit an existing ticket"
        content={<TicketUpdateForm ticket={ticket} />}
        className="animate-fade-in-from-top w-full max-w-105"
      />
    </div>
  );
}
