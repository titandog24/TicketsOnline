import React from 'react'  
import CartaEncabezado from '../components/CartaDelEncabezado/'  
import Patrocinadores from '../components/Patrocinadores/'
import ContenidoCentral from '../components/ContenidoCentral/'  
import AppFrame from '../components/AppFrame'  
import CartasLista from '../components/CartasLista/CartasLista'



const WelcomePage = () => {
    return (
        <AppFrame>
            <CartaEncabezado />
            <Patrocinadores />
            <ContenidoCentral indice={1} />
            <ContenidoCentral indice={2} />
            <CartasLista />
            <ContenidoCentral indice={2} />
        </AppFrame>
    )  
}

export default WelcomePage  
