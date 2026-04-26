Security audit summary (automated)
=================================

Generated: npm audit + pip-audit (local run)

Key findings
------------
- npm (frontend/workspace `petrolumen`): multiple advisories found in `npm-audit.json`.
  - `next` — multiple advisories (several HIGH/Moderate) affecting versions `>=0.9.9` through `<15.x` and specific ranges; fix available requires major upgrade (recommended target: latest stable Next.js).
  - `esbuild` — moderate advisory affecting `<=0.24.2`; update `esbuild` (or dependents) to a fixed version.
  - `postcss` / `vite` — moderate/low advisories; update to patched versions.

- pip (backend): `pip-audit` found no known vulnerabilities for `requirements.txt` (report saved at `petrolumen/pip-audit.json`).

Recommendations
---------------
1. Prioritize upgrading `next` to a supported, patched major (test thoroughly for breaking changes).
2. Update `esbuild`, `postcss`, and `vite` to patched releases; consider running `npm audit fix` in a feature branch and run the full test suite.
3. Configure Dependabot (added in repository) and enable automatic PRs for patch/minor updates; review and merge after CI passes.
4. Pin critical dependencies in `package.json` (avoid overly permissive ranges) and commit lockfiles for every workspace.
5. For Python, keep running `pip-audit` in CI and pin versions in `requirements.txt` where stability is needed.

Next steps I can take (no input required)
---------------------------------------
- Open a PR that upgrades non-breaking minor/patch versions safely and runs tests.
- Create a branch and run `npm audit fix` + `npm install` + `npm test` and include results as a PR.
