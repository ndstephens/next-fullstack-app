'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { z } from 'zod';

import { prisma } from '@/lib/prisma';

import { ticketPath, ticketsPath } from '@/paths';

const upsertTicketSchema = z.object({
  title: z.string().min(1).max(191),
  content: z.string().min(1).max(1024),
});

export const upsertTicket = async (
  id: string | undefined,
  _actionState: { message: string },
  formData: FormData,
) => {
  try {
    const data = upsertTicketSchema.parse({
      title: formData.get('title'),
      content: formData.get('content'),
    });

    await prisma.ticket.upsert({
      where: {
        id: id || '',
      },
      update: data,
      create: data,
    });

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    return { message: 'Something went wrong' };
  }

  revalidatePath(ticketsPath());

  if (id) {
    // updating a ticket
    redirect(ticketPath(id));
  }

  // creating a ticket
  return { message: 'Ticket created!' };
};
