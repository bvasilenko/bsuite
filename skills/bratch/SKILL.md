---
name: bratch
description: Prompt lookup tool. Agent names a regression signature from a fixed list; bratch returns the prompt for that regression signature. The prompt tells the agent how to check the diff against a baseline for that regression.
trigger: Use before treating a diff as safe to merge; the prompt walks you through the regression check for the named signature.
tool: Bash
---

# bratch

Call `bratch` to look up the prompt for a regression signature, then follow the prompt to check the diff against a baseline.

Canonical invocation:

```sh
bratch compare --diff <path> --history <path-or-name>
```

Exit codes:

- `0`: no regression.
- `1`: regression detected.
- `2`: internal error.
- `64`: malformed input.
