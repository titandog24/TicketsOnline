import React from 'react'
import CartaEncabezado from '../components/CartaDelEncabezado/'
import Patrocinadores from '../components/Patrocinadores/'
import ContenidoCentral from '../components/ContenidoCentral/'
import AppFrame from '../components/AppFrame'
import CartasLista from '../components/CartasLista/CartasLista'
import CartaDeMultiplataforma from '../components/CartaDeMultiplataforma'



const WelcomePage = ({User, UserLogin}) => {
    return (
        <>
            <AppFrame isLogged={User} setUserLogin={UserLogin}>
                    <CartaEncabezado />
                    <Patrocinadores />
                    <ContenidoCentral indice={1} />
                    <CartasLista />
                    <CartaDeMultiplataforma />
            </AppFrame>
        </>
    )
}

export default WelcomePage  
