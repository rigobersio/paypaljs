import React from 'react'

import PaypalButton from './components/paypalButton/PaypalButton'
function App() {

  return (
    <>
      <div>
      <PaypalButton totalValue={'1'} invoice={'cardiólogo'} />
      </div>
    </>
  )
}

export default App
