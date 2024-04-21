import classes from "./Home.module.css";
import NavBar from "@/UI/NavBar";
import Container from "@/UI/Container";
import Link from "@/UI/Link/Link.tsx";
import {routes} from "@/constants/routes.ts";
import {theme} from "@/constants/theme.ts";

export default function Home() {
  return (
    <div className={classes.Home}>
      <NavBar title='Habit Kicker'>
       <Link to={routes.Home} theme={theme.Outline}>Log In</Link>
      </NavBar>
      <Container>
        <p>Here to help you kick that habit!</p>
      </Container>
    </div>
  )
}
