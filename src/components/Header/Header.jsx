import React from 'react';
import Grid from '@mui/material/Grid'
import { ListaDeImagenes } from '../../utils/Data';
const Header = () => {
    return (
        <Grid container style={{margin:0}} >
            <img src={ListaDeImagenes().imagenDelHeader} height={'20%'} width={'100%'} alt={'Fondo de entrada de un bar'} style={{maxHeight: '650px'}}/>
        </Grid>
    );
}

export default Header;
