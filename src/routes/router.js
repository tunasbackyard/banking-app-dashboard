import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Loan from "../pages/Loan";
import Transfer from "../pages/Transfer";
import Root from "./components/root";
import Login from "../pages/Login";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "/loan",
        element: <Loan />,
      },
      {
        path: "/transfer",
        element: <Transfer />,
      },
    ],
  },
  {
    path: "/auth",
    element: <Login />,
  },
]);