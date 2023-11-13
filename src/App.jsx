import { useState } from 'react'


import {Header, About, VenueSummary} from './components';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <About/>
      <VenueSummary />
    </>
  )
}

export default App
