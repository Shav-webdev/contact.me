import React, { useState, useEffect } from "react";
import classes from "./login.module.css";
import FormItem from "../../components/formItem/formItem";
import { validateEmail, validatePassword } from "../../services/validations";
import { Button } from "@material-ui/core";
import {
    PASSWORD_VALIDATION_TEXT,
    EMAIL_VALIDATION_TEXT,
} from "../../services/constants";
import LockIcon from "@material-ui/icons/Lock";
import AccountCircle from "@material-ui/icons/AccountCircle";
import { login } from "../../services/services";

export default function Login(props) {
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const [isEmailValueValid, setIsEmailValueValid] = useState(false);
    const [isPassValueValid, setIsPassValueValid] = useState(false);
    const [isBtnDisabled, setIsBtnDisabled] = useState(true);
    const [showEmailValidText, setShowEmailValidText] = useState(false);
    const [showPassValidText, setShowPassValidText] = useState(false);

    useEffect(() => {
        if (!email) {
            setIsBtnDisabled(true);
        } else if (!pass) {
            setIsBtnDisabled(true);
        } else if (!email && !pass) {
            setIsBtnDisabled(true);
        } else {
            setIsBtnDisabled(false);
        }
    }, [email, pass]);

    const getEmailValue = email => {
        setShowEmailValidText(false);
        console.log("before email", email);
        setEmail(email);
        console.log("email", email);
    };
    const getPasswordValue = pass => {
        setShowPassValidText(false);
        console.log("before pass", pass);
        setPass(pass);
        console.log("pass", pass);
    };

    const isEmailValid = v => {
        setIsEmailValueValid(v);
    };

    const isPassValid = v => {
        setIsPassValueValid(v);
    };

    const onLoginBtnClick = () => {
        if (!isEmailValueValid && !isPassValueValid) {
            setShowEmailValidText(true);
            setShowPassValidText(true);
        } else if (!isEmailValueValid) {
            setShowEmailValidText(true);
        } else if (!isPassValueValid) {
            setShowPassValidText(true);
        } else {
            const data = {
                email,
                pass,
            };
            console.log(data);
            login(data);
            setEmail("");
            setPass("");
        }
    };

    return (
        <div className={classes.loginWrapper}>
            <div className={classes.loginHeadingWrapper}>
                <h1>Sign in</h1>
            </div>
            <FormItem
                inputValue={email}
                showValidationText={showEmailValidText}
                isValueValid={isEmailValid}
                getInputValue={getEmailValue}
                validateInputField={validateEmail}
                validationText={EMAIL_VALIDATION_TEXT}
                label="Email"
                placeholder="Email"
                type="email"
                required={true}
                icon={<AccountCircle />}
            />
            <FormItem
                inputValue={pass}
                showValidationText={showPassValidText}
                isValueValid={isPassValid}
                getInputValue={getPasswordValue}
                validateInputField={validatePassword}
                validationText={PASSWORD_VALIDATION_TEXT}
                label="Password"
                placeholder="Password"
                type="password"
                required={true}
                icon={<LockIcon />}
            />
            <Button
                disabled={isBtnDisabled}
                onClick={onLoginBtnClick}
                variant="contained"
                color="primary"
            >
                Sign In
            </Button>
        </div>
    );
}
