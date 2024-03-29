import React from 'react'  
import { Button, Grid, Typography, Card, Link } from '@mui/material'  
import { ImagenCartaEncabezado, TitulosYTexto } from '../../utils/Data'  
import {Link as RouterLink} from 'react-router-dom'


const ContIzq = (tituloPrincipal, tituloSecundario) => {
    return (
        <Grid container item xs={12} md={6}>
            <Grid item xs={12} alignContent='center' justifyContent='center'>
                <Typography variant="h2">
                    {tituloPrincipal}
                </Typography>
            </Grid>
            <Grid item xs={12} alignContent='center' justifyContent='center'>
                <Typography variant="h5">
                {tituloSecundario}
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <Button variant="outlined" color='secondary'>
                    <Link to={'/Registro'} component={RouterLink}>
                        Registrate ahora
                    </Link>
                </Button>
            </Grid>
        </Grid>
    )
}
const ContDer = (imagen) => {
    return (
        <Grid container item xs={12} md={6}>
            <Card>
                <img src={imagen} style={{minHeight: '100%', maxWidth: '100%'}} alt="Imagen del Encabezado" />
            </Card>
        </Grid>
    )
}
const CartaEncabezado = () => {
    const imagenEncabezado = ImagenCartaEncabezado()
    const tituloPrincipal = TitulosYTexto().tituloPrincipal
    const tituloSecundario = TitulosYTexto().tituloSecundario
    return (
        <Grid
            container 
            item marginTop={{ xs: '5rem', md: '10rem' }}>
            {
                ContIzq(tituloPrincipal, tituloSecundario)
            }
            {
                ContDer(imagenEncabezado)
            }
        </Grid>
    )  
}

export default CartaEncabezado  
