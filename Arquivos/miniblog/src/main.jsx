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
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)