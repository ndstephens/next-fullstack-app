import { useEffect, useRef } from 'react';

import { ActionState } from '../utils/to-action-state';

// TODO: I'm not sure how useful this is.  It's somewhat brittle b/c the onSuccess and onError functions are not guaranteed to be called b/c the page they are on may be unmounted before they can run.  That why the toast-cookie pattern had to be implemented b/c of redirects called on the server

type OnArgs = {
  actionState: ActionState;
};

type UseActionFeedbackOptions = {
  onSuccess?: (onArgs: OnArgs) => void;
  onError?: (onArgs: OnArgs) => void;
};

export function useActionFeedback(
  actionState: ActionState,
  options: UseActionFeedbackOptions,
) {
  const prevTimeStamp = useRef(actionState.timeStamp);

  useEffect(() => {
    // prevent running on the same actionState object more than once
    if (prevTimeStamp.current === actionState.timeStamp) {
      return;
    }
    prevTimeStamp.current = actionState.timeStamp;

    if (actionState.status === 'SUCCESS') {
      options.onSuccess?.({ actionState });
    }

    if (actionState.status === 'ERROR') {
      options.onError?.({ actionState });
    }
  }, [actionState, options]);
}
