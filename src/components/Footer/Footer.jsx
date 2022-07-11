import React from 'react'
import { Grid, Link, Typography } from '@mui/material'
import {Link as RouterLink} from 'react-router-dom'
import { OpcionesDelFooter, LogoEmpresa } from '../../utils/Data' 

const RenderizarOpcion = ({valor}) => {
    return (
        <div key={valor} style={{marginTop:'15px', marginBottom:'15px'}}>
            <Link to='/' component={RouterLink} underline="hover" color='inherit'>
                <Typography>{valor}</Typography>
            </Link>
        </div>
    )
}

const RenderizarOpcionesDelFooter = ({ opcion }) => {
    return (
        <Grid item xs={12} md={2} marginBottom={'3rem'}>
            <div style={{marginBottom:'2rem'}}>
                <Typography style={{fontWeight: 'bold', color:'#BFBEBE'}}>
                    {opcion.categoria}
                </Typography>
            </div>
            <div>
                {
                    opcion.opciones.map(valor => <RenderizarOpcion key={valor} valor={valor} />)
                }
            </div>
        </Grid>
    )
}

const RenderizarLogo = () => {
    return (
        <>
            <Grid item xs={12} textAlign='center' style={{marginBottom:'1rem'}}>
                <img src={LogoEmpresa()} alt='logo empresa' style={{maxWidth:'8rem'}} />
            </Grid>
            <Grid item xs={12} textAlign='center'>
                <Typography>
                    2022 © Tickets Technologies
                </Typography>
                <Typography>
                    Todos los derechos reservados.
                </Typography>
            </Grid>
        </>
    )
}

const Footer = () => {
    const arregloConOpcionesDelFooter = OpcionesDelFooter()
    return (
        <Grid container item marginTop='8rem'>
            <Grid item xs={12} md={4}>
                <RenderizarLogo />
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
