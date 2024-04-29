import Modal from "@/components/UI/Modal";
import {useNavigate} from "react-router-dom";
import {routes} from "@/constants/routes.ts";
import Link from "@/components/UI/Link";
import {theme} from "@/constants/theme.ts";
import {themeColor} from "@/constants/themeColors.ts";
import Input from "@/components/UI/Input/Input.tsx";
import classes from "./AuthModal.module.css";

export default function AuthModal() {
  const navigate = useNavigate();
  const onClose = () => {
    navigate(routes.Home)
  }
  return (
    <Modal title='Sign In' onClose={onClose} >
      <form className={classes.AuthModal} onSubmit={event => event.stopPropagation()}>
        <div className={classes.InputGroup}>
          <Input id="email" name="email" placeholder="Email" />
        </div>
        <div className={classes.InputGroup}>
          <Input type="password" id="password" name="password" placeholder="Password"/>
        </div>
        <div className={classes.ForgotPassword} >
          <Link to={routes.PasswordReset} themeColor={themeColor.Dark}>Forgot your password?</Link>
        </div>
        <div className={classes.SubmitButton}>
          <Link to='/' theme={theme.Pill} themeColor={themeColor.Primary}>Sign In</Link>
        </div>
        <p><strong>New here? </strong><Link themeColor={themeColor.Dark} to={routes.SignUp}>Create an account instead</Link></p>
      </form>
    </Modal>
  )
}
