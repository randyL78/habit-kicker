import {redirect} from "react-router-dom";
import {Routes} from "../constants/routes.ts";
import {signOut} from "../api/sign-out.ts";

export async function LogoutAction() {
  signOut()
  return redirect(Routes.HOME)
}
