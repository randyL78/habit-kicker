import {ReactNode} from "react";
import classes from "./Container.module.css";

export default function Container({ children }: containerProps) {
  return (
    <div className={classes.Container}>
      {children}
    </div>
  )
}

interface containerProps {
  children?: ReactNode | ReactNode[]
}
