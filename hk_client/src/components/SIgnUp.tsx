import {Box, Button, Dialog, DialogContent, DialogTitle, IconButton, Link, TextField, Typography} from "@mui/material";
import {Routes} from "../constants/routes.ts";
import Logo from "./Logo.tsx";
import {Form, Link as RouterLink, useActionData, useNavigate} from "react-router-dom";


interface signUpActionData {
  error: string;
  usernameError: string;
  passwordError: string;
  confirmPasswordError: string;
}

const defaultActionData: signUpActionData = {
  error: '',
  usernameError: '',
  passwordError: '',
  confirmPasswordError: ''
}

export default function SignUp() {
  const navigate = useNavigate();
  const { error, usernameError, passwordError, confirmPasswordError } = (useActionData() || defaultActionData) as signUpActionData;

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
        <Typography variant='h4' component='h1'>Sign Up</Typography>
        <Box mt={4}>
          <Form method='POST' replace>
            <Box display='flex' flexDirection='column'>
              <Typography variant="body1" component="label" color='primary'>
                Username<Typography variant='body1' component='span' color='error'>*</Typography>
                <TextField
                  error={!!usernameError}
                  size='small'
                  name='username'
                  fullWidth
                  placeholder='your@email.com'
                />
              </Typography>
              <Typography variant="body1" component="label" color='error'>{usernameError}</Typography>
            </Box>
            <Box pt={2} display='flex' flexDirection='column'>
              <Typography variant="body1" component="label" color='primary'>
                Password<Typography variant='body1' component='span' color='error'>*</Typography>
                <TextField
                  error={!!passwordError}
                  size='small'
                  type='password'
                  name='password'
                  fullWidth
                  placeholder='*******'
                />
              </Typography>
              <Typography variant="body1" component="label" color='error'>{passwordError}</Typography>
            </Box>
            <Box pt={2} display='flex' flexDirection='column'>
              <Typography variant="body1" component="label" color='primary'>
                Confirm Password<Typography variant='body1' component='span' color='error'>*</Typography>
                <TextField
                  error={!!confirmPasswordError}
                  size='small'
                  type='password'
                  name='confirmPassword'
                  fullWidth
                  placeholder='*******'
                />
              </Typography>
              <Typography variant="body1" component="label" color='error'>{confirmPasswordError}</Typography>
            </Box>
            <Box mt={2}>
              <Typography color='error' component="p">{error}</Typography>
            </Box>
            <Box pt={4} mt={error ? 0 : 5}>
              <Button type='submit' fullWidth variant='contained'>Sign Up</Button>
              <Typography color='primary' textAlign='center' mt={2}>Already have an account? <Link ml={1} component={RouterLink} to={Routes.LOGIN}>Sign In</Link></Typography>
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
