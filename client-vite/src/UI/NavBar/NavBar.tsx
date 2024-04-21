import {ReactNode} from "react";

import classes from "./NavBar.module.css";

export default function NavBar({title, children}: navBarProps) {
  return (
    <header className={classes.NavBar}>
      <div className={classes.Container}>
        <h1>{title}</h1>
        <nav>
          {children}
        </nav>
      </div>
    </header>
  )
}

type navBarProps = {
  title?: string
  children?: ReactNode[] | ReactNode
}
