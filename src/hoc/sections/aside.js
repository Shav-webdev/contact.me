import React from "react";

export default function Aside(props) {
    const style = {
        boxShadow: "1px 0px 15px 1px",
        height: "fit-content",
        borderRadius: 5,
    };

    return <aside style={style}>{props.children}</aside>;
}
