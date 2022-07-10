import React from 'react'
import { Grid, Link, Typography } from '@mui/material'
import {Link as RouterLink} from 'react-router-dom'
import { OpcionesDelFooter } from '../../utils/Data'



const RenderizarOpcionesDelFooter = ({ opcion }) => {
    return (
        <Grid item xs={12} md={2} marginBottom={'3rem'}>
            <div style={{marginBottom:'2rem'}}>
                <Typography variant='5'>
                    {opcion.categoria}
                </Typography>
            </div>
            <div>
                {
                    opcion.opciones.map(valor => {
                        return (
                            <div key={valor} style={{marginTop:'15px', marginBottom:'15px'}}>
                                <Link to='/' component={RouterLink} underline="hover" color='inherit'>
                                    <Typography key={valor} variant='5'>{valor}</Typography>
                                </Link>
                            </div>
                        )
                    })
                }
            </div>
        </Grid>
    )
}

const Footer = () => {
    const arregloConOpcionesDelFooter = OpcionesDelFooter()
    return (
        <Grid container item marginTop='8rem'>
            <Grid item xs={12} md={4}>

            </Grid>
            <Grid container item direction={'row'} xs={12} md={8} spacing={5} justifyContent='center'>
                {
                    arregloConOpcionesDelFooter.map(opcion => <RenderizarOpcionesDelFooter key={opcion.categoria} opcion={opcion} />)
                }
            </Grid>
        </Grid>
    )
}

export default Footer  
