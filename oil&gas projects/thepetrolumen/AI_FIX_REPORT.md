AI Fix Report
=============

Summary
-------
- Performed a repo-wide audit and implemented runtime-safe Tauri imports, a single-instance lock for the Python FastAPI backend, more deterministic Tauri window sizing, and a smoke-test launcher with Playwright walkthroughs.

Key changes
-----------
- `src-tauri/src/main.rs`: improved backend spawn logic, port checks, window sizing retries, and child cleanup.
- `petrolumen/lib/tauri-api.ts`: runtime-safe dynamic wrapper for `@tauri-apps/api` to avoid SSR imports.
- `backend/main.py`: cross-platform temp-file single-instance lock to prevent duplicate backends.
- `petrolumen/scripts/launch_and_test_release.ps1`: launch/copy/start/inspect automation and optional Playwright run.
- `petrolumen/tauri-web/`: Vite bundle used by Tauri `beforeBuildCommand` (added/updated web assets).
- Misc: Next.js server shim (`shims/tauri-server-shim.js`), config and packaging improvements.

Commands executed (selected)
---------------------------
- `npm ci && npm run build` (petrolumen, tauri-web) — built web assets used by Tauri.
- `npx @tauri-apps/cli info` — inspected Tauri environment.
- `python -m venv .venv && .venv\\Scripts\\python -m pip install -r requirements.txt && pytest` — created venv and ran tests.
- Copied `petrolumen/dist/backend.exe` into `src-tauri/bundle/resources/backend.exe` for packaging.
- `node scripts/ui_walkthrough.js` — Playwright smoke walkthrough, produced `build/ui_walk/walk_summary.json` and screenshots.

Verification
------------
- Backend pytest: 2 passed (petrolumen/tests).
- Playwright smoke run completed and produced artifacts in `petrolumen/build/ui_walk/`.

Artifacts & paths
-----------------
- Packaged backend: `petrolumen/dist/backend.exe`
- Bundled backend (copied): `petrolumen/src-tauri/bundle/resources/backend.exe`
- UI walkthrough: `petrolumen/build/ui_walk/walk_summary.json` and screenshots

Branch and commits
------------------
- Branch `ai/fix-workspace` created and changes committed locally (38 files changed). I did not push the branch upstream.

Next steps (recommended)
------------------------
- If you want this published, run: `git push --set-upstream origin ai/fix-workspace`.
- Re-run full CI builds on a clean machine/CI runner to validate lockfile integrity and final packaging.

If you want, I can push the branch upstream and/or run a full Tauri bundle build next.
