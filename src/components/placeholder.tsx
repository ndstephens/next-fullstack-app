import { LucideMessageSquareWarning } from 'lucide-react';
import { cloneElement } from 'react';

import { cn } from '@/lib/utils';

type PlaceholderProps = {
  label: string;
  icon?: React.ReactElement<{ className: string }>;
  link?: React.ReactElement<{ className: string }>;
};

export function Placeholder({
  label,
  icon = <LucideMessageSquareWarning />,
  link,
}: PlaceholderProps) {
  return (
    <div className="flex flex-col items-center justify-center gap-y-2">
      {cloneElement(icon, {
        className: cn('w-10 h-10', icon.props.className),
      })}
      <h1 className="text-center text-2xl font-semibold">{label}</h1>
      {!!link &&
        cloneElement(link, {
          className: cn('mt-2', link.props.className),
        })}
    </div>
  );
}
