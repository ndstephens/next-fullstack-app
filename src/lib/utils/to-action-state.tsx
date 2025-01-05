import { ZodError } from 'zod';

type FieldErrors = Record<string, string[] | undefined>;

export type ActionState = {
  status?: 'SUCCESS' | 'ERROR';
  message: string;
  fieldErrors: FieldErrors;
  payload?: FormData;
  timeStamp: number;
};

export const EMPTY_ACTION_STATE: ActionState = {
  message: '',
  fieldErrors: {},
  timeStamp: Date.now(),
};

export function fromErrorToActionState(
  error: unknown,
  formData: FormData,
): ActionState {
  let message: string;
  let fieldErrors: FieldErrors;

  switch (true) {
    case error instanceof ZodError:
      message = '';
      fieldErrors = error.flatten().fieldErrors;
      break;
    case error instanceof Error:
      message = error.message;
      fieldErrors = {};
      break;
    default:
      message = 'An unknown error occurred';
      fieldErrors = {};
  }

  return {
    status: 'ERROR',
    message,
    fieldErrors,
    payload: formData,
    timeStamp: Date.now(),
  };
}

export function toActionState(
  status: ActionState['status'],
  message: string,
): ActionState {
  return {
    status,
    message,
    fieldErrors: {},
    timeStamp: Date.now(),
  };
}
