import {createTheme} from "@mui/material";

const theme = createTheme()

theme.palette.primary = {
  ...theme.palette.primary,
  main: '#445269',
  dark: '#243249',
  light: '#647289',
  contrastText: '#ffffff',
}


theme.typography.h1 = {
  [theme.breakpoints.up('sm')]: {
    fontSize: '6rem',
    fontWeight: "100",
  },
}

export default theme
