import LandingPage from "../pages/LandingPage";
import Login from "../pages/Login";
import UserDetail from "../pages/User_Detail";
import UserLists from "../pages/User_Lists";
import ProtectedRoute from "./ProtectedRoute";

export const routeList = [
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/user-lists",
    element: <UserLists />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/user-detail/:id",
    element: (
      <ProtectedRoute>
        <UserDetail />
      </ProtectedRoute>
    ),
  },
];
