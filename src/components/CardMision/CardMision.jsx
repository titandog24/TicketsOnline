import React from 'react';
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import { TitulosYTexto, ListaDeImagenes } from '../../utils/Data';
import './CardMision.css'

const ContenidoMision = () => {
    return (
        <Grid 
        item 
        xs={12} 
        textAlign={'center'} 
        padding={{ md: '5rem' }}>
            <Grid>
                <Typography 
                color='white' 
                variant='h4' 
                sx={{ mb: 5 }}>
                    {TitulosYTexto().tituloMision}
                </Typography>
            </Grid>
            <Grid>
                <Typography color='white' variant='h6'>
                    {TitulosYTexto().detalleMision}
                </Typography>
            </Grid>
        </Grid>
    )
}
const DetalleMision = () => {
    return (
        <Grid 
        item 
        xs={12} 
        height={'100%'}>
            <div style={{
                backgroundImage: `url(${ListaDeImagenes().fondoRegistro})`,
            }}
                className='divFondoMision'></div>
        </Grid>
    )
}

const CardMision = () => {
    return (
        <Grid 
        container 
        direction={'row'} 
        justifyContent={'center'} 
        className='divMision' 
        height={{ xs: '900px', md: '500px' }}>
            <Grid 
            container
            item 
            xs={12} 
            md={6} 
            sx={{ 
                display: 'center', 
                justifyContent: 'center', 
                alignItems: 'center', 
                backgroundColor: 'rgba(0, 0, 0, 0.8)' }}>
                <ContenidoMision />
            </Grid>
            <Grid item xs={12} md={6} >
                <DetalleMision />
            </Grid>
        </Grid>
    );
}

export default CardMision;
