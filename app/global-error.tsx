'use client';

import { useEffect } from 'react';

export default function GlobalErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // optional: Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <html lang="en">
      <body>
        <h1>Something went wrong!</h1>
        <button onClick={() => reset()}>Try again</button>
      </body>
    </html>
  );
}

// `global-error.tsx` replaces the root `layout.tsx` when active and so must define its own `<html>` and `<body>` tags
