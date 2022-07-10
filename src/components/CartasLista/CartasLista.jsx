import React from 'react'  
import Grid from '@mui/material/Grid'  
import {DatosListaCarta} from '../../utils/Data'
import Cartas from '../Cartas/'  

const RenderizarCarta = ({image, texto}) => {
    return <Cartas texto={texto} imagen={image} />
}


const CartasLista = () => {
    const Data = DatosListaCarta()

    return (
        <Grid 
        container
        spacing={2}
        marginTop='8rem'
        >
            {
                Data.map((datos,index) => {
                    return <RenderizarCarta key={index} image={datos.imagen} texto={datos.texto}  />
                })
            }
        </Grid>
    )  
}

export default CartasLista  
