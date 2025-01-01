'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

import { prisma } from '@/lib/prisma';

import { ticketsPath } from '@/paths';

export async function deleteTicket(id: string) {
  // TODO: add a try/catch block to handle errors ??
  await prisma.ticket.delete({
    where: {
      id,
    },
  });

  revalidatePath(ticketsPath());
  redirect(ticketsPath());
}
