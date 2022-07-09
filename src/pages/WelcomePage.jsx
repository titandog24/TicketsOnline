import React from 'react';
import CartaEncabezado from '../components/CartaDelEncabezado/';
import Patrocinadores from '../components/Patrocinadores/'
import ContenidoCentral from '../components/ContenidoCentral/';

const WelcomePage = () => {
    return (
        <>
            <CartaEncabezado />
            <Patrocinadores />
            <ContenidoCentral indice={1} />
        </>
    );
}

export default WelcomePage;
