---
name: bsmell
description: Prompt lookup tool. Agent names a smell category from a fixed list; bsmell returns the prompt for that smell category. The prompt tells the agent how to check the session for that smell.
trigger: Use before relying on a session summary or diff that might be steering away from the operator's original task.
tool: Bash
---

# bsmell

Call `bsmell` to look up the prompt for a specific deflection-pattern smell category, then follow the prompt to check the session.

Canonical invocation:

```sh
bsmell scan --session <path-or-fd>
bsmell scan --diff <path>
```

Exit codes:

- `0`: clean (no smell detected by the prompt).
- `1`: smell detected.
- `2`: internal error.
- `64`: malformed input.
