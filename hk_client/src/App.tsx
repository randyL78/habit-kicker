import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from "./pages/Home.tsx";
import Login from "./components/Login.tsx";
import {Routes} from "./constants/routes.ts";
import {LoginAction} from "./actions/login_action.ts";
import SignUp from "./components/SIgnUp.tsx";
import {SignUpAction} from "./actions/sign_up_action.ts";
import Layout from "./components/Layout.tsx";
import Dashboard from "./pages/Dashboard.tsx";

const router = createBrowserRouter([
  {
    path: Routes.HOME,
    Component: Layout,
    children: [
      {
        path: '',
        Component: Home,
        children: [
          {
            path: Routes.LOGIN,
            Component: Login,
            action: LoginAction,
          },
          {
            path: Routes.SIGN_UP,
            Component: SignUp,
            action: SignUpAction,
          }
        ]
      },
      {
        path: Routes.DASHBOARD,
        Component: Dashboard,
      }
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />
}
