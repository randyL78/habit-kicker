import './App.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from "@/components/Home";
import {routes} from "@/constants/routes.ts";

const router = createBrowserRouter([
  {
    path: routes.Home,
    element: <Home />
  }
])

function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App
