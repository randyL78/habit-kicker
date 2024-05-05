import NavBar from "@/components/UI/NavBar";
import {Outlet, useNavigate} from "react-router-dom";
import {routes} from "@/constants/routes.ts";
import {theme} from "@/constants/theme.ts";
import Link from "@/components/UI/Link";
import {getToken, removeToken} from "@/utilities/token.ts";
import Button from "@/components/UI/Button";



export default function Layout() {
 return (
    <>
      <NavBar title={<Link to={routes.Home}>Habit Kicker</Link>}>
        {authButton()}
      </NavBar>
      <Outlet />
    </>
  )
}

const authButton = () => {
  const navigate = useNavigate();
  const isAuthenticated = !!getToken()

  const logOutHandler = () => {
    removeToken()
    navigate(routes.Home)
  }

  if (isAuthenticated) {
    return <Button onClick={logOutHandler} theme={theme.Outline}>Log Out</Button>
  }

  return <Link to={routes.Login} theme={theme.Outline}>Log In</Link>
}
