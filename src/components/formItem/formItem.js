import React, { useCallback } from "react";
import InputAdornment from "@material-ui/core/InputAdornment";
import TextField from "@material-ui/core/TextField";

export default function FormItem({
    getInputValue,
    label,
    validateInputField,
    isValueValid,
    validationText,
    placeholder,
    type,
    icon,
    required,
    showValidationText,
    inputValue,
}) {
    const handleInputChange = useCallback(e => {
        let value = e.target.value;
        getInputValue(value);
    }, []);

    const onHandleInputValidate = () => {
        if (!validateInputField(inputValue)) {
            isValueValid(false);
        } else {
            isValueValid(true);
        }
    };

    return (
        <TextField
            style={{ marginBottom: "1.5rem" }}
            id={`${label}`}
            error={showValidationText}
            onChange={e => handleInputChange(e)}
            onBlur={onHandleInputValidate}
            value={inputValue}
            type={type}
            required={required}
            placeholder={placeholder}
            FormHelperTextProps={{ color: "red" }}
            fullWidth
            helperText={showValidationText ? validationText : null}
            InputProps={{
                startAdornment: (
                    <InputAdornment position="start">{icon}</InputAdornment>
                ),
            }}
        />
    );
}
