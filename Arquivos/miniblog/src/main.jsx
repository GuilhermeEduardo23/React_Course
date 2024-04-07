import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx';

// CSS
import './index.css';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

// ErrorPage
import ErrorPage from './ErrorPage.jsx';

// Routers
import Home from './routes/Home/Home.jsx';
import About from './routes/About/About.jsx';
import Login from './routes/Login/Login.jsx';
import Register from './routes/Register/Register.jsx';
import CreatePost from './routes/CreatePost/CreatePost.jsx';
import Dashboard from './routes/Dashboard/Dashboard.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "/post/create",
        element: <CreatePost />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)