# MovieExplorer

A responsive movie/show explorer built with React and the free
[TVMaze API](https://www.tvmaze.com/api). You can browse the library, search by
title, and open any title in a details modal.

**Live site:** https://movie-explorer-n.vercel.app/
## Features

- **Home page** with a navbar, hero section, a "highest rated" strip pulled from
  the API, and a footer.
- **Listing page** with a search bar. Typing filters the grid through the
  `/search/shows` endpoint; an empty box falls back to the full `/shows` list.
- **Debounced search** (450ms) so the API is not hit on every keystroke.
- **Details modal** with the poster, title, overview, rating, premiere date,
  genres, network, status, runtime and language. Closes with the ✕ button, the
  Close button, the Escape key, or a click on the backdrop.
- **Responsive grid** — 1 column on mobile, 2 on small tablets, 3 on laptops and
  4 on wide screens.
- Loading, empty and error states for the listing page, plus a 404 route.

## Tech stack

| Purpose | Tool |
| --- | --- |
| UI | React 18 |
| Routing | React Router v6 |
| Styling | Tailwind CSS |
| Build | Vite |
| Data | TVMaze API |

## Getting started

```bash
npm install
npm run dev         # http://localhost:5173
npm run build       # production build in /dist
npm run preview     # preview the build locally
```

No API key or `.env` file is needed — TVMaze is open.

## Folder structure

```
movie-explorer/
├── public/
│   ├── _redirects              # SPA fallback for Netlify
│   └── ticket.svg              # favicon
├── src/
│   ├── api/
│   │   └── tvmaze.js           # every network call lives here
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Footer.jsx
│   │   │   ├── Layout.jsx
│   │   │   └── Navbar.jsx
│   │   ├── movies/
│   │   │   ├── MovieCard.jsx
│   │   │   ├── MovieGrid.jsx
│   │   │   ├── MovieModal.jsx
│   │   │   └── SearchBar.jsx
│   │   └── ui/
│   │       ├── Icons.jsx
│   │       ├── Message.jsx
│   │       └── Spinner.jsx
│   ├── hooks/
│   │   ├── useDebounce.js
│   │   ├── useLockScroll.js
│   │   └── useShows.js
|   |
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Movies.jsx
│   │   └── NotFound.jsx
│   └── utils/
│       ├── App.jsx             # routes
│       ├── index.css           # tailwind layers + a few 
│       └── main.jsx            # entry point
custom classes 
├── .gitignore
├── index.html
├── package-lock.json
├── package.json
├── postcss.config.js
├── README.md
├── tailwind.config.js
├── vercel.json                 # SPA fallback for Vercel
└── vite.config.js
```

## API endpoints used

| What | Endpoint |
| --- | --- |
| Full listing | `GET https://api.tvmaze.com/shows?page=0` |
| Search | `GET https://api.tvmaze.com/search/shows?q=:query` |

The search endpoint returns `[{ score, show }]`, so the response is mapped down
to the `show` objects before it reaches the components.

## Design notes

The palette is built around an old cinema: deep velvet reds for the background
(`#1C0A10` → `#4E2533`), cream for the text (`#F6EDE1`) and a marquee gold
accent (`#E8A33D`). Fraunces is used for headings and Outfit for the interface
text.

## Deployment

The project is a static Vite build, so any host works.

- **Vercel:** import the repo, framework preset *Vite*, build `npm run build`,
  output `dist`.
- **Netlify:** build `npm run build`, publish `dist` (the `_redirects` file is
  already there so refreshing `/movies` won't 404).

---

© 2026 MovieExplorer - @jubumax
