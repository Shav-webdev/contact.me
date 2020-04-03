import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(theme => ({
    wrapper: {
        backgroundColor: "#fff",
        borderRadius: 5,
        padding: "1rem 3rem",
    },
    paper: {
        marginTop: theme.spacing(2),
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: "100%", // Fix IE 11 issue.
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    linkBlue: {
        color: "rgb(76, 121, 210)",
        fontSize: "0.875rem",
        fontWeight: 600,
        lineHeight: "1.75",
        letterSpacing: "0.025em",
    },
    genderFormControl: {
        marginBottom: "1rem",
        width: "100%",
    },
}));
