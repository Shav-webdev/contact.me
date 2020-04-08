import React from "react";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
    wrapper: {
        width: 150,
        height: 150,
        borderRadius: "50%",
    },
    img: {
        width: "100%",
        height: "auto",
    },
});

export default function ProfileAvatar({ url, alt }) {
    const classes = useStyles();
    return (
        <div className={classes.wrapper}>
            <img className={classes.img} src={url} alt={alt ? alt : ""} />
        </div>
    );
}
