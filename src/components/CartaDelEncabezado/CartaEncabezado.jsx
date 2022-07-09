import React from 'react';
import { Button, CardMedia, Grid, Typography, Card } from '@mui/material';
import { ImagenCartaEncabezado, TitulosYTexto } from '../../utils/Data';


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
                <Button variant="outlined" color='secondary'>Registrate ahora</Button>
            </Grid>
        </Grid>
    )
}
const ContDer = (imagen) => {
    return (
        <Grid container item xs={12} md={6}>
            <Grid item xs={12}>
                <Card>
                    <CardMedia
                        component={'img'}
                        image={imagen}
                        alt='Hola mundo'
                    />
                </Card>
            </Grid>
        </Grid>
    )
}
const CartaEncabezado = () => {
    const imagenEncabezado = ImagenCartaEncabezado()
    const tituloPrincipal = TitulosYTexto().tituloPrincipal
    const tituloSecundario = TitulosYTexto().tituloSecundario
    return (
        <Grid
            container item>
            {
                ContIzq(tituloPrincipal, tituloSecundario)
            }
            {
                ContDer(imagenEncabezado)
            }
        </Grid>
    );
}

export default CartaEncabezado;
