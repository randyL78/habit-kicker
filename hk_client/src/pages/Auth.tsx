import {Outlet} from "react-router-dom";
import AuthNavbar from "../components/AuthNavbar.tsx";

export default function Auth() {
  return (
    <>
      <AuthNavbar />
      <Outlet />
    </>
  )
}
