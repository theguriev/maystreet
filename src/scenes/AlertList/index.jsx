import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Alert } from 'components'
import { alertsSelector } from 'features/alerts/selectors'
import { remove } from 'features/alerts/actions'

export const AlertList = () => {
  const dispatch = useDispatch()
  const alerts = useSelector(alertsSelector)

  const handleClose = index => () => {
    dispatch(remove(index))
  }

  return alerts.map(
    (el, index) => (
      <Alert title={el.title} key={el.title} onClose={handleClose(index)}>{el.content}</Alert>
    )
  )
}

export default AlertList
