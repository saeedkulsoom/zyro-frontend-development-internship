# ZYROO Delivery — Week 3: Order & Delivery Management

A local delivery & logistics management platform frontend, built for the ZYROO Frontend
Development Internship. Pure HTML/CSS/JavaScript (no build step, no dependencies) using
`localStorage` as a mock backend, so it runs by opening `index.html` directly or via any
static file server.

## Features (Task 03)

- **Create Order** — Business users create a new delivery order with customer name/phone,
  pickup & delivery address, package details, priority, and payment method.
- **View Orders** — Business orders table: Order ID, Customer, Pickup, Delivery, Rider,
  Status, Date, Actions.
- **Edit Order** — Update customer info, addresses, package details, and priority (locked
  once an order is Delivered/Cancelled).
- **Assign Rider** — Inline dropdown on the orders table assigns a rider and flips status
  to `Assigned`.
- **Cancel Order** — Confirmation modal before cancelling.
- **Rider Dashboard** — Tabs for Today's / Pending / Active / Completed deliveries.
- **Accept Delivery**, **Mark as Picked Up**, **Mark as Delivered** — status-flow actions
  for riders (`Pending → Assigned → Accepted → Picked Up → In Transit → Delivered`).
- **Customer Orders** — Current vs. previous orders, order details, live delivery status.
- **Order Details** — Full detail view with a visual delivery timeline, shared (with access
  control) across Business, Rider, and Customer roles.
- Carried over from Weeks 1–2: login, registration, logout, protected routes, and
  role-based navigation for Business / Rider / Customer accounts.

## Project Structure

```
zyroo-week3/
├── index.html
├── css/
│   └── style.css
├── js/
│   ├── data.js          # mock data layer (localStorage), seed data, Order/User stores
│   ├── auth.js           # session handling, login/register/logout, role guards
│   ├── router.js          # hash-based router
│   ├── app.js             # bootstrap
│   ├── components/
│   │   └── navbar.js       # role-aware nav
│   └── pages/
│       ├── login.js
│       ├── register.js
│       ├── business-orders.js       # orders list + assign/cancel
│       ├── business-order-form.js   # create + edit order
│       ├── order-details.js         # shared details + timeline
│       ├── rider-dashboard.js       # tabs + status actions
│       └── customer-orders.js       # current/previous orders
└── README.md
```

## Running Locally

No build tools needed:

1. Open `index.html` directly in a browser, **or**
2. Serve the folder (recommended, avoids any local-file quirks):
   ```bash
   npx serve .
   # or
   python3 -m http.server 8080
   ```

## Demo Accounts

The app seeds mock users and orders on first load.

| Role     | Email                  | Password    |
|----------|-------------------------|-------------|
| Business | business@zyroo.test     | business123 |
| Rider    | hamza@zyroo.test        | rider123    |
| Rider    | bilal@zyroo.test        | rider123    |
| Customer | customer@zyroo.test     | customer123 |

You can also register new accounts for any role from the Register screen.

## Main Delivery Flow

```
Business Creates Order → Rider Assigned → Rider Accepts →
Picked Up → In Transit → Delivered → Customer Checks Status
```

## Notes / Next Steps

- Data currently persists to `localStorage` per browser; swap `data.js` for real API calls
  when a backend is available — the `UserStore` / `OrderStore` interfaces are designed to
  map 1:1 onto REST endpoints.
- Screenshots for the deliverable go in `screenshots/` (add after a local run — see the
  Week 3 requirements for the pages/states to capture: create order, orders list,
  assign rider, rider dashboard tabs, order details/timeline, customer orders).
