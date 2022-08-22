import React from 'react'
import Noticia from './'
import { noticias, noticiasFijas } from '../../utils/Data'

export default {
    title: 'Noticia',
    component: Noticia
}

export const componenteRender = () => <Noticia Noticias={noticias} NoticiasFijas={noticiasFijas} />