import React from 'react';
import Grid from '@mui/material/Grid'
import { Redirect } from 'react-router-dom';
import FormularioRegistro from '../../components/FormularioRegistro';
import { ListaDeImagenes } from '../../utils/Data';
import './RegisterPage.css'




const RegisterPage = ({User}) => {
    const location = {
        pathname: '/'
      }
    if (User) {
        return <Redirect to={location}/>
    }

    const fondo = ListaDeImagenes().fondoRegistro
    return (
        <>

            <Grid container direction={'row'} justifyContent={'center'} className='divFormulario'>
                <Grid container item xs={12} md={6}>
                    <FormularioRegistro />
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
