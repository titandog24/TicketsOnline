import React from 'react';
import Grid from '@mui/material/Grid'
import FormularioRegistro from '../../components/FormularioRegistro';
import { listDeImagenes } from '../../utils/Data';
import './RegisterPage.css'




const RegisterPage = () => {
    const fondo = listDeImagenes().fondoRegistro
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
