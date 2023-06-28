import { RouterProvider, createBrowserRouter } from "react-router-dom";

import ErrorPage from "../../pages/Error";
import LoginPage from "../../pages/LoginPage/LoginPage";

import { RootAuthComponent } from "../../components/RootAuthComponent";
import Categories from "../../pages/Categories/Categories";
import Register from "../../pages/Register/Register";
import Profile from "../../pages/Profile/Profile";
import Accounts from "../../pages/Accounts/Accounts";

const RoutesProvider: React.FC = () => {
  const userInformation = localStorage.getItem("token");

  if (userInformation) {
    const router = createBrowserRouter([
      {
        path: "/",
        element: <RootAuthComponent />,
        errorElement: <ErrorPage />,
        children: [
          {
            path: "categories",
            element: <Categories />,
            errorElement: <ErrorPage />,
          },
          {
            path: "accounts",
            element: <Accounts />,
            errorElement: <ErrorPage />,
          },
          {
            path: "profile",
            element: <Profile />,
            errorElement: <ErrorPage />,
          },
        ],
      },
    ]);

    return <RouterProvider router={router} />;
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <LoginPage />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/register",
      element: <Register />,
      errorElement: <ErrorPage />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default RoutesProvider;
