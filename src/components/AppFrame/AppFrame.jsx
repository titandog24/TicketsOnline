import React from 'react'
import PropTypes from 'prop-types'
import AppBars from '../AppBars'
import Footer from '../Footer/'


const AppFrame = ({children}) => {
  return (
    <AppBars>
        {children}
        <Footer />
    </AppBars>
  )
}

AppFrame.propTypes = {
    isLogged: PropTypes.bool
}

export default AppFrame
