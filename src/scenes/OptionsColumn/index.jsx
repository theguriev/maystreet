import React, { useCallback } from 'react'
import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'
import { remove } from 'features/watchers/actions'
import { ReactComponent as Times } from 'assets/img/times.svg'
import './style.scoped.css'

export const OptionsColumn = ({
  ticker
}) => {
  const dispatch = useDispatch()
  const handleClick = useCallback(() => {
    dispatch(remove({ ticker, type: 'tickers' }))
  }, [ticker, dispatch])

  return (
    <div className="options">
      <a href="http://google.com">Alerts</a>
      <button type="button" onClick={handleClick}><Times /></button>
    </div>
  )
}

OptionsColumn.propTypes = {
  ticker: PropTypes.string.isRequired
}

export default OptionsColumn
