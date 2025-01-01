import { type Metadata } from 'next';
import { Suspense } from 'react';

import { CardCompact } from '@/components/card-compact';
import { Heading } from '@/components/heading';
import { Spinner } from '@/components/spinner';

import { TicketCreateForm } from '@/features/ticket/components/ticket-create-form';
import { TicketList } from '@/features/ticket/components/ticket-list';

export const metadata: Metadata = {
  title: 'Tickets',
};

export default function TicketsPage() {
  return (
    <div className="flex grow flex-col gap-y-8">
      <Heading title="Tickets" subtitle="All your tickets in one place" />

      <CardCompact
        title="Create Ticket"
        description="A new ticket will be created"
        content={<TicketCreateForm />}
        className="w-full max-w-105 self-center"
      />

      <Suspense fallback={<Spinner />}>
        <TicketList />
      </Suspense>
    </div>
  );
}
