# ZYROO Delivery Platform: Week 5

React + Vite frontend for the ZYROO local delivery and logistics platform.

## Run
```bash
npm install
cp .env.example .env
npm run dev
```
Demo logins: `biz@zyroo.com / Biz@12345`, `rider@zyroo.com / Rider@123`, `cust@zyroo.com / Cust@1234`.

## Architecture
```
src/
  config/env.js          reads VITE_* variables
  services/api.js        central API layer (login, orders, assign rider, delivery status, notifications)
  services/mockServer.js in-memory REST stand-in with latency, role checks, delivery simulation
  context/AppContext.jsx shared state + actions
  hooks/                 useDebounce
  components/            OrderCard, TrackPanel, Filters, OrderModal, Notifications, ProtectedRoute
  layouts/MainLayout.jsx header, nav, toast, modal host
  pages/                 Login, Orders, Riders
  utils/                 format helpers, form validation
```

## API setup
All requests go through `src/services/api.js`. It currently talks to `mockServer.js`. To use a real backend, set `VITE_API_URL` and replace each function body with `fetch(`${CFG.API_URL}/...`)`. Function names and return shapes stay the same, so no component changes are needed.

## State management
React Context + `useReducer` holds user, role, orders, active delivery, notifications, loading flags and API errors. Pages read from `useApp()`, so every screen stays in sync.

## Real-time updates
Polling every `VITE_POLL_MS` ms refreshes orders and notifications silently (no spinner). The mock server also advances Picked Up and In Transit deliveries by itself to simulate rider progress, so the tracking panel updates without a page refresh. Polling pauses while an optimistic update is in flight.

## Optimistic UI
Accept delivery, status updates, assign, cancel and mark-as-read update the UI at once. On failure the previous state is restored and an error toast and an error notification appear. Turn on "Simulate API failure" in the header to see it.

## Environment variables
See `.env.example`. Never commit `.env` or put secrets in source code.

## Features
Role-based actions (business, rider, customer), search, status, rider and date filters, pagination, loading, slow, error, retry, empty and unauthorized states, form validation, delivery timeline.

## Screenshots
Add screenshots here: login, orders, tracking, notifications, filters, error and retry.
