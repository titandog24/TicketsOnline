import React from 'react'
import { dataAumentoDeUsuarios, TitulosYTexto } from '../../../utils/Data'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import FormatoDeCuerpoEnCarta from '../../../utils/FormatoTextoEnCarta'

const data = dataAumentoDeUsuarios()
const ContenidoIzquierdo = () => {
    const titulo = TitulosYTexto().tituloEstadistica
    const subTitulo = TitulosYTexto().subtituloEstadistica
    return (
        <FormatoDeCuerpoEnCarta Titulo={titulo} SubTitulo={subTitulo}>
            <></>
        </FormatoDeCuerpoEnCarta>
    )
}

const ContenidoDerecho = () => {
    return (
        <>
           <ResponsiveContainer height={250} width={'95%'}>
           <LineChart
                      width={500}
                      height={300}
                      margin={{ top: 20, bottom: 20, left: 5, right: 5 }}
                      data={data}>
                      <XAxis dataKey={"day"}></XAxis>
                      <YAxis></YAxis>
                      <CartesianGrid></CartesianGrid>
                      <Tooltip></Tooltip>
                      <Legend></Legend>
                      <Line type={'monotone'} dataKey='NuevosUsuarios' stroke='#076AAE'></Line>
                  </LineChart>
              </ResponsiveContainer>
        </>
      )
}


const PrimerContenidoCentral = () => {
    return [ContenidoIzquierdo(), ContenidoDerecho()]
}

export default PrimerContenidoCentral  
