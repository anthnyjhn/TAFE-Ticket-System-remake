import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import View from './pages/View'

import './assets/styles/App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route path='/view' element={<View/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
