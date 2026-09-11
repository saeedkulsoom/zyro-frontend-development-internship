# Zyroo Logistics — Local Delivery & Logistics Management Platform

**Week 1 MVP prototype** for the Zyroo Frontend Development Internship. A React + Tailwind
CSS front end for dispatchers to manage orders and riders, and for customers to track a
delivery in real time.

---

## ✨ Features

- **Home page** — hero section with a live-route mockup, a three-card feature grid
  (real-time analytics, fast dispatch, transparent tracking), and a metrics showcase.
- **Dashboard** — KPI summary cards (total, pending, in delivery, completed orders) with
  trend badges, plus a recent-activity feed of the latest orders.
- **Orders** — a filterable list of every order (All / Pending / In Transit / Delivered),
  responsive table on desktop and stacked cards on mobile, each row linking to its
  order details page.
- **Order details** — a full summary card (customer, rider, route, package) and a visual
  progress stepper: `Created → Assigned → Picked Up → In Transit → Delivered`, with a
  direct link into the public customer tracking view.
- **Customer tracking** — a public search-by-order-ID page showing route nodes, an
  estimated delivery card, assigned rider details, and the same animated progress
  tracker.
- **Responsive layout** — sticky navbar with a collapsible mobile menu, and a footer with
  quick links and branding.

## 🛠️ Tech stack

- [React](https://react.dev/) 18 (functional components + hooks)
- [React Router DOM](https://reactrouter.com/) v6 for client-side routing
- [Tailwind CSS](https://tailwindcss.com/) for styling and the design system
- [lucide-react](https://lucide.dev/) for icons
- [Vite](https://vitejs.dev/) as the build tool

## 📂 Project structure

```
zyroo-logistics/
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
├── README.md
└── src/
    ├── main.jsx                # React entry point (BrowserRouter)
    ├── App.jsx                 # Route configuration + page shell
    ├── index.css                # Tailwind directives + base styles
    ├── data/
    │   └── mockOrders.js        # Sample orders, status pipeline, dashboard stats
    ├── components/
    │   ├── Navbar.jsx            # Sticky nav with mobile toggle
    │   ├── Footer.jsx             # Branding + quick links
    │   ├── StatusBadge.jsx        # Reusable status pill (Pending/In Transit/Delivered)
    │   └── RouteTimeline.jsx      # Shared 5-step progress stepper
    └── pages/
        ├── HomePage.jsx
        ├── DashboardPage.jsx
        ├── OrdersPage.jsx
        ├── OrderDetailsPage.jsx
        └── TrackingPage.jsx
```

## 🚀 Getting started

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server (http://localhost:5173)
npm run dev

# 3. Build for production
npm run build

# 4. Preview the production build locally
npm run preview
```

## 🧭 Routes

| Path                | Page                                                |
| ------------------- | ---------------------------------------------------- |
| `/`                  | Home                                                  |
| `/dashboard`         | Dashboard (KPIs + recent activity)                    |
| `/orders`            | Orders list with status filters                       |
| `/orders/:orderId`   | Order details + progress stepper                       |
| `/track`             | Customer tracking (search by order ID)                |
| `/track/:orderId`    | Customer tracking, pre-filled for a specific order    |

## 🔍 Try it out

The app ships with sample orders `DL001`–`DL008`. A good place to start:

- Visit `/orders` and filter by status.
- Click into `DL001` (In Transit, Mardan → Timergara) to see the progress stepper.
- Visit `/track` and search `DL003` to see a Pending order with no rider assigned yet.

## 🗺️ Roadmap (post Week 1)

- Replace `src/data/mockOrders.js` with live API calls to the Zyroo backend.
- Add authentication for the dispatcher dashboard.
- Real-time updates via WebSockets instead of static mock data.

---

Built for the **Zyroo Frontend Development Internship** — Week 1 deliverable.
