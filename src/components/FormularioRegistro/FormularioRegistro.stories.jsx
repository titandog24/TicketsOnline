import React from 'react'
import FormularioRegistro from './FormularioRegistro'
import { BrowserRouter as Router } from 'react-router-dom'

export default {
    title: 'FormularioRegistro',
    component: FormularioRegistro
}

export const componenteRender = () =>
    <Router>
        <FormularioRegistro />
    </Router>
