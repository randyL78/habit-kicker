import Modal from "@/components/UI/Modal";
import {useNavigate} from "react-router-dom";
import {routes} from "@/constants/routes.ts";

export default function AuthModal() {
  const navigate = useNavigate();
  const onClose = () => {
    navigate(routes.Home)
  }
  return (
    <Modal title='Log In' onClose={onClose} />
  )
}
