import { ZodError } from 'zod';

type FieldErrors = Record<string, string[] | undefined>;

export type ActionState = {
  message: string;
  fieldErrors: FieldErrors;
  payload?: FormData;
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
    message,
    fieldErrors,
    payload: formData,
  };
}
