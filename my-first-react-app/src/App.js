import {BrowserRouter, Route, Link, Routes} from 'react-router-dom'
import React, { useState } from "react";
import './App.css';
import Post from './posts';
import Header from './header';
import Footer from './footer';
import Login from './login';
import SignUp from './signUp';
import Mail from './mail';
import CreatePost from './createPost';

function App() {

  let checkForToken = localStorage.getItem("token")
  let isLoggedIn = localStorage.getItem("token") !== null

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [loginResults, setLoginResults] = useState("")
  const [token, setToken] = useState(checkForToken)
  const [loggedIn, setLoggedIn] = useState(isLoggedIn)
  

  return (
    <BrowserRouter>
      <Route exact path="/">
        <Header token={token} setToken={setToken} username={username} setUsername={setUsername} setPassword={setPassword} loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>
        <div className='main'>
        <Post token={token}/>
        </div>
        <Footer />
      </Route>
      <Route exact path="/mail">
        <Header token={token} setToken={setToken} username={username} setUsername={setUsername} loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>
        <Mail token={token}/>
      </Route>
      <Route exact path="/login">
        <Header token={token} setToken={setToken} username={username} setUsername={setUsername} loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>
        <Login username={username} setUsername={setUsername} password={password} setPassword={setPassword} token={token} setToken={setToken} loginResults={loginResults} setLoginResults={setLoginResults} setLoggedIn={setLoggedIn}/>
        <Footer />
      </Route>
      <Route exact path="/SignUp">
        <Header token={token} setToken={setToken} username={username} setUsername={setUsername} loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>
        <SignUp username={username} setUsername={setUsername} password={password} setPassword={setPassword} token={token} setToken={setToken} loginResults={loginResults} setLoginResults={setLoginResults} setLoggedIn={setLoggedIn}/>
        <Footer />
      </Route>
      <Route exact path="/createPost">
        <Header token={token} setToken={setToken} username={username} setUsername={setUsername} loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>
        <CreatePost token={token}/>
      </Route>
    </BrowserRouter>
  );
}

export default App;
