import React from 'react';
import axios from 'axios';
import Grid from '@mui/material/Grid'
import { Redirect } from 'react-router-dom';
import FormularioRegistro from '../../components/FormularioRegistro';
import { ListaDeImagenes } from '../../utils/Data';
import './RegisterPage.css'




const RegisterPage = ({User, UserLogin}) => {
    const location = {
        pathname: '/'
      }
    if (User) {
        return <Redirect to={location}/>
    }

    const RegisterNewUser = (user) => {
        axios.post('http://localhost:8090/api/user/saveUser', user)
        .then((res) => {
            if (res.data.success) {
                localStorage.setItem('token',res.data.msg)
                UserLogin(true)
            }
        })
        .catch((err) => {
            console.log(err);
        })
    }

    const fondo = ListaDeImagenes().fondoRegistro
    return (
        <>

            <Grid container direction={'row'} justifyContent={'center'} className='divFormulario'>
                <Grid container item xs={12} md={6}>
                    <FormularioRegistro RegisterNewUser={RegisterNewUser} />
                </Grid>
                <Grid container item xs={12} md={6}>
                    <div style={{
                        backgroundImage: `url(${fondo})`,
                    }}
                        className='divFondoRegistro'></div>
                </Grid>
            </Grid>
        </>
    );
}

export default RegisterPage;
