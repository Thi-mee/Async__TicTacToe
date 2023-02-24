import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import style from '../styles/RegisterLogin.module.css'
import axios from 'axios'

const BASE_URL = 'http://localhost:8091/api/users/login'

function Login( { setUser, setLoggedIn } ) {
  const [email, setEmail] = useState("pastorl2mike@test.com")
  const [password, setPassword] = useState("balabllllu");
  const [disabledState , setDisabledState] = useState(true)
  const navigate = useNavigate()


  useEffect(() => {
    if (email && password) {
      setDisabledState(false)
    } else {
      setDisabledState(true)
    }
  }, [email, password])


  const login = async (e) => {
    e.preventDefault()

    const {data} = await axios.post(BASE_URL, {
      email,
      password
    })
    if(data.isAuthenticated) {
      console.log(data)
      setUser(data.user)
      setLoggedIn(true)
      navigate('/home')
    }
  }
  

  return (
    <form className={style.LoginForm} onSubmit={login}>
      <h1>Log in</h1>
      <div className={style.FormGroup}>
      <label htmlFor="email">Email</label>
      <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div className={style.FormGroup}>
      <label htmlFor="password">Password</label>
      <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      <div className={style.Positioner}>
      <input type="submit" value="Login" disabled={disabledState} />
      </div>
    </form>
  );
}

export default Login