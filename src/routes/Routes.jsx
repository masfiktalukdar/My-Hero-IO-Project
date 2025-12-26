import { createBrowserRouter } from "react-router-dom";
import Root from '../pages/Root/Root';
import Errorpage from '../pages/ErrorPage/Errorpage';
import Home from '../pages/Home/Home';
import Installation from '../pages/Installation/Installation';
import Apps from '../pages/Apps/Apps';
import AppDetails from '../pages/AppDetails/AppDetails';
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import PrivateRoute from "./PrivateRoute";

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
        path: "apps/:id",
        element: <PrivateRoute><AppDetails /></PrivateRoute>,
      },
      {
        path: "installation",
        element: <PrivateRoute><Installation /></PrivateRoute>,
      },
      {
        path: "login",
        Component: Login,
      },
      {
        path: "register",
        Component: Register,
      }
    ]
  },
]);
