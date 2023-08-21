import { createBrowserRouter } from "react-router-dom";

import Login from "../components/auth/Login";
import Register from "../components/auth/Register";
import Layout from "../components/layout/index";
import Dashboard from "../components/dashboard/index";
import Comments from "../components/comments/index";


export const ROOT = "/";
export const LOGIN = "/login";
export const REGISTER = "/register";
export const PROTECTED = "/protected";
export const DASHBOARD = "/protected/dashboard";   //accessible for login users
export const USERS = "/protected/users";
export const PROFILE = "/protected/profile/:id";
export const COMMENTS= "/protected/comments/:id";


export const router = createBrowserRouter([
  { path: ROOT, element: "Public Root" },
  { path: LOGIN, element: <Login /> },
  { path: REGISTER, element: <Register /> },
  {
    path: PROTECTED, element: <Layout />,
    children: [
      {
        path: DASHBOARD, element: <Dashboard />,

      },
      {
        path: USERS, element: "users",
      },
      {
        path: PROFILE, element: "Profile",
      },
      {
        path: COMMENTS, element: <Comments/>,
      },

    ]
  }

]);