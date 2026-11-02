---
name: stop-local
description: >
  Stop the website running locally (the Vite dev server or the production
  preview). Use this skill whenever the user asks to stop, close, shut down
  or kill the local site, app or dev server. Trigger for natural-language
  requests such as "stop the site", "close the app", "shut down the dev
  server", "I'm done, stop it" or "kill the preview". Do not use for undoing
  changes or rolling back a publish.
---

# Stop locally

Stop the local website server and make sure it no longer answers.

Run every step yourself. Do not just explain how to stop it.

Stopping only the `npm run dev` / `npm run preview` process is not enough: on Windows the
Vite server it started (`node ... vite.js`) keeps running. Always stop the process that
listens on the port.

## 1. Stop the background task

If you started the server in this session (`run-local` skill), stop that background task first.

## 2. Find what still listens on the site's ports

The dev server uses `5173` (or `5174`, `5175`, ... if that was busy). The preview uses `4173`.

Windows (PowerShell):

```powershell
Get-NetTCPConnection -State Listen -LocalPort 5173,5174,5175,4173 -ErrorAction SilentlyContinue |
  ForEach-Object { Get-CimInstance Win32_Process -Filter "ProcessId = $($_.OwningProcess)" } |
  Select-Object ProcessId, Name, CommandLine
```

macOS / Linux:

```sh
lsof -nP -iTCP:5173,5174,5175,4173 -sTCP:LISTEN
ps -o pid,command -p <pid>
```

- Nothing listening: the site is already stopped. Tell the user and stop.
- Only stop a process whose command line runs this project's Vite
  (`...\website\node_modules\...\vite`). If a port is used by something else, leave it
  alone and tell the user what it is.

## 3. Stop it

Windows: `Stop-Process -Id <pid> -Confirm:$false`
macOS / Linux: `kill <pid>`

## 4. Confirm

Run the step 2 check again. The port must be free. If the process is still there,
report it instead of retrying in a loop.

## 5. Report

Tell the user, in plain words, that the site is stopped and the local link no longer opens.
They can start it again by asking to run the site.
