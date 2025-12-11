# WAIVERS APP (Frontend)

Frontend application built with **React + TypeScript + Vite** to register and manage rafting tour waivers.

This app consumes the **WAIVERS API (Backend)** to:

- Submit new waivers with a digital signature.
- Authenticate an admin user.
- View waivers and download their PDF (via the backend).

---

## Features

- **Multi-language UI**
  - Implemented with **i18next** and **react-i18next**.
  - Supported languages: English, Spanish, French, German, Dutch.
  - Floating language selector (`FloatButton`) using Ant Design `Dropdown`.

- **Public flow**
  - **Home** (`Home.tsx`):
    - Hero section with info about the waiver process.
    - “Start” button that sends the user to the terms page.
  - **Terms & Conditions** (`Terms.tsx`):
    - Shows the legal text.
    - Button to continue to the waiver form.
  - **Waiver form** (`WaiverForm.tsx`):
    - Built with **Ant Design** `Form`, `Input`, `Checkbox`, `DatePicker`, `InputNumber`.
    - Captures:
      - Participant data (`name`, minor/under age flag, legal guardian).
      - Medical conditions and extra information used by the backend to calculate the risk level.
      - Important dates.
      - **Digital signature** using `react-signature-canvas`.
    - Signature is converted to a PNG data URL and sent to the backend.
    - On submit, sends a `POST` request to:
      ```ts
      `${import.meta.env.VITE_API_URL}/api/waivers`
      ```
    - On success, navigates to the success page.
  - **Success page** (`Success.tsx`):
    - Displays a confirmation message after submitting the waiver.
    - Shows rafting image, logo and translated messages.
    - Button to go back to the home page.

- **Admin flow**
  - **Login** (`Login.tsx`):
    - Simple form built with Ant Design (`username`, `password`).
    - Sends a `POST` request to:
      ```ts
      `${import.meta.env.VITE_API_URL}/api/auth/login`
      ```
    - On success, stores `access_token` in `localStorage` under `login_token`.
    - Redirects to the admin panel.
  - **Auth guard** (`IsAuth` in `App.tsx`):
    - Checks `localStorage.login_token`.
    - Calls:
      ```ts
      `${import.meta.env.VITE_API_URL}/api/auth/me`
      ```
      to validate the token.
    - If not authenticated, redirects to `/login`.
  - **Admin panel** (`AdminPanel.tsx`):
    - Protected route: `/admin` is wrapped in `<IsAuth>`.
    - Loads waivers from:
      ```ts
      `${import.meta.env.VITE_API_URL}/api/waivers`
      ```
    - Displays them in an Ant Design `Table` with:
      - Participant name, legal guardian, tour date, created date and risk level.
    - Includes:
      - Search by participant name.
      - Date range filter (front-end only).
      - “View details” (`WaiverModal`) to see full waiver info.
      - “Download PDF” button:
        - Calls `GET ${VITE_API_URL}/api/waivers/:id/pdf` with `Authorization: Bearer <token>`.
    - Logout button clears `login_token` and redirects to `/login`.

- **Routing**
  - Implemented with **react-router-dom**.
  - Routes:
    - `/` → `Home`
    - `/terms` → `Terms`
    - `/form` → `WaiverForm`
    - `/success` → `Success`
    - `/login` → `Login`
    - `/admin` → `AdminPanel` (protected by `IsAuth`)
    - Any other path → redirects to `/`.

---

## Tech Stack

- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [Ant Design](https://ant.design/)
- [React Router DOM](https://reactrouter.com/)
- [i18next](https://www.i18next.com/) + [react-i18next](https://react.i18next.com/)
- [dayjs](https://day.js.org/)
- [react-signature-canvas](https://www.npmjs.com/package/react-signature-canvas)
- [React Icons](https://react-icons.github.io/react-icons/)

---

## Getting started

1. Clone the repository
   ```bash
   git clone https://github.com/your_user/waivers-frontend.git
   cd waivers-frontend

2. Install dependencies
   ```bash
   npm install

3. Environment variables
   ```bash
   # Base URL of the WAIVERS API backend
     VITE_API_URL=https://your-backend-url.vercel.app

   # Optional: local development
   # VITE_API_URL=http://localhost:4000

   >In the code, the API URL is used as: const API_URL = import.meta.env.VITE_API_URL

4. Development server
   ```bash
   npm run dev
   >By default, the app runs on: http://localhost:5173

5. Production build
   ```bash
   npm run build

---

# Deployment
This app is configured to be deployed on Vercel (or any static hosting).
- There is a vercel.json file with a rewrite rule to support client-side routing:
  ```json
    {
      "rewrites": [
        {
          "source": "/(.*)",
          "destination": "/index.html"
        }
      ]
    }

---

# Contact
- Autor: Andrey Ortiz
- Email: a.ortizmar11@gmail.com
- LinkedIn: www.linkedin.com/in/andrey-ortiz-m
