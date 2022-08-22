import React from 'react';
import { Grid } from '@mui/material';
import AppFrame from '../components/AppFrame';
import { Redirect } from 'react-router-dom';

const ComprasPage = ({ User, UserLogin }) => {
    const location = {
        pathname: '/'
      }
    if (!User) {
        return <Redirect to={location}/>
    }
    
    return (
        <Grid>
            <AppFrame
                isLogged={User}
                requireFooter={false}
                setUserLogin={UserLogin}></AppFrame>
        </Grid>

    );
}

export default ComprasPage;
