import React from "react";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
    large: {
        width: 150,
        height: 150,
        borderRadius: "50%",
        overflow: "hidden",
        marginBottom: "1.5rem",
    },
    middle: {
        width: 100,
        height: 100,
        borderRadius: "50%",
        overflow: "hidden",
    },
    small: {
        width: 50,
        height: 50,
        borderRadius: "50%",
        overflow: "hidden",
    },
    img: {
        width: "100%",
        height: "100%",
    },
});

export default function ProfileAvatar({ url, alt, avatarClassName }) {
    const classes = useStyles();
    return (
        <div className={classes[avatarClassName]}>
            <img className={classes.img} src={url} alt={alt ? alt : ""} />
        </div>
    );
}
