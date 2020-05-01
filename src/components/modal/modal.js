import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";

export default function ModalDialog({
    title,
    content,
    openBtnText,
    cancelBtnText,
    okBtnText,
    okBtnClick,
}) {
    const [open, setOpen] = React.useState(false);
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleOkBtnClick = () => {
        okBtnClick();
        setOpen(false);
    };

    return (
        <div>
            <Button
                variant="outlined"
                color="primary"
                onClick={handleClickOpen}
            >
                {openBtnText}
            </Button>
            <Dialog
                fullScreen={fullScreen}
                open={open}
                onClose={handleClose}
                aria-labelledby="responsive-dialog-title"
            >
                <DialogTitle id="responsive-dialog-title">{title}</DialogTitle>
                <DialogContent>{content}</DialogContent>
                <DialogActions>
                    <Button autoFocus onClick={handleClose} color="primary">
                        {cancelBtnText}
                    </Button>
                    <Button
                        onClick={handleOkBtnClick}
                        color="primary"
                        autoFocus
                    >
                        {okBtnText}
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
