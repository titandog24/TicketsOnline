import React from 'react'  
import { Grid, Card, Typography, CardMedia } from '@mui/material'  
import './Cartas.css'

const Cartas = ({ imagen, texto }) => {
    return (
        <Grid
            container item
            justifyContent='center'
            alignContent='center'
            xs={4}>
            <Grid container item xs={12}>
                <Card>
                    <CardMedia component={'img'}
                        image={imagen}
                        height={'200'}
                        alt='Carros' />
                </Card>
            </Grid>
            <Grid container item xs={12} justifyContent='center' alignContent={'center'}>
                <Typography variant='h6'>{texto}</Typography>
            </Grid>
        </Grid>
    )  
}

export default Cartas  
