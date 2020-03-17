import React from 'react';
import Header from '../../sections/header';
import Main from '../../sections/main';
import Footer from '../../sections/footer';

export default function NotFoundLayout(props) {
    return (
        <>
            <Header></Header>
            <Main>{props.children}</Main>
            <Footer></Footer>
        </>
    );
}
