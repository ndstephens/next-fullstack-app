import { ZodError } from 'zod';

export type ActionState = { message: string; payload?: FormData };

export function fromErrorToActionState(
  error: unknown,
  formData: FormData,
): ActionState {
  let message: string;

  switch (true) {
    case error instanceof ZodError:
      // if validation error with Zod, return first error message
      message = error.errors[0].message;
      break;
    case error instanceof Error:
      // if another error instance, return the message
      // e.g. database error
      message = error.message;
      break;
    default:
      // if not an error but something else crashed, return generic message
      message = 'An unknown error occurred';
  }

  return {
    message,
    payload: formData,
  };
}
