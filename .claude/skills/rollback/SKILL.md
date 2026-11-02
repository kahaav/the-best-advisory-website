---
name: rollback
description: >
  Undo the latest publish by reverting the most recently pushed commit(s)
  on the remote and pushing the revert. Use this skill whenever the user
  asks to undo, revert, roll back, cancel or take back a publish or push,
  or to restore the site to how it was before the last change. Trigger for
  natural-language requests such as "undo the last publish", "roll back",
  "revert the last push", "the site is broken, go back", "take that change
  back", or "restore the previous version". Do not use for undoing
  uncommitted local edits. This skill creates a revert commit and pushes it.
---

# Rollback

Undo the latest publish by adding a **revert commit** and pushing it.
History is never rewritten: no `git reset` on pushed commits, no force-push.
Pushing to `main` redeploys the site through `.github/workflows/deploy.yml`.

Run every step yourself. Do not just explain how to roll back.

## 1. Check the state

```sh
git status
git branch --show-current
git fetch origin
```

- Detached HEAD, or a merge, rebase or revert in progress: stop and explain.
- Local branch behind `origin/<branch>`: run `git pull --rebase origin <branch>` first.
- Local commits not yet pushed (`git log origin/<branch>..HEAD`): they are not published,
  so they are not part of the rollback. Tell the user and ask whether to keep them before going on.
- Uncommitted changes: keep them safe with `git stash push -u -m "before rollback"`
  and restore them at the end with `git stash pop`.

## 2. Find the latest publish

The latest publish is the commit(s) that the last push added to `origin/<branch>`.

1. Look at the remote-tracking reflog:

   ```sh
   git reflog show --date=iso origin/<branch> -n 5
   ```

   If the newest entry is an `update by push`, the previous entry is where the remote was before it.
   Revert the range `<previous>..origin/<branch>`.
2. If the reflog does not show it (for example, the push came from another computer),
   revert only the newest commit: `origin/<branch>`.

Show the commits that will be reverted:

```sh
git log --oneline <range>
```

If the user asked for something specific ("undo the footer change", "go back two publishes"),
pick the matching commits instead. If it is unclear which commits they mean, ask.
If the range contains a commit that is itself a revert, or the user wants to undo
a rollback, revert that revert commit the same way.

## 3. Revert

Make one revert commit for the whole range:

```sh
git revert --no-commit <oldest>^..<newest>
```

For a single commit: `git revert --no-commit <commit>`.
For a merge commit add `-m 1`.

If there are conflicts, run `git revert --abort`, restore any stash, stop and explain.

## 4. Run the required checks

```sh
npx tsc -b
npm run lint
npm run build
```

If any check fails, run `git revert --abort`, restore any stash, and report the errors.
Do not push a rollback that breaks the build.

## 5. Commit and push

Write a meaningful message that names what is being undone:

```sh
git commit -m "Revert \"<original summary>\"" -m "Rolls back <hash(es)>: <one line on why, if the user said>"
git push origin <branch>
```

- Never force-push and never use `--no-verify`.
- Rejected because the remote moved: `git pull --rebase origin <branch>`, run the checks again, push once more.
- Authentication or permission error: stop and report it.

Then run `git stash pop` if you stashed in step 1. Report any conflicts it causes.

## 6. Report

Tell the user, in plain words:

- which commit(s) were undone (hash and message);
- the new revert commit hash;
- on `main`: the previous version is being redeployed and will be live in a few minutes at
  https://kahaav.github.io/the-best-advisory-website/
- that the rollback itself can be undone by asking to roll back again.
