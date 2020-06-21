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
    handleKeyPress,
}) {
    const inputRef = React.createRef();

    const handleInputChange = useCallback(
        e => {
            const value = e.target.value;
            getInputValue(value);
        },
        [getInputValue]
    );

    const onHandleInputValidate = () => {
        if (!validateInputField(inputValue)) {
            isValueValid(false);
        } else {
            isValueValid(true);
        }
    };

    const handleShowPass = () => {
        if (inputRef.current.id === "Password") {
            if (inputRef.current.type === "password") {
                inputRef.current.type = "text";
            } else {
                inputRef.current.type = "password";
            }
        }
        inputRef.current.focus();
    };

    const onHandleKeyPress = e => {
        handleKeyPress(e);
    };

    return (
        <TextField
            inputRef={inputRef}
            onKeyPress={
                handleKeyPress instanceof Function
                    ? e => onHandleKeyPress(e)
                    : null
            }
            style={{ marginBottom: "1rem" }}
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
                    <InputAdornment
                        style={{ cursor: "pointer" }}
                        onClick={
                            handleShowPass instanceof Function
                                ? handleShowPass
                                : null
                        }
                        position="start"
                    >
                        {icon}
                    </InputAdornment>
                ),
            }}
        />
    );
}
