# Local Delivery & Logistics Management Platform

A role-based frontend for managing local deliveries end to end: businesses create and assign orders, riders fulfil them, and customers track them in near real time.

**Repository:** https://github.com/saeedkulsoom/zyro-frontend-development-internship
**Demo:** run locally (see Installation). Demo walkthrough is in `docs/DEMO_SCRIPT.md`.

## Problem Statement
Small local businesses often coordinate deliveries over calls and chats. Orders get lost, riders are unclear about status, and customers have no visibility. This platform gives each role one clear dashboard and one consistent order lifecycle.

## Features
- Authentication: login, registration, logout, session handling
- Protected routes and role-based access, with a 403 Unauthorized page
- Order lifecycle: Pending → Assigned → Accepted → Picked Up → In Transit → Delivered (Cancelled is a separate final state)
- Simulated real-time sync: dashboards poll every 3 seconds and update without a full page refresh (also syncs across browser tabs)
- Notifications for key order events
- Search (debounced), status filter and pagination
- Form validation (required fields, phone, email), loading, empty and error states
- Responsive layout, keyboard focus styles, labelled form fields, light/dark theme
- Safe rendering: all user input is HTML-escaped

## User Roles
| Role | Can do |
|---|---|
| Business | Create orders, assign riders, cancel orders, view stats, search/filter/paginate, view history |
| Rider | Accept assigned deliveries, update Picked Up / In Transit / Delivered, view history |
| Customer | Track active orders, view timeline, rider info, notifications and previous orders |

## Demo Accounts
Password for all: `1234`
- Business: `biz@demo.com`
- Rider: `rider@demo.com`
- Customer: `cust@demo.com`

## Technology Stack
HTML, CSS and vanilla JavaScript in a single file (`index.html`). Browser `localStorage` acts as the mock API/database. No build step and no dependencies.

## Project Structure
```
index.html          the complete application (UI, logic, styles)
docs/               testing checklist and demo script
screenshots/        final screenshots
.gitignore
```

## Installation
```bash
git clone https://github.com/saeedkulsoom/zyro-frontend-development-internship.git
cd zyro-frontend-development-internship
```
Then open `index.html` in a browser (double-click it, or use the VS Code Live Server extension).

## Environment Setup
None required. The app uses no secrets or environment variables.

## API Information
This version uses a mock API layer on top of `localStorage`:
| Key | Content |
|---|---|
| `zu` | users |
| `zo` | orders (with status history) |
| `zn` | notifications |

Actions (create, assign, accept, next status, cancel) validate the user role and the current order status before changing data. To reset the data, clear the site's localStorage.

## Screenshots
Add images to `screenshots/` and link them here:
- Business dashboard
- Rider dashboard
- Customer tracking
- Mobile view

## Testing
Manual test checklist: `docs/TESTING_CHECKLIST.md`. Check on Chrome, Edge and Firefox, and on mobile, tablet and desktop widths.

## Future Improvements
- Real backend API with a database
- WebSocket live updates and map tracking
- Convert to React + Vite + Tailwind with code splitting
- Push notifications
- Automated tests
