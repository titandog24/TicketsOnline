import React from 'react'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import { ListaPatrocinador, TitulosYTexto } from '../../utils/Data'



const RenderPatrocinador = ({ patrocinador }) => {
    return (
        <Grid item md={3} justifyContent={'center'} alignContent={'center'} display={'flex'}>
            <div style={{ justifyContent: 'center', display: 'flex', alignItems: 'center', opacity: '0.3' }}>
                <img src={patrocinador.logo} alt={patrocinador.nombre} style={{ width: '50%' }} />
            </div>
        </Grid>

    )
}


const Patrocinadores = () => {
    const ListaDePatrocinadores = ListaPatrocinador()
    const TituloPatrocinadores = TitulosYTexto().tituloPatrocinadores
    return (
        <Grid container item spacing={1} marginTop='8rem'>
            <Grid item xs={12} justifyContent='center' alignContent={'center'} textAlign='center'>
                <Typography variant='h6'>
                    {TituloPatrocinadores}
                </Typography>
            </Grid>
            {
                ListaDePatrocinadores.map(patrocinador => {
                    return <RenderPatrocinador key={patrocinador.nombre} patrocinador={patrocinador} />
                })
            }
        </Grid>
    )  
}

export default Patrocinadores  
