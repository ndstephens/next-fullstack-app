import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const tickets = [
  {
    title: 'Ticket 1',
    content: 'This is the content for ticket 1 from the db',
    status: 'DONE' as const,
  },
  {
    title: 'Ticket 2',
    content: 'This is the content for ticket 2 from the db',
    status: 'OPEN' as const,
  },
  {
    title: 'Ticket 3',
    content: 'This is the content for ticket 3 from the db',
    status: 'IN_PROGRESS' as const,
  },
];

async function seed() {
  console.time('db seed');

  await prisma.ticket.deleteMany();

  await prisma.ticket.createMany({
    data: tickets,
  });

  console.timeEnd('db seed');
}

seed();
