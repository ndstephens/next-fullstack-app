export const initialTickets = [
  {
    id: '1',
    title: 'Ticket 1',
    content: 'This is the content for ticket 1',
    status: 'DONE' as const,
  },
  {
    id: '2',
    title: 'Ticket 2',
    content: 'This is the content for ticket 2',
    status: 'OPEN' as const,
  },
  {
    id: '3',
    title: 'Ticket 3',
    content: 'This is the content for ticket 3',
    status: 'IN_PROGRESS' as const,
  },
];
