import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from "./pages/Home.tsx";
import Login from "./components/Login.tsx";
import {Routes} from "./constants/routes.ts";
import {LoginAction} from "./actions/login_action.ts";

const router = createBrowserRouter([
  {
    path: Routes.HOME,
    Component: Home,
    children: [
      {
        path: Routes.LOGIN,
        Component: Login,
        action: LoginAction,
      },
      {
        path: Routes.SIGN_UP,
        element: <h3>Sign Up</h3>
      }
    ]
  },
  {
    path: Routes.DASHBOARD,
    element: <h3>Dashboard</h3>
  }
]);

export default function App() {
  return <RouterProvider router={router} />
}
