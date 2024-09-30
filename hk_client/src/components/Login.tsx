import {Box, Button, Dialog, DialogContent, DialogTitle, IconButton, Link, TextField, Typography} from "@mui/material";
import {Form, Link as RouterLink, useNavigate} from "react-router-dom";
import {Routes} from "../constants/routes.ts";
import Logo from "./Logo.tsx";

export default function Login() {
  const navigate = useNavigate();

  return (
    <Dialog open={true} onClose={() => {navigate(Routes.HOME)}}>
      <DialogTitle>
        <Box sx={{display: 'flex'}}>
          <IconButton size="small" sx={{mr: 1}}>
            <Logo />
          </IconButton>
          <Typography variant="h5" component="h2" sx={{flexGrow: 1}} color='primary'>Habit Kicker</Typography>
        </Box>
      </DialogTitle>
      <DialogContent>
        <Typography variant='h4' component='h1'>Sign In</Typography>
        <Box mt={4}>
          <Form>
            <Box flexDirection='column'>
              <Typography variant="body1" component="label" color='primary'>
                Username
                <TextField
                  size='small'
                  name='username'
                  fullWidth
                  placeholder='your@email.com'
                />
              </Typography>
            </Box>
            <Box pt={2}>
              <Typography variant="body1" component="label" color='primary'>
                Password
                <TextField
                  size='small'
                  type='password'
                  name='password'
                  fullWidth
                  placeholder='*******'
                />
              </Typography>
            </Box>
            <Box pt={4} mt={4}>
              <Button fullWidth variant='contained'>Sign In</Button>
              <Typography color='primary' textAlign='center' mt={2}>Don't have an account? <Link ml={1} component={RouterLink} to={Routes.SIGN_UP}>Sign Up</Link></Typography>
            </Box>
          </Form>
        </Box>
      </DialogContent>
    </Dialog>
  )
}
