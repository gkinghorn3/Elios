


import {Header, About, VenueSummary, Menu, FindUs} from './components';

function App() {
  

  return (
    <>
      <Header/>
      <About/>
      <VenueSummary />
      <Menu />
      <FindUs />
      <div className='credits-copyright'>
      <p> © 2023 Elio's Edinburgh. All rights reserved </p>
      <p >Site design & development: <span><a href='https://grantkinghorn.design'>Grant Kinghorn</a></span></p>
      </div>
      
    </>
  )
}

export default App
