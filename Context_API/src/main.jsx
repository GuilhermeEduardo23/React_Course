import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import ErrorPage from './routes/ErrorPage.jsx';
import Home from "./routes/Home.jsx";
import Contact from "./routes/Contact.jsx";
import About from "./routes/About.jsx";

import { CounterContextProvider } from './context/CounterContext.jsx';
import { TitleColorContextProvider } from './context/TitleColorContext.jsx';

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
        element: <About />
      },
    ],
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* 2 - criando provider */}
    <CounterContextProvider>
      <TitleColorContextProvider>
        <RouterProvider router={router} />
      </TitleColorContextProvider>
    </CounterContextProvider>
  </React.StrictMode>,
)