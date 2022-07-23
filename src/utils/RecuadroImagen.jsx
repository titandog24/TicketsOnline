import React from 'react';
import Grid from '@mui/material/Grid'
import './RecuadroImagen.css'

export const RecuadroImage = ({ruta}) => {
    return(
        <Grid 
        item 
        xs={12} 
        height={{xs:'200px'}}>
            <div style={{
                backgroundImage: `url(${ruta})`,
            }}
                className='divFondo'></div>
        </Grid>

    )
}