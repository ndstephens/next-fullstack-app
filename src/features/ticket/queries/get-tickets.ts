import { initialTickets } from '@/data';

import { Ticket } from '../types';

export async function getTickets(): Promise<Ticket[]> {
  // Simulate a network request delay
  await new Promise((resolve) => setTimeout(resolve, 2000));

  return new Promise((resolve) => {
    resolve(initialTickets);
  });
}
