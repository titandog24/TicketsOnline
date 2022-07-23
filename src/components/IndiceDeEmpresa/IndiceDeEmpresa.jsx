import React from 'react' 
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Discount from '@mui/icons-material/Discount' 
import OpcionesIndice from '../OpcionesIndice/OpcionesIndice' 
import { ListaDeImagenes, TitulosYTexto } from '../../utils/Data' 



const IndiceDeEmpresa = () => {
    return (
        <Grid container direction={'row'}>
            <Grid container item xs={12} sm={6} padding={{sm:'76px'}} justifyContent={{xs:'center'}} textAlign={{xs:'center'}}>
                <Grid item xs={12} marginTop={'10px'}>
                    <Typography variant={'h3'}>
                        {TitulosYTexto().historiaTickets}
                        <Discount />
                    </Typography>
                </Grid>
                <Grid item xs={12} marginTop={'10px'}>
                    <img src={ListaDeImagenes().imagenOficinaInicio} alt={'imagen de las primeras oficinas de tickets'} height={'300px'} width={'350px'}/>
                </Grid>
                <Grid item xs={6} marginTop={'10px'}>
                    <Typography>
                        {TitulosYTexto().resumenHistoria}
                    </Typography>
                </Grid>
            </Grid>
            <Grid container item xs={12} sm={6} padding={{sm:'76px'}} textAlign={{xs:'center', md: 'left'}}>
                <OpcionesIndice />
            </Grid>
        </Grid>
    ) 
}

export default IndiceDeEmpresa 
