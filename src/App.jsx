import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import './assets/css/variables.css'
import './assets/css/global.css'
import './assets/css/reset.css'
import './app.scoped.css'
import {
  Tabs, Tab, Table
} from './components'
import {
  AlertDialog, OptionsColumn, AlertToggleColumn, AlertList, AddSymbol
} from './scenes'
import { useTickersThing, usePricesThing } from './hooks'
import { watcherTickersSelector } from './features/watchers/selectors'

const dataMapper = ({ onChangeAlert }) => data => data.reduce(
  (acc, el, index) => ([
    ...acc,
    {
      columns: [
        el.symbol,
        parseFloat(el.bid).toFixed(2),
        parseFloat(el.ask).toFixed(2),
        parseFloat(el.lastVol).toFixed(2),
        <AlertToggleColumn
          checked={!!el.alert}
          onChange={onChangeAlert(el.symbol)}
        />,
        <OptionsColumn ticker={el.symbol} />
      ],
      id: index
    }
  ]),
  []
)

function App() {
  const [selectedAlert, setSelectedAlert] = useState('')
  const watchTickers = useSelector(watcherTickersSelector)

  const { data: availableTickers, isLoading, isInitial } = useTickersThing({
    initialData: [],
    options: {
      tickers: watchTickers
    }
  })
  const handleChangeAlert = symbol => event => {
    if (event.target.value === 'on') {
      setSelectedAlert(symbol)
    }
    event.preventDefault()
  }

  const { data: prices, mappedData: body } = usePricesThing({
    initialData: [],
    skip: !Array.isArray(watchTickers) || watchTickers.length === 0,
    refetchInterval: 10000,
    refetchIntervalInBackground: true,
    dataMapper: dataMapper({
      onChangeAlert: handleChangeAlert
    }),
    options: {
      tickers: watchTickers
    }
  })

  const handleCloseAlertDialog = () => {
    setSelectedAlert('')
  }

  const d = {
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
    <div className="app">
      {selectedAlert && (
        <AlertDialog
          ticker={selectedAlert}
          price={prices.find(el => el.symbol === selectedAlert)?.open || 0}
          onClose={handleCloseAlertDialog}
        />
      )}
      <div className="content">
        <h1>Stock viewer</h1>
        <Tabs>
          <Tab label="Stocks">
            <Table data={d} />
            <AddSymbol disabled={isLoading || isInitial} availableTickers={availableTickers} />
          </Tab>
          <Tab label="Alerts">
            <AlertList />
          </Tab>
        </Tabs>
      </div>
    </div>
  )
}

export default App
