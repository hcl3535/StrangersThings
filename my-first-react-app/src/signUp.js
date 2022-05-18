import React, { useEffect, useState } from "react";
import { signUpUser, makeHeader } from "./api";
import "./login.css";

const SignUp = (props) => {

  const {username, setUsername, password, setPassword, token, setToken, loginResults, setLoginResults, setLoggedIn} = props
  // const [username, setUsername] = useState("")
  // const [password, setPassword] = useState("")
  const [confirmedPassword, setConfirmedPassword] = useState("")


    const handleSubmit = (event) => {
        event.preventDefault();
        setLoginResults(verifySignupConditions())
      }

    useEffect(() => {
      const signUp = async () => {
        if (loginResults === true) {
          const results = await signUpUser(username, password)
          console.log("on signup" , results)
          if (results.success === false) setLoginResults(results.error.message)
          if (results.success === true) {
              await setToken(results.data.token)
              localStorage.setItem("token", results.data.token)
              setLoggedIn(true)
              makeHeader(results.data.token)
          } 
        }
      } 
    signUp()
    setUsername("")
    setPassword("")
    setConfirmedPassword("")
    }, [loginResults])
      
    function verifySignupConditions() {
      if (username === "") return "username must be filled out"
      if (password === "") return "password must be filled out"
      if (confirmedPassword === "") return "confirm password must be filled out"
      if (password !== confirmedPassword) return "password and confirmed password do not match";
      if (username.length <= 5) return "username must be longer than 5 characters";
      if (password.length <= 5) return "password must be longer than 5 characters";
      return true;
    }  

      
    return(
        <form onSubmit={handleSubmit}>
            <div className="login">
              <div className="red">{loginResults}</div>
              <input
               type="text" 
               placeholder="username"
               required
               value={username}
               onChange={e => setUsername(e.target.value)}>  
               </input>
              <input
               type="text" 
               placeholder="password"
               required
               value={password}
               onChange={e => setPassword(e.target.value)}>
               </input>
              <input
              type="text" 
              placeholder="confirm password"
              required
              value={confirmedPassword}
              onChange={e => setConfirmedPassword(e.target.value)}>                
              </input>
              <input type="submit"></input>
              <div>requirements</div>
              <div>username must be longer than 5 characters</div>
              <div>password must be longer than 5 characters</div>
            </div>
        </form>
    )
}


export default SignUp