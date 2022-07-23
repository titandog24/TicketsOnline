import React from 'react'
import Grid from '@mui/material/Grid'
import AppBars from '../AppBars';
import Footer from '../Footer'
const AppFrame = ({requireFooter, children }) => {
    return (
        <>
            <AppBars />
            <Grid container
                    justifyContent={'center'}
                    direction={'row'}>
                <Grid container item
                    xs={12}
                    sm={11}
                    md={10}
                    lg={8}>
                    {children}
                </Grid>
               {
                requireFooter ?
                <Footer />
                : <></>
               } 
            </Grid>
        </>
    );
}

AppFrame.defaultProps = {
    requireFooter: true
 }

export default AppFrame;
