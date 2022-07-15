import React from 'react'
import Grid from '@mui/material/Grid'
import AppBars from '../AppBars';
import Footer from '../Footer'
const AppFrame = ({ children }) => {
    return (
        <>
            <AppBars />
            <Grid container justifyContent={'center'}>
                <Grid container item marginTop={{ xs: '5rem', md: '10rem' }}
                    xs={12}
                    sm={11}
                    md={10}
                    lg={8}>
                    {children}
                </Grid>
                <Footer />
            </Grid>
        </>
    );
}

export default AppFrame;
