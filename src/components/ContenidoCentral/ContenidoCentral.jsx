import React from 'react'
import Grid from '@mui/material/Grid'
import PrimerContenidoCentral from './PrimerContenidoCentral'
import SegundoContenidoCentral from './SegundoContenidoCentral'

const RenderCardDual = ({ component }) => {
    const [ContenidoIzquierdo, ContenidoDerecho] = component()
    return (
        <Grid container item marginTop='8rem'>
            <Grid item xs={12} md={6}>
                {ContenidoIzquierdo}
            </Grid>
            <Grid item xs={12} md={6}>
                {ContenidoDerecho}
            </Grid>
        </Grid>
    )
}

const ObtenerComponent = (indiceDeComponente) => {
    switch (indiceDeComponente) {
        case 1:
            return PrimerContenidoCentral
        case 2:
            return SegundoContenidoCentral
        default:
            return PrimerContenidoCentral
    }
}

const ContenidoCentral = ({ indice }) => {

    return (
        <RenderCardDual component={ObtenerComponent(indice)} />
    )
}

export default ContenidoCentral  
