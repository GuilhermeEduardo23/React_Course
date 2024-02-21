import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// 1 - config react router
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from './routes/Home.jsx';
import Contact from './routes/Contact.jsx';
import ErrorPage from './routes/ErrorPage.jsx';
import ContactDetails from './routes/ContactDetails.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "contact",
        element: <Contact />
      },
      // 5 - nested routes - identificador único
      {
        path: "/contact/:id",
        element: <ContactDetails />
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
