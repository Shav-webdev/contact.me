import React from 'react';
import classes from './styledButton.module.css';

export default function StyledButton({
    children,
    handleBtnClick,
    btnClassName,
}) {
    const btnClick = () => {
        handleBtnClick();
    };

    return (
        <button
            className={`${classes.btn} ${classes[btnClassName]}`}
            onClick={btnClick}
        >
            {children}
        </button>
    );
}
