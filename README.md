# Rrweb-session: Self-Hosted Session Replay Platform

Rrweb-session is a full-stack, self-hosted session replay and analytics platform. It allows you to record, store, and replay user sessions for web applications, providing powerful debugging and user experience insights.

---

## Features
- **Session Recording & Replay**: Capture and replay user interactions using rrweb.
- **Authentication**: Email/password login, with optional social login (Google, GitHub).
- **Dashboard**: View, search, and filter recorded sessions.
- **Live Analytics**: Visualize user engagement and environment split.
- **Modern UI**: Beautiful, responsive frontend with Tailwind CSS and Framer Motion.
- **No external SaaS**: All data stays on your server.

---

## Folder Structure

```
Rrweb-session/
  backend/      # Node.js/Express API server, MongoDB models, routes
  frontend/     # React app (Vite/CRA), session recorder, dashboard UI
```

---

## Prerequisites
- [Node.js](https://nodejs.org/) (v16+ recommended)
- [npm](https://www.npmjs.com/) or [yarn]
- [MongoDB](https://www.mongodb.com/) (local or cloud)

---

## Getting Started

### 1. Clone the repository
```bash
git clone <your-repo-url>
cd Rrweb-session
```

### 2. Backend Setup
```bash
cd backend
npm install
# Create a .env file (see below)
npm start
```

#### Example `.env` for backend
```
MONGO_URI=mongodb://localhost:27017/rrweb-session
JWT_SECRET=your_jwt_secret
PORT=5000
```

### 3. Frontend Setup
```bash
cd ../frontend
npm install
npm start
```
- The frontend will run on [http://localhost:3000](http://localhost:3000) by default.

---

## Usage
- Visit the frontend URL in your browser.
- Sign up or log in (or use the demo/guest mode if enabled).
- Start a new session recording, interact with your app, and view the session in the dashboard.
- Replay sessions, search/filter, and view analytics.

---

## Social Login (Optional)
- To enable Google/GitHub login, set up OAuth credentials and update the backend and frontend configs.
- See the code comments for where to add your client IDs/secrets.

---

## Customization
- **Session Storage**: By default, sessions are stored in MongoDB. You can adapt the backend for other databases.
- **UI**: The frontend uses Tailwind CSS and is easy to customize.
- **API**: Extend the backend with more routes as needed.

---

## Development Tips
- Both backend and frontend support hot reload (nodemon, Vite/CRA).
- Use the provided API endpoints for integration with other tools.
- For production, use environment variables and secure your MongoDB/JWT secrets.

---

## Troubleshooting
- **MongoDB connection errors**: Check your `MONGO_URI` and ensure MongoDB is running.
- **Port conflicts**: Change the `PORT` in `.env` or frontend config if needed.
- **CORS issues**: The backend includes CORS support, but you may need to adjust allowed origins for production.

---

## API Endpoints Overview

### Auth
- `POST /api/auth/login` — User login
- `POST /api/auth/signup` — User registration
- `GET /api/auth/me` — Get current user info (demo/guest mode supported)

### Sessions
- `GET /api/sessions` — List all sessions
- `POST /api/sessions` — Create a new session
- `GET /api/sessions/:id` — Get a specific session
- `POST /api/sessions/:id/events` — Upload events for a session
- `GET /api/sessions/:id/events` — Get all events for a session

### Teams/Users (if enabled)
- `GET /api/teams` — List teams
- `POST /api/teams` — Create a team
- `GET /api/users` — List users

---

## Environment Variables Reference

### Backend (`backend/.env`)
- `MONGO_URI` — MongoDB connection string (**required**)
- `JWT_SECRET` — Secret for JWT token signing (**required**)
- `PORT` — Port for backend server (default: `5000`)
- `GOOGLE_CLIENT_ID` — (optional) Google OAuth client ID
- `GOOGLE_CLIENT_SECRET` — (optional) Google OAuth client secret
- `GITHUB_CLIENT_ID` — (optional) GitHub OAuth client ID
- `GITHUB_CLIENT_SECRET` — (optional) GitHub OAuth client secret
- `CORS_ORIGIN` — (optional) Allowed frontend origin for CORS

### Frontend (`frontend/.env` or config)
- `REACT_APP_API_URL` — Backend API base URL (default: `http://localhost:5000/api`)
- `REACT_APP_GOOGLE_CLIENT_ID` — (optional) Google OAuth client ID for frontend
- `REACT_APP_GITHUB_CLIENT_ID` — (optional) GitHub OAuth client ID for frontend

---

## Contributing
Pull requests and issues are welcome! Please open an issue for bugs or feature requests.

---

## License
MIT License

---

## Credits
- [rrweb](https://github.com/rrweb-io/rrweb) for session recording/replay
- [React](https://reactjs.org/), [Express](https://expressjs.com/), [MongoDB](https://www.mongodb.com/)
- [Tailwind CSS](https://tailwindcss.com/), [Framer Motion](https://www.framer.com/motion/)

---

## Contact
For questions or support, open an issue or contact the maintainer.
