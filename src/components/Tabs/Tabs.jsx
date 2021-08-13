import React, { useState } from 'react'
import PropTypes from 'prop-types'
import './style.scoped.css'

export const Tabs = ({ children, active }) => {
  const items = Array.isArray(children) ? children : [children]
  const [activeTab, setActiveTab] = useState(active)

  const handleClick = index => () => {
    setActiveTab(index)
  }

  return (
    <div className="tabs">
      <div className="header">
        {items.map(
          (el, index) => (
            <button
              type="button"
              className={`tab-header${index === activeTab ? ' active' : ''}`}
              onClick={handleClick(index)}
              key={el.props.label}
            >
              {el.props.label}
            </button>
          )
        )}
      </div>
      <div className="content">
        {items?.[activeTab]}
      </div>
    </div>
  )
}

Tabs.defaultProps = {
  children: '',
  active: 0
}

Tabs.propTypes = {
  active: PropTypes.number,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
}

export default Tabs
