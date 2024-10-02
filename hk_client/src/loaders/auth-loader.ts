import {LoaderFunctionArgs} from "react-router-dom";
import {hasAccess} from "../api/has-access.ts";
import {ResponseStatusType} from "../interfaces/ResponseStatusType.ts";
import {redirectToLogin} from "../utilities/redirect-to-login.ts";

export async function AuthLoader({ request }: LoaderFunctionArgs) {
  const response = await hasAccess()

  if(response.status === ResponseStatusType.unauthorized) {
    return redirectToLogin(request)
  }

  return response
}
