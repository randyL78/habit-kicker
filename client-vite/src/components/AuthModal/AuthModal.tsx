import Modal from "@/components/UI/Modal";
import {useNavigate} from "react-router-dom";
import {routes} from "@/constants/routes.ts";
import Link from "@/components/UI/Link";
import {theme} from "@/constants/theme.ts";
import {themeColor} from "@/constants/themeColors.ts";
import Input from "@/components/UI/Input/Input.tsx";
import classes from "./AuthModal.module.css";
import React, {ChangeEvent, useState} from "react";
import Button from "@/components/UI/Button";
import {login} from "@/thunks/authThunk.ts";

import {useAppDispatch} from "@/hooks.ts";

export default function AuthModal() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onClose = () => {
    navigate(routes.Home)
  }

  const submitHandler = async (event: React.FormEvent) => {
    event.preventDefault();

    const response = await dispatch(login({email, password}));

    if (response.payload.user) {
      navigate(routes.Dashboard)
    }
  }

  const emailInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  }

  const passwordInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  }

  return (
    <Modal title='Sign In' onClose={onClose} >
      <form className={classes.AuthModal} onSubmit={submitHandler}>
        <div className={classes.InputGroup}>
          <Input id="email" name="email" placeholder="Email" value={email} onChange={emailInputHandler} />
        </div>
        <div className={classes.InputGroup}>
          <Input type="password" id="password" name="password" placeholder="Password" value={password} onChange={passwordInputHandler} />
        </div>
        <div className={classes.ForgotPassword} >
          <Link to={routes.PasswordReset} themeColor={themeColor.Dark}>Forgot your password?</Link>
        </div>
        <div className={classes.SubmitButton}>
          <Button theme={theme.Pill} themeColor={themeColor.Primary}>Sign In</Button>
        </div>
        <p><strong>New here? </strong><Link themeColor={themeColor.Dark} to={routes.SignUp}>Create an account instead</Link></p>
      </form>
    </Modal>
  )
}
