### Bug 1: Accessing `/admin` as normal user freezes app and logs out

- **Environment**: Windows 11, Chrome (latest), App running locally with Docker
- **Severity**: Critical
- **Priority**: High

#### Steps to Reproduce:
1. Login using a regular user account (not an admin).
2. In the browser address bar, manually enter: `http://localhost:5173/admin`
3. Press Enter.

#### Expected Behavior:
- The app should either:
  - Redirect the user back to the dashboard with or without a “403 Forbidden” message  
  - Or show a “Not Authorized” message with navigation options

#### Actual Behavior:
- The app loads an empty page (`/admin`) with a blank table.
- After a few seconds, the app **freezes** and **logs the user out automatically**.

#### Suggested Fix or Area to Investigate:
- Check if the frontend properly validates user roles before loading the `/admin` route.
- Add a guard or redirection mechanism if a non-admin user accesses protected routes.
- Ensure the backend returns a clean `403 Forbidden` and that the frontend gracefully handles this error instead of freezing.

---
