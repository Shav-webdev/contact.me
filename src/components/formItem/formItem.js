import React, { useCallback, useEffect, useState } from 'react';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import AccountCircle from '@material-ui/icons/AccountCircle';

export default function FormItem({
    getInputValue,
    label,
    validateInputField,
    validationText,
    placeholder,
    type,
}) {
    const [inputValue, setInputValue] = useState('');
    const [showValidationText, setShowValidationText] = useState(false);
    const [isInputValueValid, setIsInputValueValid] = useState(null);

    const onHandleInputValidate = () => {
        if (!validateInputField(inputValue)) {
            console.log('not valid');
            setIsInputValueValid(false);
            setShowValidationText(true);
        } else {
            setIsInputValueValid(true);
            console.log('valid');
            setShowValidationText(false);
            getInputValue(inputValue);
        }
    };

    const handleInputChange = useCallback(e => {
        let value = e.target.value;
        console.log(value);
        setInputValue(value);
        setShowValidationText(false);
    }, []);

    return (
        <FormControl>
            <InputLabel htmlFor="input-with-icon-adornment">{label}</InputLabel>
            <Input
                error={isInputValueValid}
                onChange={e => handleInputChange(e)}
                onBlur={onHandleInputValidate}
                value={inputValue}
                type={type}
                placeholder={placeholder}
                helperText={
                    showValidationText && isInputValueValid
                        ? validationText
                        : ''
                }
                id={`${label}`}
                startAdornment={
                    <InputAdornment position="start">
                        <AccountCircle />
                    </InputAdornment>
                }
            />
        </FormControl>
    );
}
