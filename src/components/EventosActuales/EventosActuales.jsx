import React from 'react';
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Link from '@mui/material/Link'
import { RecuadroImage } from '../../utils/RecuadroImagen';
import { DataDeEventos } from '../../utils/Data';

const CuadroImagen = ({ rutaImagen }) => {
    return (
        <RecuadroImage ruta={rutaImagen} />
    )
}

const DetalleImagen = ({ fechaPublicacion, titulo, detalle, enlace, orientacion }) => {
    const justify = (orientacion === 'I' ? 'right' : 'left')
    return (
        <Grid item xs={12} textAlign={{ xs: 'center', md: justify }}>
            <Grid item xs={12}>
                <Typography variant={'h6'}>
                    {fechaPublicacion}
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <Typography variant={'h3'}>
                    {titulo}
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <Typography variant={'h5'}>
                    {detalle}
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <Button variant="contained" color='secondary'>
                    <Link to={`/${enlace}`} underline={'none'} color='inherit'>
                        View Detail
                    </Link>
                </Button>
            </Grid>
        </Grid>
    )
}

const DivisionCartas = ({ evento }) => {
    const {
        fechaPublicacion,
        titulo,
        detalle,
        enlace,
        imagen,
        orientacionImagen } = evento
    return (
        <>
            <Grid container item xs={12} spacing={2} marginBottom={{ xs: 5 }} display={{ xs: 'none', md: 'flex' }}>
                <Grid item xs={12} md={6}>
                    {
                        orientacionImagen === 'D'
                            ? <DetalleImagen
                                detalle={detalle}
                                enlace={enlace}
                                fechaPublicacion={fechaPublicacion}
                                titulo={titulo}
                                orientacion={'I'} />
                            : <CuadroImagen rutaImagen={imagen} />
                    }
                </Grid>
                <Grid item xs={12} md={6}>
                    {
                        orientacionImagen === 'I'
                            ? <DetalleImagen
                                detalle={detalle}
                                enlace={enlace}
                                fechaPublicacion={fechaPublicacion}
                                titulo={titulo}
                                orientacion={'D'} />
                            : <CuadroImagen rutaImagen={imagen} />
                    }
                </Grid>
            </Grid>
            <Grid container item xs={12} spacing={2} marginBottom={{ xs: 5 }} display={{ xs: 'flex', md: 'none' }}>
                <Grid item xs={12} md={6}>
                    <DetalleImagen
                        detalle={detalle}
                        enlace={enlace}
                        fechaPublicacion={fechaPublicacion}
                        titulo={titulo}
                        orientacion={'I'} />
                </Grid>
                <Grid item xs={12} md={6}>
                    <CuadroImagen rutaImagen={imagen} />
                </Grid>
            </Grid>
        </>

    )
}

const EventosActuales = () => {
    return (
        <Grid
            container
            direction={'row'}
            justifyContent={'center'} marginLeft={{ md: 10 }} marginRight={{ md: 10 }}>
            <Grid item xs={12} textAlign={'center'} marginTop={{ md: '200px' }} marginBottom={{ md: '100px' }}>
                <Typography variant={'h2'}>
                    Eventos Actuales
                </Typography>
            </Grid>
            <Grid item xs={12} md={6} >
                {
                    DataDeEventos().map((evento, index) => {
                        return <DivisionCartas key={index} evento={evento} />
                    })
                }
            </Grid>
        </Grid>
    );
}

export default EventosActuales;
