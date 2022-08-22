import React from 'react'
import Grid from '@mui/material/Grid'
import AppBars from '../AppBars';
import Footer from '../Footer'
const AppFrame = ({isLogged, setUserLogin, requireFooter, children }) => {
    return (
        <>
            <AppBars EstaLogueado={isLogged} Logout={setUserLogin} />
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
    requireFooter: true,
    isLogged: false
 }

export default AppFrame;
