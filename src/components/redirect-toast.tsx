'use client';

import { useEffect } from 'react';
import { toast } from 'sonner';

import { flashMessage } from '@/actions/cookies';

export function RedirectToast() {
  useEffect(() => {
    const showCookieToast = async () => {
      const message = await flashMessage();

      if (message) {
        toast.success(message);
      }
    };

    showCookieToast();
  }, []);

  return null;
}
