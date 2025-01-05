import { useEffect, useRef } from 'react';

import { ActionState } from '../utils/to-action-state';

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
