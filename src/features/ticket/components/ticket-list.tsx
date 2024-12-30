import { getTickets } from '../queries/get-tickets';
import { TicketItem } from './ticket-item';

export async function TicketList() {
  const tickets = await getTickets();

  return (
    <section className="animate-fade-in-from-top flex grow flex-col items-center gap-y-4">
      {tickets.map((ticket) => (
        <TicketItem key={ticket.id} ticket={ticket} />
      ))}
    </section>
  );
}
