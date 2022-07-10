import React from 'react'
import PropTypes from 'prop-types'
import AppBars from '../AppBars'
import Footer from '../Footer/'
import { Grid } from '@mui/material'


const AppFrame = ({ children }) => {
  return (
    <>
      <AppBars />
      <Grid container justifyContent={'center'} paddingRight='15rem' paddingLeft='15rem'>
        {children}
        <Footer />
      </Grid>
    </>
  )
}

AppFrame.propTypes = {
  isLogged: PropTypes.bool
}

export default AppFrame
