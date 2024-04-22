import './App.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from "@/components/Home";
import {routes} from "@/constants/routes.ts";
import Layout from "@/components/Layout";
import AuthModal from "@/components/AuthModal";

const router = createBrowserRouter([
  {
    path: routes.Home,
    element: <Layout />,
    children: [
      {
        path: '',
        element: <Home />,
        children: [
          {
            path: routes.Login,
            element: <AuthModal />
          }
        ]
      }
    ]
  }
])

function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App
