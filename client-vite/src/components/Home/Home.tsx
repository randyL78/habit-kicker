import classes from "./Home.module.css";
import Container from "@/components/UI/Container";
import {Outlet} from "react-router-dom";

export default function Home() {
  return (
    <div className={classes.Home}>
      <Outlet />
      <Container>
        <p>Here to help you kick that habit!</p>
      </Container>
    </div>
  )
}
