import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import './index.css';
import Loader from './components/Loader.jsx';


// Lazy load components for better performance
const App = lazy(() => import('./components/App.jsx'));
const ErrorPage = lazy(() => import('./pages/ErrorPage'));
const AboutUs = lazy(() => import('./pages/AboutUs'));
const ContactUs = lazy(() => import('./pages/ContactUs'));
const Careers = lazy(() => import('./pages/Careers'));
const Page = lazy(() => import('./pages/home/Main.jsx'));
const Services = lazy(() => import('./pages/services/Services.jsx'));

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<div className="flex items-center justify-center min-h-screen"><Loader /></div>}>
        <App />
      </Suspense>
    ),
    errorElement: (
      <Suspense fallback={<div className="flex items-center justify-center min-h-screen"><Loader /></div>}>
        <ErrorPage />
      </Suspense>
    ),
    children: [
      { index: true, element: <Page /> },
      { path: "about", element: <AboutUs /> },
      { path: "services", element: <Services /> },
      { path: "careers", element: <Careers /> },
      { path: "contact", element: <ContactUs /> },
    ]
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
