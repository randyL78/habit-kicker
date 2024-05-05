import classes from './Button.module.css'
import {ButtonHTMLAttributes} from 'react'
import {theme} from "@/constants/theme.ts";
import {themeColor} from "@/constants/themeColors.ts";

export default function Button(props: buttonProps) {
  const className = [classes.Button];
  className.push(themeClassName(props.theme))
  className.push(colorClassName(props.themeColor))

  const buttonProps = {...props}
  delete buttonProps.themeColor
  delete buttonProps.theme

  return <button className={className.join(' ')} {...buttonProps} />
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

interface buttonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  theme?: theme,
  themeColor?: themeColor
}
