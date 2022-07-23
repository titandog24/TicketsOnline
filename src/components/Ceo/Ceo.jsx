import React from 'react';
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import {ListaDeImagenes} from '../../utils/Data'

const ImagenCeo = () => {
    return(
        <Grid item>
           <img src={`${ListaDeImagenes().imagenOficinaInicio}`} 
           alt={'foto del CEO'} 
           style={{
                width:'300px',
                height:'300px',
                borderRadius:'150px'
           }}/>
        </Grid>
    )
}

const Ceo = () => {
    return (
        <Grid
            container
            direction={'row'}
            display={'flex'}
            justifyContent={'center'}
            alignItems={'center'}
            textAlign={'center'}
            padding={{md:'100px'}}
            marginTop={{xs: '20px', md:'50px'}}>
            <Grid item xs={12} marginBottom={{md:'40px'}}>
                <Typography variant={'h2'}>
                    Nuestro CEO
                </Typography>
            </Grid>
            <Grid item xs={12} marginBottom={{md:'40px'}}>
                {ImagenCeo()}
            </Grid>
            <Grid item xs={12} marginBottom={{md:'40px'}}>
                <Typography variante={'h3'} 
                sx={{
                    fontWeight:'bold'
                }}>
                        Nombre del CEO
                </Typography>
                <Typography>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et alias non repellat quasi magnam voluptatum officia, 
                    atque ab soluta laborum provident eveniet sapiente obcaecati necessitatibus quos iure corporis? Ducimus, earum!
                </Typography>
            </Grid>
        </Grid>
    );
}

export default Ceo;
