import {LoaderFunctionArgs, redirect} from "react-router-dom";
import {Routes} from "../constants/routes.ts";

export async function SignUpAction({ request }: LoaderFunctionArgs) {
  const data = await request.formData()
  const username = data.get('username') as string
  const password = data.get('password') as string
  const confirmPassword = data.get('confirmPassword') as string

  const errorResponse = {
    error: 'Please fix all errors before resubmitting.',
    usernameError: '',
    passwordError: '',
    confirmPasswordError: 'Please fix all errors before resubmitting.',
  }

  if (!username) {
    errorResponse.usernameError = 'Username is required'
  }

  if (username.length < 6) {
    errorResponse.usernameError = 'Username should be at least 6 characters'
  }

  if (username.length > 32) {
    errorResponse.usernameError = 'Username should be no more than 32 characters'
  }

  if (!password) {
    errorResponse.passwordError = 'Password is required'
  }

  if (password.length < 8) {
    errorResponse.passwordError = 'Password should be at least 8 characters'
  }

  if (password.length > 32) {
    errorResponse.passwordError = 'Password should be no more than 32 characters'
  }

  if (!confirmPassword) {
    errorResponse.confirmPasswordError = 'Password Confirmation is required'
  }

  if (confirmPassword !== password) {
    errorResponse.confirmPasswordError = 'Passwords do not match'
  }

  if(errorResponse.usernameError || errorResponse.passwordError || errorResponse.confirmPasswordError) {
    return errorResponse
  }

  return redirect(Routes.DASHBOARD)
}
