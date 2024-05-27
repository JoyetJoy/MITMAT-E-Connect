import { useState } from 'react'
import { BrowserRouter,Route, Routes } from 'react-router-dom'
import Login from './pages/login'
import Signup from './pages/signup'
import Otp from './pages/otp'




function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <Routes>
      <Route exact path='/' element={<Login/>}/>
      <Route exact path='/signup' element={<Signup/>}/>
      <Route exact path='/otp' element={<Otp/>}/>

    </Routes>
    </BrowserRouter>
  )
}

export default App
