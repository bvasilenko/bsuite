---
name: bspector
description: Prompt lookup tool. Agent names a vulnerability pattern from a fixed list; bspector returns the prompt for that vulnerability pattern. The prompt tells the agent how to check the skill manifest for that vulnerability.
trigger: Use before installing an agent skill bundle or plugin manifest from an untrusted source.
tool: Bash
---

# bspector

Call `bspector` to look up the prompt for a vulnerability pattern, then follow the prompt to scan a skill / plugin manifest.

Canonical invocation:

```sh
bspector scan <artefact-path-or-url> --artefact-shape <shape>
```

Exit codes:

- `0`: safe.
- `1`: unsafe; refuse or downgrade strictness with explicit operator opt-in.
- `2`: internal error.
- `64`: malformed input.
