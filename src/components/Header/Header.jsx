import React from 'react'
import PropTypes from 'prop-types'

function Header({isLogged}) {
  return (
    <div>
        <h1>Hi Header</h1>
    </div>
  )
}

Header.propTypes = {
    isLogged: PropTypes.bool
}

export default Header
