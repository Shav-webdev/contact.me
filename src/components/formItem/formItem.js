import React, { useCallback, useState } from 'react';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';

export default function FormItem({
    getInputValue,
    label,
    validateInputField,
    validationText,
    placeholder,
    type,
    icon,
    required,
}) {
    const [inputValue, setInputValue] = useState('');
    const [showValidationText, setShowValidationText] = useState(false);
    const [isInputValueValid, setIsInputValueValid] = useState(null);

    const onHandleInputValidate = () => {
        if (validateInputField(inputValue)) {
            setIsInputValueValid(true);
            setShowValidationText(false);
            console.log(isInputValueValid);
            getInputValue(inputValue);
        } else {
            getInputValue(null);
            setIsInputValueValid(false);
            setShowValidationText(true);
        }
    };

    const handleInputChange = useCallback(e => {
        let value = e.target.value;
        setInputValue(value);
        setShowValidationText(false);
    }, []);

    return (
        <TextField
            style={{ marginBottom: '1.5rem' }}
            id={`${label}`}
            error={showValidationText && !isInputValueValid}
            onChange={e => handleInputChange(e)}
            onBlur={onHandleInputValidate}
            value={inputValue}
            type={type}
            required={required}
            placeholder={placeholder}
            FormHelperTextProps={{ color: 'red' }}
            helperText={
                showValidationText && !isInputValueValid ? validationText : null
            }
            InputProps={{
                startAdornment: (
                    <InputAdornment position="start">{icon}</InputAdornment>
                ),
            }}
        />
    );
}
