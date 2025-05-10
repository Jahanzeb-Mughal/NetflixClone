import React, { useState } from 'react'
import './login.css'
import logo from '../../../assets/netflixlogo.png'
import { login, signup } from '../../../Firebase'
import Loader from '../../../assets/loader.gif'
const Login = () => {
  const [signState, setSignState] = useState("Sign In")
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const userAuth = async (event) => {
    event.preventDefault()
    setLoading(true)
    if (signState === "Sign In") {
      await login(email, password)
    } else {
      await signup(name, email, password)
    }
    setLoading(false)
  }

  return (
    loading ? <div className="spinner"> <img src={Loader} alt="" /></div> :
      <div className='login'>
        <img src={logo} className='loginLogo' alt="" />
        <div className="loginForm">
          <h1>{signState}</h1>
          <form >
            {signState === "Sign Up" ? <input value={name} onChange={(e) => { setName(e.target.value) }} type="text" placeholder='Your Name' /> : <></>}

            <input value={email} onChange={(e) => { setEmail(e.target.value) }} type="email" placeholder='Email' />
            <input value={password} onChange={(e) => { setPassword(e.target.value) }} type="password" placeholder='Password' />
            <button onClick={userAuth} type='submit'>{signState}</button>
            <div className="formhelp">
              <div className="remember">
                <input type="checkbox" />
                <label htmlFor="">Remember Me</label>
              </div>
              <p>Need Help?</p>
            </div>
          </form>
          <div className="formswitch">
            {signState === "Sign Up" ? <p>Already have an account? <span onClick={() => { setSignState("Sign In") }}>
              Sign In Now</span></p> : <p>New to Netflix? <span onClick={() => { setSignState("Sign Up") }}>Sign Up Now</span></p>}


          </div>
        </div>
      </div>
  )
}

export default Login
