#!/usr/bin/env bash
set -euo pipefail

ROOT="$(pwd)"
TMP_DIR="$(mktemp -d)"
trap 'rm -rf "${TMP_DIR}"' EXIT

PACK_OUTPUT="$(npm pack --json)"
TARBALL="$(node -e "const data = JSON.parse(process.argv[1]); process.stdout.write(data[0].filename);" "${PACK_OUTPUT}")"

mkdir -p "${TMP_DIR}/consumer"
cp "${ROOT}/${TARBALL}" "${TMP_DIR}/consumer/package.tgz"
rm -f "${ROOT}/${TARBALL}"

cd "${TMP_DIR}/consumer"
npm init -y >/dev/null
npm install ./package.tgz >/dev/null

npx b --help >/dev/null
npx b install --target=claude --dry-run >/dev/null
npx b install --target=codex --dry-run >/dev/null
npx b install --target=cursor --dry-run >/dev/null

node -e "const api = require('@booga/b'); if (!api.SUPPORTED_TARGETS.includes('claude')) process.exit(1);" >/dev/null
node --input-type=module -e "import { SUPPORTED_TARGETS } from '@booga/b'; if (!SUPPORTED_TARGETS.includes('claude')) process.exit(1);" >/dev/null
