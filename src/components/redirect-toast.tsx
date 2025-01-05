'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';
import { toast } from 'sonner';

import { flashMessage } from '@/actions/cookies';

// TODO: maybe rename this to CookieToast since it's more about showing a toast notification based on a cookie and should probably be the sole way to show toast notifications coming from the server.  Otherwise toasts can be called directly from the client where applicable

export function RedirectToast() {
  // TODO: force this useEffect to run on every path change.  This shouldn't be necessary b/c it exists within the root template (which should be rerendered on every route change) but it seems to be necessary for now because templates are still buggy
  const pathname = usePathname();

  useEffect(() => {
    const showCookieToast = async () => {
      const message = await flashMessage();

      if (message) {
        toast.success(message);
      }
    };

    showCookieToast();
  }, [pathname]);

  return null;
}
