import Grid from '@mui/material/Grid' 
import Typography from '@mui/material/Typography' 
import React from 'react' 
import AppFrame from '../components/AppFrame'

const NotFoundPage = () => {
    return (
        <AppFrame>
            <Grid
                justifyContent={'center'}
                alignContent={'center'}
                direction='column' container item>
                <Grid item>
                    <Typography variant='h1'>
                        ¡Ups! La página no ha sido encontrada
                    </Typography>
                </Grid>
            </Grid>
        </AppFrame>
    )
}

export default NotFoundPage