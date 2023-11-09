import { useState } from 'react'


import {Header, About} from './components';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <About/>
    </>
  )
}

export default App
