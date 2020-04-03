import React from "react";
import clsx from "clsx";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import ErrorIcon from "@material-ui/icons/Error";
import InfoIcon from "@material-ui/icons/Info";
import CloseIcon from "@material-ui/icons/Close";
import IconButton from "@material-ui/core/IconButton";
import Snackbar from "@material-ui/core/Snackbar";
import SnackbarContent from "@material-ui/core/SnackbarContent";
import WarningIcon from "@material-ui/icons/Warning";
import { useStyles } from "./queryMessageCss";

const variantIcon = {
    success: CheckCircleIcon,
    warning: WarningIcon,
    error: ErrorIcon,
    info: InfoIcon,
};

function SnackbarWrapper(props) {
    const classes = useStyles();
    const { className, message, onClose, variant, ...other } = props;
    const Icon = variantIcon[variant];

    return (
        <SnackbarContent
            className={clsx(classes[variant], className)}
            aria-describedby="client-snackbar"
            message={
                <span id="client-snackbar" className={classes.message}>
                    <Icon className={clsx(classes.icon, classes.iconVariant)} />
                    {message}
                </span>
            }
            action={[
                <IconButton
                    key="close"
                    aria-label="Close"
                    color="inherit"
                    onClick={onClose}
                >
                    <CloseIcon className={classes.icon} />
                </IconButton>,
            ]}
            {...other}
        />
    );
}

export default function QueryMessage(props) {
    console.log("props", props);
    const { showMessage, variant, textMessage } = props;

    function handleClose(event, reason) {
        if (reason === "clickaway") {
            return;
        }
    }
    return (
        <div>
            <Snackbar
                anchorOrigin={{
                    vertical: "top",
                    horizontal: "center",
                }}
                open={showMessage}
                autoHideDuration={6000}
                onClose={handleClose}
            >
                <SnackbarWrapper
                    onClose={handleClose}
                    variant={variant}
                    message={textMessage}
                />
            </Snackbar>
        </div>
    );
}
