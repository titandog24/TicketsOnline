import { Card } from '@mui/material';
import React from 'react';

const ContenidoIzquierdo = () => {
    return (
        <Card>
            <h1>Hola mundo</h1>
        </Card>
    )
}

const ContenidoDerecho = () => {
    return (
        <h1>Hola mundo</h1>
    )
}


const PrimerContenidoCentral = () => {
    return [ContenidoIzquierdo(), ContenidoDerecho()];
}

export default PrimerContenidoCentral;
