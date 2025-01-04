import { LucideMessageSquareWarning } from 'lucide-react';
import { cloneElement } from 'react';

import { cn } from '@/lib/utils/styles';

type PlaceholderProps = {
  message: string;
  icon?: React.ReactElement<React.SVGAttributes<SVGSVGElement>>;
  link?: React.ReactElement<React.AnchorHTMLAttributes<HTMLAnchorElement>>;
};

export function Placeholder({
  message,
  icon = <LucideMessageSquareWarning aria-hidden />,
  link,
}: PlaceholderProps) {
  return (
    <div className="flex flex-col items-center justify-center gap-y-2">
      {cloneElement(icon, {
        className: cn('w-10 h-10', icon.props.className),
        'aria-hidden': true,
      })}
      <p className="text-center text-xl">{message}</p>
      {!!link &&
        cloneElement(link, {
          className: cn('mt-2', link.props.className),
        })}
    </div>
  );
}
