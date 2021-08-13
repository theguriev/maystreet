import React from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import './style.scoped.css'
import { Tabs, Tab } from '../Tabs'
import { Table } from '../Table'
import { useTickersThing, usePricesThing, pricesAndWatchersTableSelector } from '@maystreet/data'

export const Home = () => {
  const { data: tickers } = useTickersThing()
  usePricesThing({
    skip: !Array.isArray(tickers) || tickers.length === 0,
    refetchInterval: 10000,
    refetchIntervalInBackground: true,
    options: {
      tickers
    }
  })
  const body = useSelector(pricesAndWatchersTableSelector)
  const data = {
    head: [
      'Stock',
      'Bid',
      'Ask',
      'Vol',
      'Alerts',
      'Options'
    ],
    body
  }
  return (
    <div className="main">
      <div className="content">
        <h1>Stock Viewer</h1>
        <Tabs>
          <Tab label="Stocks">
            <Table data={data} />
          </Tab>
          <Tab label="Alerts">Hello2</Tab>
        </Tabs>
      </div>
    </div>
  )
}

Home.defaultProps = {
  title: '',
  children: '',
  onClose: () => {}
}

Home.propTypes = {
  title: PropTypes.string,
  onClose: PropTypes.func,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
}

export default Home
