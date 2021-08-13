import React from 'react'
import PropTypes from 'prop-types'
import './style.scoped.css'

export const Table = ({ data }) => (
  <table>
    <thead>
      <tr>
        {data.head.map(
          column => <th key={column}>{column}</th>
        )}
      </tr>
    </thead>
    <tbody>
      {data.body.map(
        ({ columns, id }) => (
          <tr key={id}>
            {columns.map(
              // eslint-disable-next-line react/no-array-index-key
              (column, index) => <td key={`${id}-${index}`}>{column}</td>
            )}
          </tr>
        )
      )}
    </tbody>
  </table>
)

Table.propTypes = {
  data: PropTypes.shape({
    head: PropTypes.oneOfType([PropTypes.array]),
    body: PropTypes.oneOfType([PropTypes.array])
  }).isRequired
}

export default Table
