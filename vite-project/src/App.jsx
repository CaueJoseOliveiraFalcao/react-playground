import { useState } from 'react'
import Header from './Header'
import InputwText from './assets/InputwText'
function App() {

  return (
    <>
    <Header hideMenu={true} />
    <Header hideMenu={false} />
    <InputwText/>
    </>
  )
}

export default App
