import {useNavigate} from "react-router-dom";
import {ReactNode, useEffect, useState} from "react";
import {routes} from "@/constants/routes.js";
import {getToken} from "@/utilities/token.ts";
import {useAppDispatch, useAppSelector} from "@/hooks.ts";
import {getCurrentUser} from "@/thunks/authThunk.ts";

export default function Protected({ children }: ProtectedProps) {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const token = getToken()
  const dispatch = useAppDispatch();
  const currentUser = useAppSelector(state => state.auth.currentUser)

  useEffect(() => {
    if(!token) {
      console.log("User not authenticated")
      navigate(routes.Home)
    }

    if(Object.keys(currentUser).length === 0) {
      dispatch(getCurrentUser(token))
    }

    setIsAuthenticated(true);
  }, [token, currentUser, dispatch]);

  return(<>{isAuthenticated && children}</>)
}

interface ProtectedProps {
  children: ReactNode
}
