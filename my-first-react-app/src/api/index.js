import React, { useState } from "react";

const baseURL = 'https://strangers-things.herokuapp.com/api'

export function makeHeader (token) {
  if(token === null) return {
      'Content-Type': 'application/json'
  } 
  if(token !== null) return {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token
  }  
}

export async function fetchAllPosts (token) {
  try{
    let results = await fetch(`${baseURL}/2202-ftb-et-web-pt/posts` , {
      headers: makeHeader(token),
    });
    let data = await results.json();
    // console.log(data.data.posts)
    return data;
  }catch (error) {
    throw(error)
  }finally{
  //  console.log(headers)
  }
}

export async function signUpUser(username, password) { 
  try{
    let results = await fetch(`${baseURL}/2202-ftb-et-web-pt/users/register`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        user: {
          username: username,
          password: password
        }
      })
    })
    let data = await results.json();
    console.log(data)
    return data
    }catch(error) {

    }finally{
      
    }
      
  } 

export async function loginUser(username, password) {
  try{
    let results = await fetch(`${baseURL}/2202-ftb-et-web-pt/users/login`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        user: {
          username: username,
          password: password
        }
      })
    })
    let data = await results.json();
    console.log(data)
    return data
    }catch(error) {
  
    }finally{
        
    }
        
  } 


  export async function getUserInfo(token) {
    try {
      let results = await fetch(`${baseURL}/2202-ftb-et-web-pt/users/me` , {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + token
        }
      })
      let data = await results.json();
      // console.log(data)
      return data
    } catch (error) {

    } finally{

    }
  }


  export async function sendPost (title, description, price, willDeliver, token) {
    try{
      let results = await fetch(`${baseURL}/2202-ftb-et-web-pt/posts` , {
        method: "POST",
        headers: {
          "content-Type": "application/json",
          "authorization" : "bearer " + token ,
        },
        body: JSON.stringify({
          post: {
            title: title,
            description: description,
            price: price,
            willDeliver: willDeliver
          } 
      })  
    })
    let data = await results.json();
    console.log(data)
  } catch (error) {

    }finally{

    }
  }

  
  export async function deletePost(token, postID) {
    try {
      let results = await fetch(`${baseURL}/2202-ftb-et-web-pt/posts/${postID}` , {
        method: "DELETE",
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + token
        }
      })
      let data = await results.json();
      console.log(data)
      return data
    } catch (error) {

    } finally{

    }
  }

  