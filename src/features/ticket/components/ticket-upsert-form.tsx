'use client';

import { Ticket } from '@prisma/client';
import { useActionState } from 'react';

import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

import { FieldError } from '@/features/form/components/field-error';
import { Form } from '@/features/form/components/form';
import { SubmitButton } from '@/features/form/components/submit-button';
import { EMPTY_ACTION_STATE } from '@/features/form/utils/to-action-state';

import { fromCents } from '@/lib/utils/currency';

import { upsertTicket } from '../actions/upsert-ticket';

type TicketUpsertFormProps = {
  ticket?: Ticket;
};

export function TicketUpsertForm({ ticket }: TicketUpsertFormProps) {
  const [actionState, action] = useActionState(
    upsertTicket.bind(null, ticket?.id),
    EMPTY_ACTION_STATE,
  );

  return (
    <Form action={action} actionState={actionState}>
      <Label htmlFor="title">Title</Label>
      <Input
        type="text"
        name="title"
        id="title"
        defaultValue={
          (actionState.payload?.get('title') as string) ?? ticket?.title
        }
      />
      <FieldError actionState={actionState} name="title" />

      <Label htmlFor="content">Content</Label>
      <Textarea
        name="content"
        id="content"
        defaultValue={
          (actionState.payload?.get('content') as string) ?? ticket?.content
        }
      />
      <FieldError actionState={actionState} name="content" />

      <div className="mb-1 grid grid-cols-2 gap-x-2">
        <div>
          <Label htmlFor="deadline">Deadline</Label>
          <Input
            type="date"
            name="deadline"
            id="deadline"
            defaultValue={
              (actionState.payload?.get('deadline') as string) ??
              ticket?.deadline
            }
          />
          <FieldError actionState={actionState} name="deadline" />
        </div>

        <div>
          <Label htmlFor="bounty">Bounty ($)</Label>
          <Input
            type="number"
            step="0.01"
            min="0.01"
            placeholder="e.g. 4.99"
            name="bounty"
            id="bounty"
            defaultValue={
              (actionState.payload?.get('bounty') as string) ??
              (ticket?.bounty ? fromCents(ticket.bounty) : '')
            }
          />
          <FieldError actionState={actionState} name="bounty" />
        </div>
      </div>

      <SubmitButton label={ticket ? 'Edit' : 'Create'} />
    </Form>
  );
}
