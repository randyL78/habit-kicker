import {removeToken} from "../services/token.ts";
import api from "../services/api.ts";

export function signOut() {
  removeToken()
  api.defaults.headers.common.Authorization = null
}
