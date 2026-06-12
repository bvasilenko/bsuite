#!/usr/bin/env node
const { spawnSync } = require('node:child_process');
const path = require('node:path');
const fs = require('node:fs');

if (process.env.B_SKIP_AUTO_INSTALL === '1') {
  process.exit(0);
}

const TARGETS = ['claude', 'codex', 'cursor'];
const SKIP_TARGETS = (process.env.B_SKIP_TARGETS || '').split(',').map((s) => s.trim()).filter(Boolean);
const isGlobal = process.env.npm_config_global === 'true';
const scope = isGlobal ? 'user' : 'project';
const cwd = process.env.INIT_CWD || process.cwd();

const packageRoot = path.resolve(__dirname, '..');
if (!isGlobal && path.resolve(cwd) === packageRoot) {
  // Running npm install inside the package's own workspace for development;
  // skip auto-install so dev setups stay clean.
  process.exit(0);
}

const cli = path.join(packageRoot, 'dist', 'cli.js');
if (!fs.existsSync(cli)) {
  console.warn('@booga/b: dist/cli.js missing; skipping auto-install.');
  process.exit(0);
}

let failures = 0;
for (const target of TARGETS) {
  if (SKIP_TARGETS.includes(target)) {
    console.log(`@booga/b: skipping target=${target} per B_SKIP_TARGETS.`);
    continue;
  }
  console.log(`@booga/b: auto-registering target=${target} scope=${scope}`);
  const result = spawnSync(
    process.execPath,
    [cli, 'install', `--target=${target}`, `--scope=${scope}`],
    { stdio: 'inherit', cwd }
  );
  if ((result.status ?? 1) !== 0) {
    failures += 1;
    console.warn(`@booga/b: target=${target} install exited with code ${result.status}; continuing.`);
  }
}
if (failures > 0) {
  console.warn(`@booga/b: ${failures} of ${TARGETS.length - SKIP_TARGETS.length} targets failed to auto-register. Set B_SKIP_AUTO_INSTALL=1 to skip on future installs.`);
}
process.exit(0);
