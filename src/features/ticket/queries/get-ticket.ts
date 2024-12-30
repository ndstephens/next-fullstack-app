import { initialTickets } from '@/data';

import { Ticket } from '../types';

export async function getTicket(ticketId: string): Promise<Ticket | null> {
  // Simulate a network request delay
  await new Promise((resolve) => setTimeout(resolve, 2000));

  const ticket = initialTickets.find((ticket) => ticket.id === ticketId);

  return new Promise((resolve) => {
    resolve(ticket || null);
  });
}