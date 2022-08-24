import React from 'react';
import { Grid } from '@mui/material';
import AppFrame from '../components/AppFrame';
// import { Redirect } from 'react-router-dom';

const ComprasPage = ({ User, UserLogin }) => {
    // const location = {
    //     pathname: '/'
    //   }
    // if (!User) {
    //     return <Redirect to={location}/>
    // }

    return (
        <Grid
            height={{md:'100%'}}>
            <AppFrame
                isLogged={User}
                requireFooter={false}
                setUserLogin={UserLogin}></AppFrame>
            <Grid
                item
                container
                height={{md:'100%'}}>
                <Grid
                    item
                    xs={3}
                    style={{ backgroundColor: 'red' }}>
                    <h1>Red</h1>
                </Grid>
                <Grid
                    item
                    xs={6}
                    style={{ backgroundColor: 'blue' }}>
                    <h1>blue</h1>
                </Grid>
                <Grid
                    item
                    xs={3}
                    style={{ backgroundColor: 'yellow' }}>
                    <h1>blue</h1>
                </Grid>
            </Grid>
        </Grid>

    );
}

export default ComprasPage;
