import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import Home from './routes/Home.jsx';
import Contact from './routes/Contact.jsx';
import ErrorPage from './routes/ErrorPage.jsx';
import ContactDetails from './routes/ContactDetails.jsx';

// 1 - config react router
import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
import Sobre from './routes/Sobre.jsx';
import Product from './routes/Product.jsx';
import Info from './routes/Info.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "contact",
        element: <Contact />
      },
      {
        path: "about",
        element: <Sobre />
      },
      {
        path: "products/:id",
        element: <Product />
      },
      {
        path: "/products/:id/info",
        element: <Info />
      },
      // 5 - nested routes - identificador único - dynamic routes
      {
        path: "contact/:id",
        element: <ContactDetails />
      },
      // 7 - navigate para páginas não existentes
      {
        path: "oldcontact",
        element: <Navigate to="/contact" />,
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)