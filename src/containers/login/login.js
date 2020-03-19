import React, { useState } from 'react';
import classes from './login.module.css';
import FormItem from '../../components/formItem/formItem';
import { validateEmail, validatePassword } from '../../services/validations';
import { Button } from '@material-ui/core';
import { PASSWORD_VALIDATION_TEXT } from '../../services/constants';

export default function Login(props) {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const getEmailValue = email => {
        setEmail(email);
    };
    const getPasswordValue = pass => {
        setPass(pass);
    };

    const onLoginBtnClick = () => {
        const data = {
            email,
            pass,
        };
        console.log(data);
        // login(data)
    };

    return (
        <div className={classes.loginWrapper}>
            <FormItem
                getInputValue={getEmailValue}
                validateInputField={validateEmail}
                validationText={PASSWORD_VALIDATION_TEXT}
                label="Email"
                placeholder="Email"
                type="email"
            />
            <FormItem
                getInputValue={getPasswordValue}
                validateInputField={validatePassword}
                validationText={PASSWORD_VALIDATION_TEXT}
                label="Password"
                placeholder="Password"
                type="password"
            />
            <Button onClick={onLoginBtnClick} color="primary">
                Sign In
            </Button>
        </div>
    );
}
