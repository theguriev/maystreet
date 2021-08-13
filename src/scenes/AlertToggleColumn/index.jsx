import React from 'react'
import PropTypes from 'prop-types'

export const AlertToggleColumn = ({
  onChange,
  checked
}) => (
  <div className="alert-watcher">
    <input
      type="checkbox"
      checked={checked}
      onChange={onChange}
    />
  </div>
)

AlertToggleColumn.defaultProps = {
  onChange: () => {}
}

AlertToggleColumn.propTypes = {
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func
}

export default AlertToggleColumn
