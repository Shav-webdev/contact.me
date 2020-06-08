import React, { useState, useEffect } from "react";
import classes from "./login.module.css";
import FormItem from "../../components/formItem/formItem";
import { validateEmail, validatePassword } from "../../utils/validations";
import { Button } from "@material-ui/core";
import { validationMessages } from "../../utils/constants";
import { Link } from "react-router-dom";
import LockIcon from "@material-ui/icons/Lock";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Grid from "@material-ui/core/Grid";
import { connect } from "react-redux";
import { userLoginThunk } from "../../redux/thunks/index";

const { emailText, passText } = validationMessages;

function Login(props) {
    const { login, t } = props;

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
        setEmail(email);
    };
    const getPasswordValue = pass => {
        setShowPassValidText(false);
        setPass(pass);
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
            login(data);
            setEmail("");
            setPass("");
        }
    };

    return (
        <div className={classes.loginWrapper}>
            <div className={classes.loginHeadingWrapper}>
                <h1>{t("Login")}</h1>
            </div>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <FormItem
                        inputValue={email}
                        showValidationText={showEmailValidText}
                        isValueValid={isEmailValid}
                        getInputValue={getEmailValue}
                        validateInputField={validateEmail}
                        validationText={emailText}
                        label={t("Email")}
                        placeholder={t("Email")}
                        type="email"
                        required={true}
                        icon={<AccountCircle />}
                    />
                </Grid>
                <Grid item xs={12}>
                    <FormItem
                        inputValue={pass}
                        showValidationText={showPassValidText}
                        isValueValid={isPassValid}
                        getInputValue={getPasswordValue}
                        validateInputField={validatePassword}
                        validationText={passText}
                        label={t("Password")}
                        placeholder={t("Password")}
                        type="password"
                        required={true}
                        icon={<LockIcon />}
                    />
                </Grid>
            </Grid>
            <Button
                disabled={isBtnDisabled}
                onClick={onLoginBtnClick}
                variant="contained"
                color="primary"
                fullWidth
            >
                {t("Login")}
            </Button>
            <Grid container justify="flex-end" style={{ marginTop: "1rem" }}>
                <Grid item>
                    <Link
                        className={classes.linkBlue}
                        to="/register"
                        variant="body2"
                    >
                        {t("Don't have an account?")}
                    </Link>
                </Grid>
            </Grid>
        </div>
    );
}

const mapDispatchToProps = dispatch => {
    return {
        login: data => {
            dispatch(userLoginThunk(data));
        },
    };
};

export default connect(null, mapDispatchToProps)(React.memo(Login));
