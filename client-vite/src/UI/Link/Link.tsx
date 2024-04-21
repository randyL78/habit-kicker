import {Link as RouterLink, LinkProps} from "react-router-dom";
import classes from './Link.module.css'
import {themeColor} from "@/constants/themeColors.ts";
import {theme} from "@/constants/theme.ts";

export default function Link(props: linkProps) {
  const className = [classes.Link];
  className.push(themeClassName(props.theme))
  className.push(colorClassName(props.themeColor))

  return <RouterLink className={className.join(' ')} {...props} />
}

const themeClassName = (themeType: theme | undefined) => {
  switch (themeType) {
    case theme.Flat:
      return classes.Flat
    case theme.Outline:
      return classes.Outline
    case theme.Pill:
      return classes.Pill
    case undefined:
      return classes.Default
    default:
      throw new Error(`Unknown theme: ${themeType}`)
  }
}

const colorClassName = (color: themeColor | undefined) => {
  switch (color) {
    case themeColor.Primary:
      return classes.Primary
    case themeColor.Secondary:
      return classes.Secondary
    case themeColor.Success:
      return classes.Success
    case themeColor.Info:
      return classes.Info
    case themeColor.Warning:
      return classes.Warning
    case themeColor.Danger:
      return classes.Danger
    case themeColor.Light:
    case undefined:
      return classes.Light
    case themeColor.Dark:
      return classes.Dark
    default:
      throw new Error(`Unknown theme color: ${color}`)
  }
}

interface linkProps extends LinkProps {
  theme?: theme,
  themeColor?: themeColor,
}




