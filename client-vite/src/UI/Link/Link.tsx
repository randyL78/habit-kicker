import {Link as RouterLink, LinkProps} from "react-router-dom";
import classes from './Link.module.css'
import {themeColor} from "@/constants/themeColors.ts";
import {theme} from "@/constants/theme.ts";

export default function Link(props: linkProps) {
  let className = [classes.Link];

  switch (props.theme) {
    case theme.Outline:
      className.push(classes.Outline)
      break
    case theme.Flat:
      className.push(classes.Flat)
      break
    case theme.Gradient:
      className.push(classes.Gradient)
      break
    case undefined:
      break
    default:
      throw new Error(`Unknown theme: ${props.theme}`)
  }


  return (
    <RouterLink className={className.join(' ')} {...props} />
  )
}

interface linkProps extends LinkProps {
  theme?: theme,
  themeColor?: themeColor,
}




