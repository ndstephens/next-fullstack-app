# Next.js Project Template

This is a [Next.js](https://nextjs.org/) project template bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First:

```bash
pnpm install
pnpm prepare
```

Then run the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

---

## Update and Configure

- Project `name` and dependencies in [package.json](package.json)
- Emoji used for favicon in [app/icon.tsx](app/icon.tsx)
  - Or delete that file and use a `favicon.ico` file within `app/`
- Metadata in [app/layout.tsx](app/layout.tsx) and [app/page.tsx](app/page.tsx)
- Default styles (and customized gray color) in [app/main.css](app/main.css)
- Default styles on the `<body>` tag in [app/layout.tsx](app/layout.tsx)
- Style all error pages - [app/error.tsx](app/error.tsx), [app/global-error.tsx](app/global-error.tsx), and [app/not-found.tsx](app/not-found.tsx)
  - Possibly create an `ErrorBoundary` component for reuse
- Update `paths` in [tsconfig.json](tsconfig.json) and `importOrder` in [prettier.config.js](prettier.config.js)
- Update [next.config.ts](next.config.ts)
