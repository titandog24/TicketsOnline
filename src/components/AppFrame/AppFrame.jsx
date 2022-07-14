import React from 'react'
import PropTypes from 'prop-types'
import Footer from '../Footer/'
import { Grid } from '@mui/material'


const AppFrame = ({ children }) => {
  return (
    <>
      <Grid container justifyContent={'center'} paddingRight={{md: '15rem'}} paddingLeft={{md: '15rem'}}>
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
