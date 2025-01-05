import { prisma } from '@/lib/db/prisma';

export async function getTickets() {
  // TODO: add a try/catch block to handle errors ??
  return await prisma.ticket.findMany({
    orderBy: {
      createdAt: 'desc',
    },
  });
}
