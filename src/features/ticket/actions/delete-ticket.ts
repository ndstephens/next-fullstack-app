'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

import { setCookieByKey } from '@/actions/cookies';

import { prisma } from '@/lib/db/prisma';

import { ticketsPath } from '@/paths';

export async function deleteTicket(id: string) {
  // TODO: add a try/catch block to handle errors ??
  await prisma.ticket.delete({
    where: {
      id,
    },
  });

  revalidatePath(ticketsPath());
  await setCookieByKey('toast', 'Ticket deleted');
  redirect(ticketsPath());
}
