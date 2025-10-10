import React from 'react';
import { createBrowserRouter } from "react-router-dom";
import Root from '../Pages/Root/Root';
import Errorpage from '../Pages/ErrorPage/Errorpage';
import Home from '../Pages/Home/Home';
import Installation from '../Pages/Installation/Installation';
import Apps from '../Pages/Apps/Apps';
import AppDetails from '../Pages/AppDetails/AppDetails'; // AppDetails import

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <Errorpage />,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "apps",
        Component: Apps,
      },
      {
        path: "apps/:id", // dynamic route
        Component: AppDetails,
      },
      {
        path: "installation",
        Component: Installation,
      }
    ]
  },
]);
