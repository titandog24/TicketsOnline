import React from 'react'
import Grid from '@mui/material/Grid'
import { DatosListaCarta, TitulosYTexto } from '../../utils/Data'
import Cartas from '../Cartas/'
import { Typography } from '@mui/material'

const RenderizarCarta = ({ image, texto }) => {
    return <Cartas texto={texto} imagen={image} />
}


const CartasLista = () => {
    const Data = DatosListaCarta()

    return (
        <Grid container 
        item 
        marginTop={{ md: '5rem' }} 
        alignItems={'center'} 
        alignContent={'center'}>
            <Grid container item xs={12} justifyContent={'center'}>
                <Typography variant='h5'>
                    {TitulosYTexto().tituloListaEventos}
                </Typography>
            </Grid>
            <Grid
                container item
                spacing={2}
                justifyContent={'center'}
                marginTop={{ md: '15px' }}
                xs={12}>
                {
                    Data.map((datos, index) => {
                        return <RenderizarCarta key={index} image={datos.imagen} texto={datos.texto} />
                    })
                }
            </Grid>
        </Grid>
    )
}

export default CartasLista  
