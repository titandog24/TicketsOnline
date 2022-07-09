import React from 'react';
import Cartas from './';
const image = `${process.env.PUBLIC_URL}/img/google.png`;


export default {
    title: 'Cartas',
    component: Cartas
}

export const CartasRender = () => <Cartas texto={'Carritos'} imagen={image} />