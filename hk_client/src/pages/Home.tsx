import {
  BottomNavigationAction,
  Box,
  Button,
  Container,
  Typography
} from "@mui/material";
import {Link as RouterLink, Outlet} from "react-router-dom";
import {Routes} from "../constants/routes.ts";
import {AppRegistration, Login} from "@mui/icons-material";
import Navbar from "../components/Navbar.tsx";
import BottomNavbar from "../components/BottomNavbar.tsx";

export default function Home() {
  return (
    <>
      <Box sx={{
        height: "100vh",
        backgroundColor: "#fdf",
        background: 'linear-gradient(25deg, rgba(68,82,105,.3) 0%, rgba(225,230,250,.8) 20%, rgba(215,220,246,.8) 40%, rgba(68,82,105,.6) 100%)'
      }}>
        <Navbar>
          <Button
            color="primary"
            variant="text"
            to={Routes.LOGIN}
            size="small"
            sx={{mr: 2}}
            component={RouterLink}
          >
            Sign in
          </Button>
          <Button color="primary" variant="contained" size="small" component={RouterLink} to={Routes.SIGN_UP}>
            Sign up
          </Button>
        </Navbar>
        <Box pt={20}>
          <Container>
            <Box textAlign="center" sx={{flexGrow: 1}}>
              <Typography variant="h1" color='primary'>Habit Kicker</Typography>
              <Typography variant="h3" color='#fff'>Here to help you kick that habit!</Typography>
            </Box>
          </Container>
        </Box>
        <BottomNavbar>
          <BottomNavigationAction label='Sign In' icon={<Login color='primary'/>} component={RouterLink} to={Routes.LOGIN} />
          <BottomNavigationAction label='Sign Up' icon={<AppRegistration color='primary'/>} component={RouterLink} to={Routes.SIGN_UP}/>
        </BottomNavbar>
        <Outlet />
      </Box>
    </>
  )
}
