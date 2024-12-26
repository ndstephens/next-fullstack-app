import { type Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ticket',
};

type TicketPageProps = {
  params: Promise<{ ticketId: string }>;
};

export default async function TicketPage({ params }: TicketPageProps) {
  const { ticketId } = await params;

  return (
    <section>
      <h2 className="text-lg">TicketPage: {ticketId}</h2>
    </section>
  );
}
