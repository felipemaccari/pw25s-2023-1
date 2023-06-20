import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Root from "../../routes/root";
import ErrorPage from "../../pages/Error";
import Contact from "../../pages/contact";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider";
import LoginPage from "../../pages/LoginPage/LoginPage";

const RoutesProvider: React.FC = () => {
  const { name } = useContext(AuthContext);

  console.log(name);

  const authenticatedRoutes = [
    {
      path: "/",
      element: <Root />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "contacts/:contactId",
          element: <Contact />,
        },
      ],
    },
  ];

  const publicRoutes = [
    {
      path: "/",
      element: <LoginPage />,
      errorElement: <ErrorPage />,
    },
  ];

  const router = createBrowserRouter(name ? authenticatedRoutes : publicRoutes);

  return <RouterProvider router={router} />;
};

export default RoutesProvider;
