import {createTheme} from "@mui/material";

const theme = createTheme()

theme.palette.primary.main = '#445269'

theme.typography.h1 = {
  [theme.breakpoints.up('md')]: {
    fontSize: '6rem',
    fontWeight: "100",
  },
}

export default theme
