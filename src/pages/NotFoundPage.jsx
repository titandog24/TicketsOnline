import Grid  from '@mui/material/Grid';
import Typography  from '@mui/material/Typography';
import React from 'react';
import Link from '@mui/material/Link'
import { Link as RouterLink } from 'react-router-dom'

const NotFoundPage = () => {
    return (
        <Grid 
        justifyContent={'center'} 
        alignContent={'center'}
        direction='column' container item>
            <Grid item>
            <Typography>
                ¡Ups! La página no ha sido encontrada
            </Typography>
            <Link to='/' component={RouterLink} color='inherit' aria-label='menu' textAlign={'center'}>
                Volver al inicio
            </Link>
            </Grid>
        </Grid>
    );
}

export default NotFoundPage;
