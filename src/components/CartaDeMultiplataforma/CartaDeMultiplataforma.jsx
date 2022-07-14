import React from 'react'
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import { ListaDeImagenes } from '../../utils/Data'
import Typography  from '@mui/material/Typography'
import Button from '@mui/material/Button'
import { TitulosYTexto } from '../../utils/Data' 

const ContenidoIzquierdo = () => {
    return (
            <Grid container item xs={12}>
                <Grid item xs={12} alignContent='center' justifyContent='center' marginBottom={'3rem'}>
                    <Typography variant="h2">
                        {TitulosYTexto().tituloMultiplataforma}
                    </Typography>
                </Grid>
                <Grid item xs={12} alignContent='center' justifyContent='center' marginBottom={'3rem'}>
                    <Typography variant="h5">
                        {TitulosYTexto().tituloSecundarioMultiplataforma}
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Button variant="contained" color='info'>Registrate ahora</Button>
                </Grid>
            </Grid>
    )
}

const ContenidoDerecho = () => {
    return (
        <Card style={{minHeight:'100%', maxHeight:'100%'}}>
            <img src={ListaDeImagenes().TercerContenidoWelcome} alt='Celulares'/>
        </Card>
    )
}


const RenderCardDual = () => {
    return (
        <Grid container item marginTop='8rem' style={{backgroundColor:'black', color:'white', maxheight: '30rem'}}>
            <Grid item xs={12} md={6} style={{padding:'3rem'}}>
                <ContenidoIzquierdo />
            </Grid>
            <Grid item xs={12} md={6}>
                <ContenidoDerecho />
            </Grid>
        </Grid>
    )
}


const CartaDeMultiplataforma = () => {
    return <RenderCardDual />
}

export default CartaDeMultiplataforma  
