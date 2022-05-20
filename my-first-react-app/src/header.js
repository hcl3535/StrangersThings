import React, { useEffect, useState } from "react";
import {browserRouter, Route, Link} from 'react-router-dom'
import { getUserInfo , makeHeader } from "./api";
import './header.css'

const Header = (props) => {

  const [userTag, setUserTag] = useState("")

  const {token, setToken, username, setUsername, setPassword, loggedIn, setLoggedIn} = props

  let user = ""

  function handleSignOut() {
    setToken("")
    localStorage.removeItem("token")
    setLoggedIn(false)
    makeHeader(null)
  }

  function handleTest () {
    getUserInfo(token)
  }
  useEffect (() => {

    const fetchdata = async () => {
    let results = await getUserInfo(token)
    if(results.success === true) setUserTag(results.data.username)
    if(results.success === false) setUserTag("")

    


    }
  fetchdata()
  }, [token])


    return(
        <div className="header">
          <span>
            <h4>{userTag}</h4>
            {loggedIn ? <Link to="/"><button className="right" onClick={handleSignOut}>sign out</button></Link> : null }
            {loggedIn ? null : <Link className="right" to="/login">Log In</Link> } 
            {loggedIn ? null : <Link className="right" to="/SignUp">Sign Up</Link> }
          </span>      
          <div className="centered">Stranger's Things</div>
          <span>
            <Link className="left" to="/">home</Link>
            { loggedIn ? <Link className="left" to="/mail">profile</Link> : null }
            { loggedIn ? <Link className="left" to="/createPost">create post</Link> : null }
          </span>
        </div>
    )
}

export default Header

