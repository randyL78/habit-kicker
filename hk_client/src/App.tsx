import {AppBar, Box, Button, Container, IconButton, Toolbar, Typography} from "@mui/material";
import Logo from "./components/Logo.tsx";

function App() {
  return (
    <>
      <Box sx={{
        height: "100vh",
        backgroundColor: "#fdf",
        background: 'linear-gradient(25deg, rgba(68,82,105,.3) 0%, rgba(225,230,250,.8) 20%, rgba(215,220,246,.8) 40%, rgba(68,82,105,.6) 100%)'
      }}>
          <AppBar
          position="fixed"
          sx={{
            boxShadow: 0, bgcolor: 'transparent', backgroundImage: 'none', mt: 6
          }}
        >
          <Container maxWidth="lg">
            <Toolbar disableGutters variant="dense" sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: 'space-between',
              flexShrink: 0,
              borderRadius: '12px',
              backdropFilter: 'blur(20px)',
              border: '1px solid',
              borderColor: '#bdadcd',
              padding: '8px 12px',
              backgroundColor: 'rgba(255, 255, 255, 0.4)',
            }}>
              <IconButton size="small" sx={{mr: 1}}>
                <Logo />
              </IconButton>
              <Typography variant="h5" component="div" sx={{flexGrow: 1}} color='primary'>Habit Kicker</Typography>
              <Button color="primary" variant="text" size="small" sx={{mr: 2}}>
                Sign in
              </Button>
              <Button color="primary" variant="contained" size="small">
                Sign up
              </Button>
            </Toolbar>
          </Container>
        </AppBar>
        <Box pt={20}>
          <Container>
            <Box textAlign="center" sx={{flexGrow: 1}}>
              <Typography variant="h1" color='primary'>Habit Kicker</Typography>
              <Typography variant="h3" color='#fff'>Here to help you kick that habit!</Typography>
            </Box>
          </Container>
        </Box>
      </Box>
    </>
  )
}

export default App
