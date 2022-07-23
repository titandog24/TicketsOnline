import React from 'react';
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography';
import { ListaOpcionesDetalle } from '../../utils/Data';


const Opcion = ({InfoOpcion}) => {
    const {titulo, detalle} = InfoOpcion
    return (
        <Grid item xs={12} sm={6}>
            <Grid item xs={12}>
                <Typography 
                variant={'h6'}
                sx={{fontFamily: 'sans-serif',
                     fontWeight: 'bold !important',
                     mb: 1, mt:1,
                     color: '#7b1fa2'}}>
                    {titulo}
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <Typography
                sx={{fontFamily: 'sans-serif'}}>
                    {detalle}
                </Typography>
            </Grid>
        </Grid>
    )
}

const OpcionesIndice = () => {
    return (
        <Grid container item direction={'row'} xs={12}>
            {
                ListaOpcionesDetalle().map((opcion, index) => <Opcion key={index} InfoOpcion={opcion} />)
            }
        </Grid>
    );
}

export default OpcionesIndice;
