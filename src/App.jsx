import React from 'react'
import TopBar from "./components/TopBar"
import NumPad from './components/NumPad'
import Operation from './components/Operation'

const App = () => {
  return (
    <div>
      <TopBar />
      <div className='flex flex-col md:flex-row justify-between md:pt-5 max-md:items-center'>
      <NumPad />
      <Operation />
      <NumPad />
      </div>
    </div>
  )
}

export default App