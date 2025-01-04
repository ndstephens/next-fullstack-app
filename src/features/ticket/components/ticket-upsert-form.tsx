'use client';

import { Ticket } from '@prisma/client';

import { SubmitButton } from '@/components/form/submit-button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

import { upsertTicket } from '../actions/upsert-ticket';

type TicketUpsertFormProps = {
  ticket?: Ticket;
};

export function TicketUpsertForm({ ticket }: TicketUpsertFormProps) {
  return (
    <form
      action={upsertTicket.bind(null, ticket?.id)}
      className="flex flex-col gap-y-2"
    >
      <Label htmlFor="title">Title</Label>
      <Input type="text" name="title" id="title" defaultValue={ticket?.title} />

      <Label htmlFor="content">Content</Label>
      <Textarea name="content" id="content" defaultValue={ticket?.content} />

      <SubmitButton label={ticket ? 'Edit' : 'Create'} />
    </form>
  );
}
