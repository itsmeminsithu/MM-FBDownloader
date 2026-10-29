# MM FBDownloader

A small React + Vite web app for downloading Facebook videos. Paste a video link, get the video details back, pick HD or SD.

The UI is kept simple and mobile-first, using the red, green and yellow of the Myanmar flag.

## Status

This does not build right now, and I am not going to pretend it does.

`App.tsx` imports files that are not in this repo:

- `components/Navbar`, `components/Hero`, `components/VideoResult`
- `components/Features`, `components/Footer`
- `services/mockFbApi`

Until those are restored, `npm run build` fails with "Could not resolve ./components/Navbar". What is here is the app shell: `App.tsx`, `index.tsx`, `types.ts`, Vite and TypeScript config.

## Run it (once the missing files are back)

```
npm install
npm run dev
```

## Stack

React 19, TypeScript, Vite 6, lucide-react.

## Licence

MIT — see `LICENSE`. Copyright (c) 2025 Min SiThu.
