import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import View from './pages/View'
import Create from './pages/Log'
import Ticket from './pages/Ticket'

import './assets/styles/App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route path='/tickets' element={<View/>}/>
        <Route path='/view/:TicketId' element={<Ticket/>}/>
        <Route path='/log' element={<Create/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
