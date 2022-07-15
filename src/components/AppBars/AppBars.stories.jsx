import React from 'react'
import AppBars from './'
import { BrowserRouter as Router } from 'react-router-dom'

export default {
    title: 'AppBars',
    component: AppBars
}

export const componenteRender = () =>
<Router>
    <AppBars />
</Router> 