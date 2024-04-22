import classes from "./Modal.module.css";
import Header from "@/components/UI/Header";
import {KeyboardEventHandler, ReactNode} from "react";

export default function Modal({title, children, onClose} : modalProps) {
  const keyUpHandler : KeyboardEventHandler = (event) => {
    if (event.key === 'Escape') {
      onClose()
    }
  }

  return (
    <div
      className={classes.Background}
      onClick={onClose}
      onKeyUp={keyUpHandler}
    >
      <div className={classes.Modal} onClick={event => event.stopPropagation()}>
        { title && <Header><p className={classes.Title}>{title}</p></Header>}
        { children }
      </div>
    </div>

  )
}

interface modalProps {
  title?: string,
  children?: ReactNode[] | ReactNode | undefined,
  onClose: () => void
}
