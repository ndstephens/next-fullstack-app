'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { z } from 'zod';

import {
  ActionState,
  fromErrorToActionState,
  toActionState,
} from '@/features/form/utils/to-action-state';

import { setCookieByKey } from '@/actions/cookies';

import { prisma } from '@/lib/db/prisma';
import { toCents } from '@/lib/utils/currency';

import { ticketPath, ticketsPath } from '@/paths';

const upsertTicketSchema = z.object({
  title: z.string().trim().min(1).max(191),
  content: z.string().trim().min(1).max(1024),
  deadline: z.string().date(),
  bounty: z.coerce.number().positive(),
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
      deadline: formData.get('deadline'),
      bounty: formData.get('bounty'),
    });

    const dbData = {
      ...data,
      bounty: toCents(data.bounty), // convert currency to cents
    };

    await prisma.ticket.upsert({
      where: {
        id: id || '',
      },
      update: dbData,
      create: dbData,
    });
  } catch (error) {
    // TODO: might refactor to get the error message returned and then explicitly trigger the toast notification using the cookie pattern
    return fromErrorToActionState(error, formData);
  }

  revalidatePath(ticketsPath());

  // updated a ticket
  if (id) {
    await setCookieByKey('toast', 'Ticket updated');
    redirect(ticketPath(id));
  }

  // created a ticket
  // TODO: might refactor this to handle the toast notification explicitly using the cookie pattern
  return toActionState('SUCCESS', 'Ticket created');
};
