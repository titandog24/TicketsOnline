import React from 'react';
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import { ListaDeImagenes } from '../../utils/Data';
import Typography from '@mui/material/Typography'

const CardMapaContact = () => {
    return (
        <Grid container item xs={12}>
            <Card>
                <Grid
                    item
                    xs={12}
                    display={'flex'}
                    justifyContent={'center'}
                    alignItems={'center'}
                    sx={{
                        backgroundColor:'#F7F7F7'
                    }}>
                    <Grid item xs={12} padding={{xs:10}}>
                        <Typography variant='h5'>
                            We have been globally distributed from day one but still have a small office:
                        </Typography>
                            <Typography variant='h3'>
                                Tickets
                            </Typography>
                        <Typography variant='h5'>
                            Liberia, Guanacaste,
                            Costa Rica
                            CR
                        </Typography>
                    </Grid>
                </Grid>
                <Grid 
                item 
                xs={12} 
                sx={{ padding: '0px !important',backgroundColor:'#F7F7F7' }}>
                    <img src={ListaDeImagenes().imagenMapa} alt={'ubicacion en el mapa'} width={'100%'} height={'100%'} />
                </Grid>
            </Card>
        </Grid>
    );
}

export default CardMapaContact;
