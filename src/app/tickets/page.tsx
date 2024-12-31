import { type Metadata } from 'next';
import { Suspense } from 'react';

import { Heading } from '@/components/heading';
import { Spinner } from '@/components/spinner';

import { TicketList } from '@/features/ticket/components/ticket-list';

export const metadata: Metadata = {
  title: 'Tickets',
};

export const dynamic = 'force-dynamic';

export default function TicketsPage() {
  return (
    <div className="flex grow flex-col gap-y-8">
      <Heading title="Tickets" subtitle="All your tickets in one place" />

      <Suspense fallback={<Spinner />}>
        <TicketList />
      </Suspense>
    </div>
  );
}
