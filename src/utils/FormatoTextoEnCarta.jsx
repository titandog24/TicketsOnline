import React from 'react';
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

const FormatoDeCuerpoEnCarta = ({Titulo, SubTitulo, children}) => {
    return (
        <Grid container item xs={12}>
                <Grid item xs={12} alignContent='center' justifyContent='center' marginBottom={'3rem'}>
                    <Typography variant="h2">
                        {Titulo}
                    </Typography>
                </Grid>
                <Grid item xs={12} alignContent='center' justifyContent='center' marginBottom={'3rem'}>
                    <Typography variant="h5">
                        {SubTitulo}
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    {children}
                </Grid>
        </Grid>
    )
}

export default FormatoDeCuerpoEnCarta