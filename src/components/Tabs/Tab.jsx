import React from 'react'
import PropTypes from 'prop-types'

export const Tab = ({ children }) => (
  <div>{children}</div>
)

Tab.defaultProps = {
  children: ''
}

Tab.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
}

export default Tab
