import NavBar from "@/components/UI/NavBar";
import {Outlet} from "react-router-dom";
import {routes} from "@/constants/routes.ts";
import {theme} from "@/constants/theme.ts";
import Link from "@/components/UI/Link";


export default function Layout() {
  return (
    <>
      <NavBar title={<Link to={routes.Home}>Habit Kicker</Link>}>
        <Link to={routes.Login} theme={theme.Outline}>Log In</Link>
      </NavBar>
      <Outlet />
    </>
  )
}
