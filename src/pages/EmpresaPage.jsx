import React from 'react';
import AppFrame from '../components/AppFrame';
import CardEventos from '../components/CardEventos/CardEventos';
import CardMision from '../components/CardMision';
import Ceo from '../components/Ceo/Ceo';
import EventosActuales from '../components/EventosActuales/EventosActuales';
import Footer from '../components/Footer';
import Header from '../components/Header/';
import IndiceDeEmpresa from '../components/IndiceDeEmpresa/IndiceDeEmpresa';


const EmpresaPage = ({User, UserLogin}) => {
    return (
        <>
            <AppFrame 
            isLogged={User} 
            requireFooter={false} 
            setUserLogin={UserLogin}></AppFrame>
            <Header></Header>
            <IndiceDeEmpresa />
            <CardMision />
            <EventosActuales />
            <Ceo />
            <CardEventos />
            <Footer />
        </>
    );
}

export default EmpresaPage;
