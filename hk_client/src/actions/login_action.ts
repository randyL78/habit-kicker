import {LoaderFunctionArgs, redirect} from "react-router-dom";
import {signIn} from "../api/sign-in.ts";
import {ResponseStatusType} from "../interfaces/ResponseStatusType.ts";
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

  const { status, errorMessage } = await signIn({username, password})

  if (status === ResponseStatusType.success) {
    return redirect(Routes.DASHBOARD)
  }

  return {
    error: errorMessage
  }
}
