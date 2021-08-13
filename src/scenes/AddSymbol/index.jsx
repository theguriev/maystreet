import React, { useState, useCallback } from 'react'
import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'
import { Button } from 'components'
import { add } from 'features/watchers/actions'
import './style.scoped.css'

export const AddSymbol = ({
  disabled,
  availableTickers
}) => {
  const dispatch = useDispatch()
  const [ticker, setTicker] = useState('')

  const handleAddClick = useCallback(() => {
    dispatch(add({ ticker, type: 'tickers' }))
    setTicker('')
  }, [dispatch, add, ticker])

  const handleChange = event => {
    setTicker(event.target.value)
  }

  return (
    <div className="add-symbol">
      <div className="label">
        Add symbol:
      </div>
      <select
        value={ticker}
        disabled={disabled}
        onChange={handleChange}
      >
        <option value="">Select some ticker...</option>
        {availableTickers.map(
          el => <option key={el} value={el}>{el}</option>
        )}
      </select>
      <div className="buttons">
        <Button
          disabled={disabled || !ticker}
          onClick={handleAddClick}
        >
          Add
        </Button>
      </div>
    </div>
  )
}

AddSymbol.propTypes = {
  disabled: PropTypes.bool.isRequired,
  availableTickers: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default AddSymbol
