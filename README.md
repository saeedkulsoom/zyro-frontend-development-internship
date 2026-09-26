# Manzil — Local Delivery & Logistics Management Platform

Frontend Development Internship — Week 4: Delivery Tracking & Notifications

## Week 3 recap
- Order creation, order management, rider assignment, and delivery status updates
- Rider delivery actions and customer order views connecting the Business, Rider, and Customer experiences

## Week 4: what's new
- **Tracking page** — dedicated view per order showing live delivery progress
- **Map interface** — simulated route diagram with pickup, rider, and delivery markers (Pickup → Rider → Delivery)
- **Pickup / delivery locations** — shown clearly on the tracking page (e.g. Pickup: Mardan, Delivery: Timergara)
- **Rider location** — simulated current position on the route (e.g. Chakdara)
- **Delivery route** — visual path connecting pickup → rider → delivery
- **Current status** — status pill (Pending pickup / Picked up / In transit / Delivered) plus a full delivery timeline
- **Estimated delivery** — simulated ETA shown on every order (e.g. "25 minutes")
- **Rider information** — name, avatar initials, phone number, vehicle info, current status
- **Notifications** — bell icon with unread badge in the nav; opens a dropdown listing events (order created, rider assigned, accepted, picked up, delivery started/completed)
- **Search** — search orders by Order ID, customer name, or rider name
- **Filters** — filter orders by status and by date
- **Responsive design** — layout adapts across mobile, tablet, and desktop; map, status, rider info, and notifications stay readable at every size

## Tech
Single-page HTML/CSS/JavaScript — no build step, no external map API (rider/route positions are simulated per the task spec).

## How to view
Open `manzil-tracking.html` in any browser, or visit the hosted preview.

## Files
- `manzil-tracking.html` — the tracking page (map, rider info, ETA, notifications, search, filters)
- `README.md` — this file

## Screenshots
_Add screenshots of the tracking page (desktop + mobile) here before submitting._

## Next week
Week 5 task will be assigned or discussed later.
