<!-- BSUITE_BINDINGS:BEGIN -->
## b-* command-line tool bindings

Use these binaries when the current task needs agent-side verification before action.

### bground

Use `bground` when a factual claim should be checked against supplied evidence.

```sh
bground verify "<claim-type>:<target>:<assertion>" --evidence <id>=<value>
```

Exit codes: `0` proceed, `1` stop because evidence does not support the claim, `2` stop because evidence is missing or incomplete, `64` stop because invocation shape is invalid. Treat stdout as the directive for the next action.

### banchor

Use `banchor` before starting work that must stay aligned to a mission.

```sh
banchor induct "<task>" --mission <path-or-name>
```

Exit codes: `0` proceed, `1` stop because the task conflicts with the mission, `2` stop because mission evidence is missing or incomplete, `64` stop because invocation shape is invalid. Treat stdout as the directive for the next action.

### bsmell

Use `bsmell` before relying on a session summary or diff that may be steering away from the operator's original task.

```sh
bsmell scan --session <path-or-fd>
bsmell scan --diff <path>
```

Exit codes: `0` clean, `1` smell detected, `2` internal error, `64` malformed input. Treat stdout as the directive for the next action.

### bratch

Use `bratch` before treating a diff as safe to merge.

```sh
bratch compare --diff <path> --history <path-or-name>
```

Exit codes: `0` no regression, `1` regression detected, `2` internal error, `64` malformed input. Treat stdout as the directive for the next action.

### bwatch

Use `bwatch` before proceeding on work that may have been affected by external collaborator activity.

```sh
bwatch poll --source <name-or-url> --mission <path-or-name>
```

Exit codes: `0` nothing actionable, `1` actionable finding, `2` internal error, `64` malformed input. Treat stdout as the directive for the next action.

### bspector

Use `bspector` before installing an agent skill bundle or plugin manifest from an untrusted source.

```sh
bspector scan <artefact-path-or-url> --artefact-shape <shape>
```

Exit codes: `0` safe, `1` unsafe (refuse or downgrade strictness with explicit operator opt-in), `2` internal error, `64` malformed input. Treat stdout as the directive for the next action.
<!-- BSUITE_BINDINGS:END -->
