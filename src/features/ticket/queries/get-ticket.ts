import { prisma } from '@/lib/db/prisma';

export async function getTicket(id: string) {
  // TODO: add a try/catch block to handle errors ??
  return await prisma.ticket.findUnique({
    where: {
      id,
    },
  });
}
