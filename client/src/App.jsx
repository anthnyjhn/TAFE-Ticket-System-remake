import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import View from './pages/View'
import Create from './pages/Log'

import './assets/styles/App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route path='/view' element={<View/>}/>
        <Route path='/log' element={<Create/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
