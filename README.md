# Fredrik60 Photo Challenge

A minimal static site for a one-time event: guests upload a picture per
category, then everyone views the gallery at the end. Hosted on GitHub Pages,
uploads stored directly in the repo via the GitHub Contents API.

## Setup (5 minutes)

1. **Create the uploads folder** so the gallery has somewhere to list from.
   In the `fredrik60` repo on GitHub, create a file at
   `uploads/.gitkeep` (empty) on the `main` branch. You can do this via the
   web UI: Add file → Create new file → name it `uploads/.gitkeep` → Commit.

2. **Create a fine-grained PAT** at
   https://github.com/settings/personal-access-tokens/new
   - Repository access: **Only select repositories** → `vilgotast/fredrik60`
   - Repository permissions: **Contents** = Read and write
   - Expiration: 7 days (or however long the event lasts)

3. **Paste the token** into `config.js` (replace `YOUR_TOKEN_HERE`).
   Also edit the `categories` array to match your event's challenges.

4. **Enable GitHub Pages**: in the repo → Settings → Pages → Source →
   Deploy from branch → `main` / root. Wait ~1 min for the site to build.

5. Open `https://vilgotast.github.io/fredrik60/` and share it with guests.

## After the event

- Revoke the PAT at https://github.com/settings/personal-access-tokens
- (Optional) delete the repo, or just delete the `uploads/` contents.

## How it works

- `index.html` — guest picks a category + image, JS base64-encodes it and
  `PUT`s it to `uploads/<category>-<name>-<timestamp>.<ext>` in the repo.
- `gallery.html` — reads the `uploads/` folder via the GitHub API
  (no token needed for a public repo) and renders images grouped by category.

## Notes / limitations

- The PAT is embedded in client-side JS. Anyone viewing source during the
  event can read it. That's why it's scoped to **only** this throwaway repo
  with **only** Contents read/write, and revoked right after. Do not reuse
  this token for anything else.
- GitHub rate-limits unauthenticated API reads to 60/hour per IP. For a
  small event this is fine; if many guests hit the gallery at once, some
  may see "Failed to load" — just refresh.
- Max file size per upload is 5 MB (configurable in `config.js`).
