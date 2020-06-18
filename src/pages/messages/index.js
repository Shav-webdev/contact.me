import React from "react";
import classes from "./messages.module.scss";

function Messages() {
    return <div className={classes.messageSect}>Messages</div>;
}

export default React.memo(Messages);
