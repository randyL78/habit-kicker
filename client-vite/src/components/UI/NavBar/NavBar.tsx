import {ReactNode} from "react";

import classes from "./NavBar.module.css";
import Header from "@/components/UI/Header";

export default function NavBar({title, children}: navBarProps) {
  return (
    <Header>
      <div className={classes.Container}>
        <h1>{title}</h1>
        <nav>
          {children}
        </nav>
      </div>
    </Header>
  )
}

type navBarProps = {
  title: string | ReactNode;
  children?: ReactNode[] | ReactNode
}
