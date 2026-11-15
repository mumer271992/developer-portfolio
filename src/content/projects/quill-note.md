### Situation

QuillNote was an early-stage note-taking app. It had no way to make money, no AI features, note content was stored unencrypted, and it wasn't live.

### Task

Turn it into a secure, revenue-ready SaaS product and launch it.

### Action

- **Payments:** Integrated Paddle subscriptions with trials, plan changes and credit top-ups. Webhooks are verified with HMAC signatures and protected against replays.
- **AI:** Built OpenAI-powered note summaries, backed by a token-based credit system.
- **Security:** Built a Go service that encrypts each user's notes with their own AES-256 key, managed through AWS KMS.
- **Launch:** Finished the Astro landing page, deployed the backend on a Linux VPS and shipped to production.
- Used **Claude Code** to build faster, while owning the architecture, security design and code review.

### Result

- Launched a production SaaS with paid subscriptions, AI features and encrypted note storage.
- Launched in X weeks <!-- replace with your real metric, or delete this line -->
