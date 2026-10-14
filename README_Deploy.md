# Deploy AK Digital Studio (free)

## GitHub Pages
1. Create a repo, upload the *contents* of the `site` folder (index.html at root).
2. Settings > Pages > Source: "Deploy from a branch" > main / root > Save.
3. Live at https://USERNAME.github.io/REPO/

## Cloudflare Pages
1. Workers & Pages > Create > Pages > Connect to Git (or "Upload assets" and drag the folder).
2. Framework: None. Build command: empty. Output directory: `/`.
3. Live at https://yourproject.pages.dev

## Edit details
Open `js/script.js` and change the CONFIG block at the top (phone, email, Instagram).
