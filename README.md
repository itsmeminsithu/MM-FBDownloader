# MM FBDownloader

React + Vite web app for downloading Facebook videos: paste a video link,
get video details, pick a quality (HD/SD), and download. Intended flow, as
coded in `App.tsx`: copy the link from the Facebook app or website, paste
it into the input, click "Get Video", wait for processing, then select a
quality and download.

## Repository status — build is blocked

This checkout is incomplete and does not build. `App.tsx` imports
components and a service that are not in the repository:

- Missing: `components/Navbar`, `components/Hero`, `components/VideoResult`,
  `components/Features`, `components/Footer`
- Missing: `services/mockFbApi` (provides `fetchVideoData`)

What is present: `App.tsx`, `index.tsx`, `index.html`,
`types.ts` (`VideoQuality`, `VideoData`, `DownloadHistoryItem`),
`package.json`, `vite.config.ts`, `tsconfig.json`, `metadata.json`.

Until the missing files are restored from another source, `npm run build`
fails on unresolvable imports and there is no working preview. This PR
does not invent replacements for them, and no preview is claimed.

## Tech stack

React 19, TypeScript, Vite 6, Tailwind CSS (via CDN in `index.html`),
`lucide-react`, Google Gemini API (`@google/genai` in dependencies; no
Gemini call exists in the present `App.tsx`).

## Project structure (as checked in)

```txt
MM-FBDownloader/
├── App.tsx              # Paste-link UI, result state, how-to section
├── index.tsx            # React entry point
├── index.html           # Page shell (title: MM FBDownloader)
├── types.ts             # VideoData and related types
├── package.json         # dev / build / preview scripts
├── vite.config.ts       # base: '/MM-FBDownloader/' (for project Pages)
├── tsconfig.json
└── metadata.json
```

## Run locally (once the missing files are restored)

**Prerequisites:** Node.js

1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`

`npm run build` builds for production; `npm run preview` previews the
production build locally.

## Live preview (GitHub Pages — blocked, not live)

Preview route, once the build works: Vite build deployed to Pages.
`vite.config.ts` already sets `base: '/MM-FBDownloader/'` for the project
site at `https://itsmeminsithu.github.io/MM-FBDownloader/`. After merge
and after the missing files are restored, a Pages build workflow must be
added manually via the GitHub web UI (workflow files cannot be pushed
through the Muse GitHub App — they return 403), and Pages is not live
until a workflow run succeeds and the URL actually loads. No mock or
screenshot page has been added as a substitute.

## License

MIT License. See [`LICENSE`](./LICENSE).
