import {Box, Button, Dialog, DialogContent, DialogTitle, IconButton, Link, TextField, Typography} from "@mui/material";
import {Form, Link as RouterLink, useActionData, useNavigate} from "react-router-dom";
import {Routes} from "../constants/routes.ts";
import Logo from "./Logo.tsx";

interface loginActionData {
  error: string;
  usernameError: string;
  passwordError: string;
}

export default function Login() {
  const navigate = useNavigate();
  const { error, usernameError, passwordError } = (useActionData() || { error: '', usernameError: '', passwordError: '' }) as loginActionData;

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
          <Form method='POST' replace>
            <Box flexDirection='column'>
              <Typography variant="body1" component="label" color={usernameError ? 'error' : 'primary'}>
                Username
                <TextField
                  error={!!usernameError}
                  size='small'
                  name='username'
                  fullWidth
                  placeholder='your@email.com'
                />
              </Typography>
            </Box>
            <Box pt={2}>
              <Typography variant="body1" component="label" color={passwordError ? 'error' : 'primary'}>
                Password
                <TextField
                  error={!!passwordError}
                  size='small'
                  type='password'
                  name='password'
                  fullWidth
                  placeholder='*******'
                />
              </Typography>
            </Box>
            <Box mt={2}>
              <Typography color='error' component="p">{error}</Typography>
            </Box>
            <Box pt={4} mt={error ? 0 : 5}>
              <Button type='submit' fullWidth variant='contained'>Sign In</Button>
              <Typography color='primary' textAlign='center' mt={2}>Don't have an account? <Link ml={1} component={RouterLink} to={Routes.SIGN_UP}>Sign Up</Link></Typography>
            </Box>
          </Form>
          <Typography mt={4} align='center'>
            Powered by <Link href="https://randylayne.com" underline="none">Red Eagle Software&copy;</Link>
          </Typography>
        </Box>
      </DialogContent>
    </Dialog>
  )
}
