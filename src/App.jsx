import { useState } from 'react'
import './App.css'
import LeftMenu from './components/LeftMenu'
import Body from './components/Body'
import RightMenu from './components/RightMenu'



function App() {

  return (
    <>
      <div className='rxxt'>

        < LeftMenu/>
        < Body />
        < RightMenu />
      </div>
    </>
  )
}

export default App
