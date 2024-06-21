import { useState } from 'react'
import { BrowserRouter,Route, Routes } from 'react-router-dom'
import Landingpage from './pages/landingpage'
import Login from './pages/login'
import Signup from './pages/signup'
import Otp from './pages/otp'
import UserHome from './pages/userhome'
import Nav from './components/landingNavbar'




function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route exact path='/' element={<Landingpage/>}/>
      <Route exact path='/login' element={<Login/>}/>
      <Route exact path='/signup' element={<Signup/>}/>
      <Route exact path='/otp/:id' element={<Otp/>}/>
      <Route exact path='/userhome' element={<UserHome/>}/>
      <Route exact path='/nav' element={<Nav/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
