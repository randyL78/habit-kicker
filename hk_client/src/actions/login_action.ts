import {LoaderFunctionArgs, redirect} from "react-router-dom";
import {Routes} from "../constants/routes.ts";

export async function LoginAction({ request }: LoaderFunctionArgs) {
  const data = await request.formData()
  const username = data.get('username') as string
  const password = data.get('password') as string

  const errorResponse = {
    error: '',
    usernameError: '',
    passwordError: '',
  }

  if (!username) {
    errorResponse.usernameError = 'Username is required'
  }

  if (!password) {
    errorResponse.passwordError = 'Password is required'
  }

  if(!username || !password) {
    errorResponse.error = 'Please fill in required fields'
    return errorResponse
  }

  if (username === 'admin' && password === 'password') {
    return redirect(Routes.DASHBOARD)
  }

  errorResponse.error = 'Invalid username or password'

  return {
    error: 'Invalid username or password'
  }
}
