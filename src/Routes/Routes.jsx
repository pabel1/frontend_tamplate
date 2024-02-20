import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import NotFoundPage from "../Pages/ErrorPage/NotFoundPage";
import HomePage from "../Pages/HomePage/HomePage";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: (
      // <PrivateRoute allowedRoles={["User"]} path={"/login"}>
      <Main />
      // </PrivateRoute>
    ),
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
    ],
  },

  {
    path: "*",
    element: <NotFoundPage />,
  },
]);
