import {AppBar, Box, Container, IconButton, Toolbar, Typography} from "@mui/material";
import Logo from "./Logo.tsx";
import {ReactNode} from "react";


interface Props {
  children?: ReactNode;
}

export default function Navbar({ children }: Props) {
  return (
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
          <Box sx={{ display: { xs: 'none', sm: 'block'}}} >
            {children}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
