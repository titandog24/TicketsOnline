import React, { useState } from 'react';
import Axios from 'axios'
import { Grid } from '@mui/material';
import AppFrame from '../components/AppFrame';
import OrdenesDeCompra from '../components/OrdenesDeCompra/'
import FormularioDeCompra from '../components/FormularioDeCompra/';
import Publicidad from '../components/Publicidad/Publicidad';
import Noticia from '../components/Noticia/Noticia';

import { noticias, noticiasFijas } from '../utils/Data';


const ComprasPage = ({ User, UserLogin }) => {

    const [ActivarCompra, SetActivarCompra] = useState(false)

    const ActivaFormularioCompra = (value) => {
        SetActivarCompra(value)
    }

    const RealizarCompra = (res) => {
        
        const datos = {
            evento: res.currency,
            cantidad: res.entradas
        }

        Axios.post('http://localhost:8090/api/user/Guardar',datos)
        .then((res) => {
            if (res.data.msg) {
                SetActivarCompra(false)
            }
            
        })
        .catch((err) => {
            console.log(err);
        })

        return null
    }

    return (
        <Grid
            height={{ md: '100%' }}>
            <AppFrame
                isLogged={User}
                requireFooter={false}
                setUserLogin={UserLogin}></AppFrame>
            <Grid
                item
                container
                height={{ md: '100%' }}
                sx={{ mt: { md: '8%' } }}>
                <Grid
                    item
                    xs={3}>
                    <OrdenesDeCompra ActivaFormularioCompra={ActivaFormularioCompra} />
                </Grid>
                <Grid
                    item
                    xs={6}>
                    {
                        ActivarCompra
                            ? (
                                <FormularioDeCompra 
                                RealizarCompra={RealizarCompra} 
                                ActivaFormularioCompra={ActivaFormularioCompra}/>
                            )
                            : (
                                <Noticia Noticias={noticias} NoticiasFijas={noticiasFijas} />
                            )
                    }
                </Grid>
                <Grid
                    item
                    xs={3}
                    sx={{ padding: { md: '0px 20px' } }}>
                    <Publicidad />
                </Grid>
            </Grid>
        </Grid>

    );
}

export default ComprasPage;
