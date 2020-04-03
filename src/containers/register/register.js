import React, { useEffect, useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from "@material-ui/pickers";
import MomentUtils from "@date-io/moment";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { useStyles } from "./register.styles.css";
import Container from "@material-ui/core/Container";
import FormItem from "../../components/formItem/formItem";
import AccountCircle from "@material-ui/icons/AccountCircle";
import PhoneIcon from "@material-ui/icons/Phone";
import AlternateEmailIcon from "@material-ui/icons/AlternateEmail";
import {
    validateEmail,
    validateName,
    validatePassword,
    validatePhoneNumber,
} from "../../services/validations";
import {
    DATE_VALIDATION_TEXT,
    EMAIL_VALIDATION_TEXT,
    FIRST_NAME_VALIDATION_TEXT,
    LAST_NAME_VALIDATION_TEXT,
    PASSWORD_VALIDATION_TEXT,
    PHONE_NUMBER_VALIDATION_TEXT,
    GENDER_VALIDATION_TEXT,
} from "../../services/constants";
import LockIcon from "@material-ui/icons/Lock";
import moment from "moment";
import { register } from "../../services/services";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";

function Copyright() {
    const classes = useStyles();
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {"Copyright © "}
            <Link className={classes.linkBlue} color="inherit" to="/">
                Contact.me
            </Link>
            {"  " + new Date().getFullYear()}
            {"."}
        </Typography>
    );
}

export default function Register() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [pass, setPass] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [selectedDate, setSelectedDate] = useState(null);
    const [isFirstNameValid, setIsFirstNameValid] = useState(false);
    const [isLastNameValid, setIsLastNameValid] = useState(false);
    const [isEmailValueValid, setIsEmailValueValid] = useState(false);
    const [isPassValueValid, setIsPassValueValid] = useState(false);
    const [isPhoneValueValid, setIsPhoneValueValid] = useState(false);
    const [isDateValid, setIsDateValid] = useState(false);
    const [isGenderValid, setIsGenderValid] = useState(false);
    const [isBtnDisabled, setIsBtnDisabled] = useState(true);

    const [showFNameValidText, setShowFNameValidText] = useState(false);
    const [showLNameValidText, setShowLNameValidText] = useState(false);
    const [showEmailValidText, setShowEmailValidText] = useState(false);
    const [showPassValidText, setShowPassValidText] = useState(false);
    const [showPhoneValidText, setShowPhoneValidText] = useState(false);
    const [showGenderValidText, setShowGenderValidText] = useState(false);
    const [showDateValidText, setShowDateValidText] = useState(false);
    const [gender, setGender] = useState("");

    useEffect(() => {
        if (!firstName) {
            setIsBtnDisabled(true);
        } else if (!lastName) {
            setIsBtnDisabled(true);
        } else if (!email) {
            setIsBtnDisabled(true);
        } else if (!pass) {
            setIsBtnDisabled(true);
        } else if (!phoneNumber) {
            setIsBtnDisabled(true);
        } else if (!selectedDate) {
            setIsBtnDisabled(true);
        } else if (!gender) {
            setIsBtnDisabled(true);
        } else if (
            !firstName &&
            !lastName &&
            !phoneNumber &&
            !email &&
            !selectedDate &&
            !gender &&
            !pass
        ) {
            setIsBtnDisabled(true);
        } else {
            setIsBtnDisabled(false);
        }
    }, [firstName, lastName, phoneNumber, email, gender, pass, selectedDate]);

    const handleGenderChange = e => {
        const gender = e.target.value;
        setShowGenderValidText(false);
        setGender(gender);
        if (gender === "male" || gender === "female") {
            setIsGenderValid(true);
        }
    };

    const getFirstName = firstNameValue => {
        setShowFNameValidText(false);
        setFirstName(firstNameValue);
    };

    const getLastName = lastNameValue => {
        setShowLNameValidText(false);
        setLastName(lastNameValue);
    };

    const getEmail = emailAdd => {
        setShowEmailValidText(false);
        setEmail(emailAdd);
    };

    const getPassword = password => {
        setShowPassValidText(false);
        setPass(password);
    };

    const getPhoneNumber = number => {
        setShowPhoneValidText(false);
        setPhoneNumber(number);
    };

    const isFNameValid = v => {
        setIsFirstNameValid(v);
    };

    const isLNameValid = v => {
        setIsLastNameValid(v);
    };

    const isEmailValid = v => {
        setIsEmailValueValid(v);
    };

    const isPhoneValid = v => {
        setIsPhoneValueValid(v);
    };
    const isPassValid = v => {
        setIsPassValueValid(v);
    };

    const handleDateChange = date => {
        setSelectedDate(date);
    };

    const onDateValidate = date => {
        setSelectedDate(date);
        setIsDateValid(true);
    };

    const onRegisterBtnClick = () => {
        if (
            !isFirstNameValid &&
            !isLastNameValid &&
            !isEmailValueValid &&
            !isPhoneValueValid &&
            !isPassValueValid &&
            !isGenderValid &&
            !selectedDate
        ) {
            setShowFNameValidText(true);
            setShowLNameValidText(true);
            setShowPhoneValidText(true);
            setShowEmailValidText(true);
            setShowPassValidText(true);
            setShowDateValidText(true);
            setShowGenderValidText(true);
        } else if (!isFirstNameValid) {
            setShowFNameValidText(true);
        } else if (!isLastNameValid) {
            setShowLNameValidText(true);
        } else if (!isEmailValueValid) {
            setShowEmailValidText(true);
        } else if (!isPhoneValueValid) {
            setShowPhoneValidText(true);
        } else if (!isDateValid) {
            setShowDateValidText(true);
        } else if (!isGenderValid) {
            setShowGenderValidText(true);
        } else if (!isPassValueValid) {
            setShowPassValidText(true);
        } else {
            const data = {
                firstName,
                lastName,
                phoneNumber,
                email,
                pass,
                gender,
                selectedDate,
            };
            register(data);
            setFirstName("");
            setLastName("");
            setPhoneNumber("");
            setEmail("");
            setPass("");
            setGender("");
            setSelectedDate(new Date(moment().format("LL")));
        }
    };
    const classes = useStyles();

    return (
        <Container className={classes.wrapper} maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign up
                </Typography>
                <form className={classes.form} noValidate>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <FormItem
                                inputValue={firstName}
                                showValidationText={showFNameValidText}
                                isValueValid={isFNameValid}
                                getInputValue={getFirstName}
                                validateInputField={validateName}
                                validationText={FIRST_NAME_VALIDATION_TEXT}
                                label="firstName"
                                placeholder="First name"
                                type="text"
                                required={true}
                                icon={<AccountCircle />}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <FormItem
                                inputValue={lastName}
                                showValidationText={showLNameValidText}
                                isValueValid={isLNameValid}
                                getInputValue={getLastName}
                                validateInputField={validateName}
                                validationText={LAST_NAME_VALIDATION_TEXT}
                                label="lastName"
                                placeholder="Last name"
                                type="text"
                                required={true}
                                icon={<AccountCircle />}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <FormItem
                                inputValue={email}
                                showValidationText={showEmailValidText}
                                isValueValid={isEmailValid}
                                getInputValue={getEmail}
                                validateInputField={validateEmail}
                                validationText={EMAIL_VALIDATION_TEXT}
                                label="email"
                                placeholder="Email Address"
                                type="email"
                                required={true}
                                icon={<AlternateEmailIcon />}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <FormItem
                                inputValue={phoneNumber}
                                showValidationText={showPhoneValidText}
                                isValueValid={isPhoneValid}
                                getInputValue={getPhoneNumber}
                                validateInputField={validatePhoneNumber}
                                validationText={PHONE_NUMBER_VALIDATION_TEXT}
                                label="phone"
                                placeholder="Phone number"
                                type="text"
                                required={true}
                                icon={<PhoneIcon />}
                            />
                        </Grid>
                        <Grid item style={{ marginTop: -16 }} xs={12} sm={6}>
                            <MuiPickersUtilsProvider utils={MomentUtils}>
                                <KeyboardDatePicker
                                    initialFocusedDate={
                                        new Date(moment().format("LL"))
                                    }
                                    disableFuture={true}
                                    style={{ marginBottom: "1rem" }}
                                    onAccept={onDateValidate}
                                    required={true}
                                    fullWidth
                                    minDate={new Date("1910-01-01")}
                                    maxDate={new Date()}
                                    id="date-picker-dialog"
                                    label="Birth date"
                                    format="LL"
                                    value={selectedDate}
                                    onChange={handleDateChange}
                                    KeyboardButtonProps={{
                                        "aria-label": "change date",
                                    }}
                                />
                            </MuiPickersUtilsProvider>
                            {showDateValidText && (
                                <FormHelperText>
                                    {DATE_VALIDATION_TEXT}
                                </FormHelperText>
                            )}
                        </Grid>
                        <Grid item xs={12}>
                            <FormControl className={classes.genderFormControl}>
                                <Select
                                    value={gender}
                                    onChange={handleGenderChange}
                                    displayEmpty
                                >
                                    <MenuItem value="">Gender</MenuItem>
                                    <MenuItem value="male">Male</MenuItem>
                                    <MenuItem value="female">Female</MenuItem>
                                </Select>
                                {showGenderValidText && (
                                    <FormHelperText>
                                        {GENDER_VALIDATION_TEXT}
                                    </FormHelperText>
                                )}
                            </FormControl>
                        </Grid>
                        <Grid item xs={12}>
                            <FormItem
                                inputValue={pass}
                                showValidationText={showPassValidText}
                                isValueValid={isPassValid}
                                getInputValue={getPassword}
                                validateInputField={validatePassword}
                                validationText={PASSWORD_VALIDATION_TEXT}
                                label="Password"
                                placeholder="Password"
                                type="password"
                                required={true}
                                icon={<LockIcon />}
                            />
                        </Grid>
                    </Grid>
                    <Button
                        disabled={isBtnDisabled}
                        onClick={onRegisterBtnClick}
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        Sign Up
                    </Button>
                    <Grid container justify="flex-end">
                        <Grid item>
                            <Link
                                className={classes.linkBlue}
                                to="/"
                                variant="body2"
                            >
                                Already have an account? Sign in
                            </Link>
                        </Grid>
                    </Grid>
                </form>
            </div>
            <Box mt={5}>
                <Copyright />
            </Box>
        </Container>
    );
}
