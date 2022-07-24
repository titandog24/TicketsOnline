import React from 'react';
import CardContact from '../CardContact';
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

const Contact = () => {
    return (
        <Grid
            container
            direction={'row'}
            justifyContent={'center'} spacing={2}
            marginTop={{md:10}}>
            <Grid container item xs={12} textAlign='center'>
                <Grid item xs={12}>
                    <Typography variant='h1'>
                        Contactenos
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant='h3'>
                        Explore el futuro con nosotros
                    </Typography>
                </Grid>
            </Grid>
            <Grid item xs={12}>
                <CardContact />
            </Grid>
        </Grid>
    );
}

export default Contact;
