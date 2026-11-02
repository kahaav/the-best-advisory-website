---
name: publish
description: >
  Publish the current project changes to the configured Git remote.
  Use this skill whenever the user explicitly asks to publish, push,
  commit and push, release their work, send code to GitHub, upload
  the latest changes, or make their latest work available remotely.
  Trigger for natural-language requests such as "publish my work",
  "publish now", "please push the changes", "we are done, publish",
  "commit everything and push", "send my code to GitHub", or
  "make the latest changes available". Do not use for merely
  discussing publishing. This skill performs Git commit and push.
---

# Publish

Commit the current work with a meaningful message and push it to `origin`.
Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the site
and deploys it to GitHub Pages: https://kahaav.github.io/the-best-advisory-website/

Run every step yourself. Do not ask which workflow to use and do not just explain the steps.

## 1. Check the state

```sh
git status
git branch --show-current
git fetch origin
git log --oneline origin/<branch>..HEAD
```

- Detached HEAD, or a merge or rebase in progress: stop and explain.
- No uncommitted changes and no unpushed commits: tell the user there is nothing to publish and stop.
- No uncommitted changes but unpushed commits exist: skip to step 3, then step 6.

## 2. Review the changes

Read `git status` and `git diff` (plus new untracked files) before staging anything.

Leave out, and tell the user about:

- secrets: `.env*` files, API keys, tokens, passwords, private keys, certificates;
- local or generated files: `node_modules/`, `dist/`, `.claude/settings.local.json`, logs, temp files;
- large binary files that do not belong to the site;
- changes clearly unrelated to the user's work (ask if you are unsure).

If you find a secret in a tracked file, stop and tell the user. Do not publish it.

## 3. Run the required checks

```sh
npx tsc -b
npm run lint
npm run build
```

If any check fails, stop. Report the errors and do not commit or push.
Never disable lint rules or skip checks to get past a failure.

## 4. Stage the files

Stage the reviewed files by name (`git add <files>`), or `git add -A` only when every
change was reviewed and belongs in the commit. Confirm with `git status`.

## 5. Write the commit message

Base it on the actual diff, not on guesses.

- Summary line: imperative mood, under ~70 characters, says what changed for the site
  (e.g. `Add scroll reveal to the events section`, `Update contact details in footer`).
- If the change touches several areas, add a blank line and a short bullet list.
- Do not use vague messages such as `update`, `changes`, `fix stuff` or `wip`.

```sh
git commit -m "<summary>" -m "<optional body>"
```

## 6. Push

```sh
git push origin <branch>
```

- Never force-push (`--force`, `--force-with-lease`) and never use `--no-verify`.
- Rejected because the remote has new commits: run `git pull --rebase origin <branch>`.
  If the rebase has conflicts, run `git rebase --abort`, stop and explain.
  If it succeeds, run the step 3 checks again, then push once more.
- Authentication or permission error: stop and report it. Point the user to the
  "Authenticate GitHub" step in `README.md`. Do not try to work around it.

## 7. Report

Tell the user, in plain words:

- the commit hash and message;
- the branch it was pushed to;
- on `main`: the site is deploying and will be live in a few minutes at the URL above.
  If the `gh` CLI is available, `gh run list --limit 1` shows the deploy status.
- anything you left out in step 2, and why.

To undo a publish, use the `rollback` skill.
