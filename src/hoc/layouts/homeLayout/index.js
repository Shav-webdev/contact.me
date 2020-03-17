import React from 'react';
import Header from '../../sections/header';
import Main from '../../sections/main';
import Footer from '../../sections/footer';
import PrimarySearchAppBar from '../../../containers/navbar/navbar';

export default function HomeLayout(props) {
    return (
        <>
            <Header>
                <PrimarySearchAppBar />
            </Header>
            <Main>{props.children}</Main>
            <Footer></Footer>
        </>
    );
}
