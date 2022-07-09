import React from 'react';
import Grid from '@mui/material/Grid'
import { Card } from '@mui/material';



const RenderizarCarta = (Dimension,NecesitaCarta, Contenido) => {
    return (
        <Grid item xs={Dimension.xs} md={Dimension.md}>
            {
                NecesitaCarta ?
                    <Card>
                        <Contenido />
                    </Card>
                    : <Contenido />
            }
        </Grid>
    )
}

const CartaDual = (props) => {
    const {
        ContenidoIzquierdo,
        //ContenidoDerecho,
        DimensionIzq,
        //DimensionDer,
        NecesitaCarta
    } = props
    console.log(props)
    return (
        <Grid
            container item>
            {
                 RenderizarCarta(DimensionIzq,NecesitaCarta.iz, ContenidoIzquierdo)
            }
            {
                // RenderizarCarta(DimensionDer,NecesitaCarta.de, ContenidoDerecho)
            }
        </Grid>
    );
}

export default CartaDual;
