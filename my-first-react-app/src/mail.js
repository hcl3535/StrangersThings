import React, { useEffect, useState } from "react";
import { getUserInfo } from "./api";

const Recieved = (props) => {

    const [allMail , setAllMail] = useState([])
    const [currentUser, setCurrentUser] =useState("")
    
    const {token} = props

    useEffect (() => {

        const fetchdata = async () => {
        let results = await getUserInfo(token)
        console.log(results)
        setAllMail(results.data.messages)
        setCurrentUser(results.data.username)
        
        }
      fetchdata()
      }, [token])

    return(
      <div>
        <h3> all recieved messages</h3>
        <div>{allMail.map((value, index) => { return(
            value.fromUser.username !== currentUser ?         
            <div key={value._id} className="posts">
              
              <div>
                <div>{value.post.title}</div>
              </div>
              <div>{value.fromUser.username}</div> 
              <div>{value.content}</div>
            </div>
            
             :
             null
             )})}</div>
             </div>
    )
      
    
}



const Sent = (props) => {

  const [allMail , setAllMail] = useState([])
  const [currentUser, setCurrentUser] = useState("")
  const [allUserPosts, setAllUserPosts] = useState([])
  
  const {token} = props

  useEffect (() => {

      const fetchdata = async () => {
      let results = await getUserInfo(token)
      console.log(results)
      setAllUserPosts(results.data.posts)
      
      }
    fetchdata()
    }, [token])

  return(
    <div>
      <h2>your posts</h2>
      {allUserPosts.map((value) => {return(
        <div key={value._id} className="posts">
          <h3>{value.title}</h3>
          <h3>{value.description}</h3>
          <h3>price:{value.price}</h3>
          {value.messages.length !== 0 ? <h4>comments:</h4> : null}
          <h3>{value.messages ? value.messages.map((value) => {return(
            <div key={value._id} className="posts">
              <h5>{value.fromUser.username}</h5>
              <h5>{value.content}</h5>
            </div>
          )}) : null}</h3>
        </div>
      )})}
    </div>  
  )
    
  
}
const Mail = (props) => {

const {token} = props

  return(
    <div>
     <Recieved token={token}/>
     <Sent token={token}/>
   </div>
  )
    
  
}
export default Mail