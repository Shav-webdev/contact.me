import React from 'react';
import Header from '../../sections/header';
import Main from '../../sections/main';
import Footer from '../../sections/footer';
import NavBar from '../../../containers/navbar/navbar';
import homeBg from '../../../assets/images/homeBg.jpg';

export default function HomeLayout(props) {
    const style = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundImage: `url(${homeBg})`,
        backgroundColor: '#ccc',
        backgroundPosition: 'center center',
        backgroundSize: 'cover',
    };

    return (
        <>
            <Header>
                <NavBar />
            </Header>
            <Main style={style}>{props.children}</Main>
            <Footer></Footer>
        </>
    );
}
