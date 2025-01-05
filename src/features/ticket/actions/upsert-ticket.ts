'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { z } from 'zod';

import {
  ActionState,
  fromErrorToActionState,
  toActionState,
} from '@/features/form/utils/to-action-state';

import { prisma } from '@/lib/db/prisma';

import { ticketPath, ticketsPath } from '@/paths';

const upsertTicketSchema = z.object({
  title: z.string().trim().min(1).max(191),
  content: z.string().trim().min(1).max(1024),
});

export const upsertTicket = async (
  id: string | undefined,
  _actionState: ActionState,
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
  } catch (error) {
    return fromErrorToActionState(error, formData);
  }

  revalidatePath(ticketsPath());

  // updated a ticket
  if (id) {
    redirect(ticketPath(id));
  }

  // created a ticket
  return toActionState('SUCCESS', 'Ticket created');
};
