import React, { useEffect, useState } from "react";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import { makeStyles } from "@material-ui/core/styles";

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles(theme => ({
    root: {
        width: "100%",
        "& > * + *": {
            marginTop: theme.spacing(2),
        },
    },
}));

export default function QueryMessage(props) {
    const { variant, showMessage, textMessage } = props;
    const classes = useStyles();
    const [open, setOpen] = useState(false);

    useEffect(() => {
        if (showMessage) {
            setOpen(true);
        }
    }, [showMessage]);

    const handleClose = (event, reason) => {
        if (reason === "clickaway") {
            return;
        }
        setOpen(false);
    };

    return (
        <div className={classes.root}>
            <Snackbar
                anchorOrigin={{ vertical: "top", horizontal: "center" }}
                open={open}
                autoHideDuration={6000}
                onClose={handleClose}
            >
                <Alert onClose={handleClose} severity={variant}>
                    {textMessage}
                </Alert>
            </Snackbar>
        </div>
    );
}
