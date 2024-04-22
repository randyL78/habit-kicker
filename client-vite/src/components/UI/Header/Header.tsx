import classes from "./Header.module.css";

import {ReactNode} from "react";

export default function Header({children}: headerProps) {
  return (
    <header className={classes.Header}>
      {children}
    </header>
  )
}

interface headerProps {
  children: ReactNode | ReactNode[] | undefined
}
