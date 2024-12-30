import { LucideLoaderCircle } from 'lucide-react';

export function Spinner() {
  return (
    <div className="flex grow items-center justify-center self-center">
      <LucideLoaderCircle className="h-16 w-16 animate-spin" />
    </div>
  );
}
