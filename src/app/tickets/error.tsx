'use client';

import { Placeholder } from '@/components/placeholder';

export default function Error({ error }: { error: Error }) {
  return (
    <div className="flex grow items-center justify-center">
      <Placeholder message={error.message || 'Something went wrong!'} />
    </div>
  );
}
