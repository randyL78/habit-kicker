import Navbar from "./Navbar.tsx";
import BottomNavbar from "./BottomNavbar.tsx";
import {BottomNavigationAction, Box, Button, IconButton} from "@mui/material";
import {LogoutTwoTone, Person} from "@mui/icons-material";
import {Form, Link as RouterLink} from "react-router-dom"
import {Routes} from "../constants/routes.ts";
import {useState} from "react";

export default function AuthNavbar() {
  const [accountMenuOpen, setAccountMenuOpen] = useState<boolean>(false);

  const handleClick = () => {
    setAccountMenuOpen((prevState) => !prevState);
  }

  return (
    <>
      <Navbar>
        <Box position='relative'>
          <IconButton size='small' onClick={handleClick}>
            <Person color='primary'/>
          </IconButton>

          <Box
            hidden={!accountMenuOpen}
            sx={{
              backdropFilter: 'blur(20px)',
              border: '1px solid',
              borderColor: '#bdadcd',
              padding: '8px 12px',
              borderRadius: '12px',
              right: -15,
              top: 42,
              position: 'absolute',
              backgroundColor: 'rgba(255, 255, 255, 0.4)',
            }}
          >
            <Form method='post' replace action={Routes.LOGOUT}>
              <Button sx={{ minWidth: 150 }} type='submit'>
                Sign Out
              </Button>
            </Form>
          </Box>
        </Box>
      </Navbar>
      <BottomNavbar>
        <BottomNavigationAction label="Sign Out" icon={<LogoutTwoTone />} to={Routes.HOME} component={RouterLink} />
      </BottomNavbar>
    </>
  )
}
