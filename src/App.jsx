import React, { useEffect } from 'react'
import TopBar from "./components/TopBar"
import NumPad from './components/NumPad'
import Operation from './components/Operation'

const App = () => {

  useEffect(()=>{
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    if (isMobile) {
      document.getElementById("op1").setAttribute("inputMode", "none");
      document.getElementById("op2").setAttribute("inputMode", "none");
    }
  }, [])
  return (
    <div>
      <TopBar />
      <div className='max-w-screen-md flex flex-col mx-auto items-center'>
      <Operation />
      <NumPad />
      </div>
    </div>
  )
}

export default App