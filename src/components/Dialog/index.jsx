import React from 'react'
import PropTypes from 'prop-types'
import { ReactComponent as Times } from 'assets/img/times.svg'
import Button from '../Button'
import './style.scoped.css'

export const Dialog = ({
  children,
  title,
  onClose,
  onOk
}) => (
  <div className="overlay">
    <div className="dialog">
      <div className="header">
        <span className="title">{title}</span>
        <button className="ex-button" type="button" onClick={onClose}><Times /></button>
      </div>
      <div className="body">{children}</div>
      <div className="footer">
        <Button variant={Button.varinats.primary} onClick={onOk}>Ok</Button>
      </div>
    </div>
  </div>
)

Dialog.defaultProps = {
  title: '',
  children: '',
  onClose: () => {},
  onOk: () => {}
}

Dialog.propTypes = {
  title: PropTypes.string,
  onClose: PropTypes.func,
  onOk: PropTypes.func,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
}

export default Dialog
