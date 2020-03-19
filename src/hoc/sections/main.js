import React from 'react';

export default function Main(props) {
    const style = {
        minHeight: 'calc(100vh - 64px)',
        marginTop: 64,
    };
    return <main style={style}>{props.children}</main>;
}
