import { ActionState } from '@/lib/utils/to-action-state';

type FieldErrorProps = {
  actionState: ActionState;
  name: string;
};

export function FieldError({ actionState, name }: FieldErrorProps) {
  const errorMessage = actionState.fieldErrors[name]?.[0];

  if (!errorMessage) {
    return null;
  }

  return <span className="text-xs text-red-500">{errorMessage}</span>;
}
