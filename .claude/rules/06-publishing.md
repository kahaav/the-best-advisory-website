# Publishing

Pushing to `main` deploys the live site through GitHub Actions (`.github/workflows/deploy.yml`).

## When to publish

When the user explicitly wants to publish, commit, push, release or send the current changes
to the remote repository:

- Invoke the `publish` skill (`.claude/skills/publish/SKILL.md`) and run it.
- Read the request by its intent, not by exact keywords. "Publish my work", "publish now",
  "push the code", "we are done" and "send the changes" are publishing requests when the
  context shows the user wants the current work published.
- Do not ask which publishing workflow to use. Do not just explain how to publish.
- Merely discussing publishing is not a request to publish.

## When to roll back

When the user wants to undo, revert or roll back a publish, or restore the site to the
previous version, invoke the `rollback` skill (`.claude/skills/rollback/SKILL.md`) and run it.

## Rules

- Before publishing: review the changes, run the checks in `00-general.md`, and leave out
  secrets and unrelated files.
- Never publish when a check fails.
- Commit messages describe the actual change in the imperative mood. No vague messages.
- Never force-push, never skip hooks, never rewrite pushed history. Undo with `git revert`.
- If authentication fails, stop and report it.
