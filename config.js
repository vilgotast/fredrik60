// === CONFIGURATION ===
// Fill in these values before deploying.
// Create a fine-grained PAT at https://github.com/settings/personal-access-tokens/new
//   - Repository access: Only select repositories -> vilgotast/fredrik60
//   - Repository permissions: Contents = Read and write
//   - Token expiration: 7 days (or however long the event lasts)
// Paste the token below. REVOKE IT IMMEDIATELY after the event.
const CONFIG = {
  owner: "vilgotast",
  repo: "fredrik60",
  branch: "main",
  uploadsFolder: "uploads",
  // ⚠️ PASTE YOUR TOKEN HERE (starts with github_pat_...)
  token: "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",
  // Categories for the challenge. Edit to match your event.
  categories: [
    "Best sunset",
    "Funniest moment",
    "Group selfie",
    "Most creative",
    "Wildcard",
  ],
  maxFileSizeMB: 5,
};
