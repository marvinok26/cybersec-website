import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import './index.css';
import App from './components/App.jsx';
import Home from './pages/Home';
import ErrorPage from './pages/ErrorPage';
import AboutUs from './pages/AboutUs';
import Services from './pages/Services';
import ContactUs from './pages/ContactUs';
import Careers from './pages/Careers';

const router = createBrowserRouter([
  {
    path:"/",
    element: <App/>,
    errorElement: <ErrorPage/>,
    children: [
      {index: true, element: <Home />},
      {path: "about", element: <AboutUs />},
      {path: "services", element: <Services />},
      {path: "careers", element: <Careers />},
      {path: "contact", element: <ContactUs />},
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);
