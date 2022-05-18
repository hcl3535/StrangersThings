import React from "react";
import {browserRouter, Route, Link} from 'react-router-dom'
import { loginUser, makeHeader } from "./api";
import "./login.css"


const Login = (props) => {

const {username, setUsername, password, setPassword, loginResults, setLoginResults, setToken, token, setLoggedIn} = props

    const handleSubmit = async (event) => {
        event.preventDefault();
        let results = await verifyLogin()
        if(results.success === true) {
          await setToken(results.data.token)
          localStorage.setItem("token", results.data.token)
          setLoggedIn(true)
          makeHeader(results.data.token)
        }
        console.log(username)
        console.log(password)
        setUsername("")
        setPassword("")
      }   
  
    async function verifyLogin(){
      let results = await loginUser(username, password)
      console.log("login results",results)
      if(results.success === false) return setLoginResults(results.error.message)
      return results
    }

    return(
        <form onSubmit={handleSubmit}>
            <div className="login">
              <h3>if you do not have an accout you can sign up here</h3>  
              <Link to="/SignUp">Sign Up</Link>
              <input 
              type="text" 
              placeholder="username"
              value={username}
              onChange={e => setUsername(e.target.value)}
              >
              </input>
              <input 
              type="text" 
              placeholder="password"
              value={password}
               onChange={e => setPassword(e.target.value)}>
              </input>
              <input type="submit"></input>
              <div>{loginResults}</div>
            </div>
        </form>
    )
}


export default Login