import { initialTickets } from '@/data';

import { Ticket } from '../types';

export async function getTickets(): Promise<Ticket[]> {
  // Simulate a network request delay
  await new Promise((resolve) => setTimeout(resolve, 1000));

  // throw new Error('Failed to fetch tickets');

  return new Promise((resolve) => {
    resolve(initialTickets);
  });
}
