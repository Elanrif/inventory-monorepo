This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

## Husky, pre-commit and commit-msg

This project uses Husky + lint-staged + Commitlint to automate formatting and commit message validation.

1. Install development dependencies

```bash
npm install --save-dev husky lint-staged prettier eslint @commitlint/cli @commitlint/config-conventional
```

2. Initialize Husky (run once)

```bash
npx husky install
```

3. Add the `pre-commit` hook (runs lint-staged)

```bash
npx husky add .husky/pre-commit "npx --no-install lint-staged"
```

Expected `.husky/pre-commit` content

```sh
#!/bin/sh
. "$(dirname \"$0\")/_/husky.sh"

npx --no-install lint-staged
```

4. Add the `commit-msg` hook (validates commit messages with Commitlint)

```bash
npx husky add .husky/commit-msg "npx --no-install commitlint --edit $1"
```

Expected `.husky/commit-msg` content

```sh
#!/usr/bin/env sh
. "$(dirname -- \"$0\")/_/husky.sh"

npx --no-install commitlint --edit $1
```

5. `lint-staged` configuration (example in `package.json`)

```json
"lint-staged": {
	"*.+(js|jsx|ts|tsx|json|css|scss|md)": [
		"npx prettier --write",
		"npx eslint --fix --ext .js,.jsx,.ts,.tsx"
	]
}
```

Note: Do not include `git add` in lint-staged tasks — modern versions add fixed files automatically.

6. Commitlint configuration (create `commitlint.config.js` at repo root)

```js
module.exports = {
  extends: ['@commitlint/config-conventional'],
};
```

Useful commands

```bash
# Format all files locally
npm run format

# Run Prettier check (CI)
npm run prettier

# Temporarily bypass hooks
git commit -m "message" --no-verify
```

Notes

- Hooks are shell scripts: on Windows use Git Bash or WSL if you run into execution issues.
- Avoid running long tasks (full test suites) in `pre-commit`; prefer `pre-push` or CI for heavy checks.

## Resources

- Commitlint GitHub: https://github.com/conventional-changelog/commitlint
- Article (French) about Git hooks and Commitlint: https://comprendre-git.com/fr/automatisation/git-hooks-et-commitlint/
