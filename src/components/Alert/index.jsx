import React from 'react'
import PropTypes from 'prop-types'
import { ReactComponent as Times } from 'assets/img/times.svg'
import './style.scoped.css'

export const Alert = ({
  children,
  title,
  onClose
}) => (
  <div className="alert">
    <button type="button" onClick={onClose}><Times /></button>
    <h2>{title}</h2>
    <div className="content">{children}</div>
  </div>
)

Alert.defaultProps = {
  title: '',
  children: '',
  onClose: () => {}
}

Alert.propTypes = {
  title: PropTypes.string,
  onClose: PropTypes.func,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
}

export default Alert
