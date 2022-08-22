import React from 'react';
import axios from 'axios'
import Grid from '@mui/material/Grid'
import AppFrame from '../components/AppFrame';
import FormularioLogin from '../utils/FormularioLogin';
import { Redirect } from 'react-router-dom';
    


const IsValidUser = (email, password, SetUserLogin) => {
    const user = {
        email: email,
        password: password
      }
    axios.post('http://localhost:8090/api/user/login', user)
      .then(function (response) {
        if (response.status === 200) {
            localStorage.setItem('token',response.data.token)
            SetUserLogin(true)
        } else {
            SetUserLogin(false)
        }
      })
      .catch(function (error) {
        console.log(error);
      });
    
}


const Login = ({User, UserLogin}) => {
    const location = {
        pathname: '/'
      }
    if (User) {
        
        return <Redirect to={location}/>
    }


    return (
        <AppFrame>
            <Grid
                container
                direction='column'
                justifyContent={'center'}
                alignItems={'center'}
                display={'flex'}
                sx={{
                    height: '100%',
                    marginTop: { xs: '60px', md: '130px' }
                }}>
                <Grid
                    item>
                    <FormularioLogin getData={(email, password) =>{
                        IsValidUser(email, password, UserLogin)
                    }} />
                </Grid>
            </Grid>
        </AppFrame>
    );
}

export default Login;
