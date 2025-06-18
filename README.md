# PopX React App

A modern React + Vite + Tailwind CSS app for account creation, login, and profile management, with persistent user context.

## Features

- **Home Page:** Welcome screen with navigation to account creation and login.
- **Create Account:** Form for new users (Full Name, Phone, Email, Password, Company, Agency status). On submit, user info is saved and shown on the profile page.
- **Login:** Simple login form (email, password). On submit, user info is shown on the profile page.
- **Profile:** Displays the logged-in user's name and email (from context), with a styled avatar and account info.
- **User Context:** Uses React Context (`src/userContext.jsx`) to share user info across pages.
- **Routing:** Uses `react-router-dom` for navigation.
- **Styling:** Uses Tailwind CSS and custom CSS modules for modern, responsive UI.

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- npm

### Installation

```bash
git clone https://github.com/KrishPatel1010/popx-app.git
cd popx-app
npm install
```

### Running the App

```bash
npm run dev
```

Visit [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
src/
  App.jsx                # Main app routes
  main.jsx               # App entry, wraps with UserProvider and BrowserRouter
  userContext.jsx        # React context for user info
  index.css              # Global styles (Tailwind + custom)
  pages/
    Home.jsx             # Welcome/landing page
    CreateAccount.jsx    # Account creation form
    CreateAccount.css    # Custom styles for account form
    Login.jsx            # Login form
    Profile.jsx          # User profile page
  assets/
    react.svg            # Example asset
public/
  vite.svg               # Favicon
```

## User Context

The app uses a React context to share user info (name, email) across all pages.

**Provider setup (already in `main.jsx`):**
```jsx
import { UserProvider } from './userContext.jsx';

<BrowserRouter>
  <UserProvider>
    <App />
  </UserProvider>
</BrowserRouter>
```

**Access or update user data in any component:**
```jsx
import { useContext } from 'react';
import { UserContext } from '../userContext.jsx';

const { name, email, setName, setEmail } = useContext(UserContext);
```

- Use `setName` and `setEmail` to update user info after login or registration.
- The Profile page displays the current values from context.

## Styling

- Uses [Tailwind CSS](https://tailwindcss.com/) (see `tailwind.config.js`).
- Custom styles for the account form in `src/pages/CreateAccount.css`.
- Google Fonts (Inter) loaded in `index.html`.

## Scripts

- `npm run dev` — Start development server
- `npm run build` — Build for production
- `npm run preview` — Preview production build
- `npm run lint` — Lint code

## License

MIT
