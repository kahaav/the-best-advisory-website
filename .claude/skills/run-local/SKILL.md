---
name: run-local
description: >
  Start the website locally with the Vite dev server and give the user the
  local URLs. Use this skill whenever the user asks to run, start, open,
  launch or preview the website or app on their own computer. Trigger for
  natural-language requests such as "run the site", "start the app locally",
  "open the website", "let me see it in the browser", "start the dev server",
  or "preview the production build". Do not use for publishing or deploying.
---

# Run locally

Start the website on this computer so the user can open it in the browser.

Run every step yourself. Do not just explain how to start it.

## 1. Check the setup

```sh
node --version
npm --version
```

- If `node` or `npm` is missing, stop and point the user to the
  "Install Node.js and npm" step in `README.md`.
- If `node_modules/` does not exist, run `npm install` first.
  If `npm install` fails, stop and report the error.

## 2. Check whether it is already running

The dev server uses port `5173`. If something already answers on
http://localhost:5173/the-best-advisory-website/, tell the user the site is already
running at that address and stop. Do not start a second server.

## 3. Start the dev server

```sh
npm run dev
```

- Run it in the background so it keeps running and the session is not blocked.
- Wait for Vite to print its `Local:` line, then read the URL from it.
  Vite may pick another port (e.g. `5174`) if `5173` is busy: use the port it prints.
- If it fails to start, report the error. Do not change project files to get past it
  unless the user asks.

The dev server reloads the page on its own when files change, so there is no need to restart it.

## 4. Preview the production build (only when asked)

When the user wants to see the site exactly as it will be published:

```sh
npm run build
npm run preview
```

Run `npm run preview` in the background as well. It serves `dist/`, usually on port `4173`.
If the build fails, stop and report the errors.

## 5. Report

Tell the user, in plain words:

- the site is running, at the local URL Vite printed, which includes the base path, e.g.
  http://localhost:5173/the-best-advisory-website/
- the design system page, at the same URL plus `design-system/`, e.g.
  http://localhost:5173/the-best-advisory-website/design-system/
- that changes to files show up in the browser on their own (dev server only);
- that they can ask to stop the site when they are done. Stop it with the `stop-local` skill.
