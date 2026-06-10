# bsuite

Entry point for the b-* prompt lookup tools. Installs the tools, registers each as a Claude Code skill, Codex AGENTS template, or Cursor rule so the agent loop discovers and invokes them, and updates installed tools on demand.

## Install

```sh
npm install -D @booga/bsuite
```

## Use

```sh
bsuite install --target=claude
bsuite install --target=codex
bsuite install --target=cursor
bsuite uninstall --target=claude
```

## License

MIT.
