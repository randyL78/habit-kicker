import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from "./pages/Home.tsx";
import Login from "./components/Login.tsx";

const router = createBrowserRouter([
  {
    path: '/',
    Component: Home,
    children: [
      {
        path: 'login',
        Component: Login,
      }
    ]
  }
]);

export default function App() {
  return <RouterProvider router={router} />
}
