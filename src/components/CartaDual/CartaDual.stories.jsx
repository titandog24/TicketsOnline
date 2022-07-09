import React from 'react'
import CartaDual from './'
import { Button, CardMedia, Grid, Typography } from '@mui/material';

export default {
    title: 'CartaDual',
    component: CartaDual
}

const ContIzq = () => {
    return(
        <div>
            <Grid container item>
                <Grid item xs={12}>
                    <Typography>
                        La plataforma sin diseño para héroes de productos
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography>
                        Arrastre y suelte plantillas y componentes para diseñar su producto digital en minutos. ¡Como magia!
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Button variant="contained">Registrate ahora</Button>
                </Grid>
            </Grid>
        </div>
    )
}
const ContDer = ({test}) => {
    return(
        <div>
            <h1>Hola Derecha</h1>
            <button>Registrarse</button>
        </div>
    )
}
export const CartaDualRender = () => <CartaDual 
ContenidoIzquierdo={ContIzq} 
ContenidoDerecho={<ContDer test={'test'} />} 
DimensionIzq={{'xs':12, 'md': 4}} 
DimensionDer={{'xs':12, 'md': 8}}
NecesitaCarta={{'iz':true, 'de':false}}
/>