import {redirect} from "react-router-dom";
import {Routes} from "../constants/routes.ts";

export function redirectToLogin(request: Request) {
  const params = new URLSearchParams();
  params.set("from", new URL(request.url).pathname);
  params.set("login", "true")
  return redirect(`${Routes.LOGIN}?${params.toString()}`)
}
