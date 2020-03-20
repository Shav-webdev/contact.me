import React, { useState, useEffect } from 'react';
import classes from './login.module.css';
import FormItem from '../../components/formItem/formItem';
import { validateEmail, validatePassword } from '../../services/validations';
import { Button } from '@material-ui/core';
import {
    PASSWORD_VALIDATION_TEXT,
    EMAIL_VALIDATION_TEXT,
} from '../../services/constants';
import LockIcon from '@material-ui/icons/Lock';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { login } from '../../services/services';

export default function Login(props) {
    const [email, setEmail] = useState(null);
    const [pass, setPass] = useState(null);
    const [isBtnDisabled, setIsBtnDisabled] = useState(true);

    useEffect(() => {
        if (email && pass) {
            setIsBtnDisabled(false);
        } else {
            setIsBtnDisabled(true);
        }
    }, [email, pass]);

    const getEmailValue = email => {
        console.log('before email', email);
        setEmail(email);
        console.log('email', email);
    };
    const getPasswordValue = pass => {
        console.log('before pass', pass);
        setPass(pass);
        console.log('pass', pass);
    };

    const onLoginBtnClick = () => {
        const data = {
            email,
            pass,
        };
        console.log(data);
        login(data);
    };

    return (
        <div className={classes.loginWrapper}>
            <div className={classes.loginHeadingWrapper}>
                <h1>Sign in</h1>
            </div>
            <FormItem
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
