import { toast } from 'sonner';

import { useActionFeedback } from '../hooks/use-action-feedback';
import { ActionState } from '../utils/to-action-state';

type FormProps = {
  action: (payload: FormData) => void;
  actionState: ActionState;
  children: React.ReactNode;
};

export function Form({ action, actionState, children }: FormProps) {
  // Trigger a Toast notification when an create action is successful or has an error
  // TODO: I don't really like this approach, would rather handle toast messages more explicitly (e.g. in the action with the toast cookie pattern)
  useActionFeedback(actionState, {
    onSuccess: ({ actionState }) => {
      if (actionState.message) {
        toast.success(actionState.message);
      }
    },
    onError: ({ actionState }) => {
      if (actionState.message) {
        toast.error(actionState.message);
      }
    },
  });

  return (
    <form action={action} className="flex flex-col gap-y-2">
      {children}
    </form>
  );
}
