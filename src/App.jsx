import React, { useEffect } from 'react'
import Home from './components/pages/Home/Home'
import Login from './components/pages/login/Login'
import Player from './components/pages/player/Player'
import { Route, Routes, useNavigate } from 'react-router-dom'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './Firebase'
import { ToastContainer, toast } from 'react-toastify';
const App = () => {

  const navigate = useNavigate()
  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        console.log("Logged In")
        navigate('/')
      } else {
        console.log("Logged Out")
        navigate('/login')
      }
    })
  }, [])
  return (
    <div>
      <ToastContainer theme='dark' />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/player/:id' element={<Player />} />
      </Routes>

    </div>
  )
}

export default App
