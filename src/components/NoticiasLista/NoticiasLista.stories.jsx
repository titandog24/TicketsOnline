import React from 'react'
import NoticiasLista from './'
import Grid from '@mui/material/Grid'
import { noticias } from '../../utils/Data'

export default {
    title: 'NoticiasLista',
    component: NoticiasLista
}



export const componenteRender = () => 
<Grid container item xs={12} spacing={2}>
    <NoticiasLista Lista={noticias} MedidaMedia={4} />
</Grid>