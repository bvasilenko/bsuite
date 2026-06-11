---
name: bwatch
description: Prompt lookup tool. Agent names a finding category from a fixed list; bwatch returns the prompt for that finding category. The prompt tells the agent how to check the external tracker for that finding.
trigger: Use before proceeding on work that may have been affected by external collaborator activity (sprint board, plugin marketplace, competitor launch, runbook update).
tool: Bash
---

# bwatch

Call `bwatch` to look up the prompt for a finding category, then follow the prompt to check an external tracker source.

Canonical invocation:

```sh
bwatch poll --source <name-or-url> --mission <path-or-name>
```

Exit codes:

- `0`: nothing actionable.
- `1`: actionable finding.
- `2`: internal error.
- `64`: malformed input.
