import React from 'react'  
import Card from '@mui/material/Card'

const ContenidoIzquierdo = () => {
    return (
            <h1>Hola mundo</h1>
    )
}

const ContenidoDerecho = () => {
    return (
        <Card>
            <h1>Hola mundo</h1>
        </Card>
    )
}

const SegundoContenidoCentral = () => {
    return [ContenidoIzquierdo(), ContenidoDerecho()]  
}

export default SegundoContenidoCentral  
