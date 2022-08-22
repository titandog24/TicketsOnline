import Grid from '@mui/material/Grid' 
import Typography from '@mui/material/Typography' 
import React from 'react' 
import AppFrame from '../components/AppFrame'

const NotFoundPage = ({User, UserLogin}) => {
    return (
        <AppFrame isLogged={User} setUserLogin={UserLogin}>
            <Grid
                justifyContent={'center'}
                alignContent={'center'}
                direction='column' 
                container 
                item
                marginTop={{xs:'100px', md:'200px'}}>
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