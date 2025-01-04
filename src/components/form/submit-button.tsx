import { LucideLoaderCircle } from 'lucide-react';
import { useFormStatus } from 'react-dom';

import { Button } from '../ui/button';

type SubmitButtonProps = {
  label: string;
};

export function SubmitButton({ label }: SubmitButtonProps) {
  const { pending } = useFormStatus();

  return (
    <Button disabled={pending} type="submit">
      {pending && <LucideLoaderCircle className="h-4 w-4 animate-spin" />}
      {label}
    </Button>
  );
}

//* `useFormStatus` needs to be in a separate component b/c it has to be called within a `form` element (this SubmitButton component will exist within a `form` element)
