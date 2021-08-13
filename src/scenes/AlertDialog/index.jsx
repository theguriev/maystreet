import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'
import { Dialog } from 'components'
import { add } from 'features/watchers/actions'
import './style.scoped.css'

export const AlertDialog = ({
  ticker,
  price,
  onClose
}) => {
  const [value, setValue] = useState(5)
  const dispatch = useDispatch()
  const handleChange = event => {
    setValue(event.target.value)
  }

  const handleOk = () => {
    dispatch(add({
      ticker, type: 'alerts', value, price
    }))
    onClose()
  }

  return (
    <Dialog
      title="Edit alert"
      onClose={onClose}
      onOk={handleOk}
    >
      <span>Alert me when the stock price deviates from the opening price by:</span>
      <input
        type="number"
        min="1"
        max="100"
        value={value}
        onChange={handleChange}
        onInput={handleChange}
      />
    </Dialog>
  )
}

AlertDialog.defaultProps = {
  onClose: () => {}
}

AlertDialog.propTypes = {
  ticker: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  onClose: PropTypes.func
}

export default AlertDialog
