# b

Entry point for the b-* prompt lookup tools. Installs the tools, registers each as a Claude Code skill, Codex AGENTS template, or Cursor rule so the agent loop discovers and invokes them, and updates installed tools on demand.

## Install

```sh
npm install -D @booga/b
```

## Use

```sh
b install --target=claude
b install --target=codex
b install --target=cursor
b uninstall --target=claude
```

## License

MIT.
