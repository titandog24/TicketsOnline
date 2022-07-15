import React from 'react'
import AppFrame from '.'
import { BrowserRouter as Router } from 'react-router-dom'
export default {
    title: 'AppFrame',
    component: AppFrame
}

export const componenteRender = () =>
    <Router>
        <AppFrame>
            <h1>Hola mundo</h1>
        </AppFrame>
    </Router>