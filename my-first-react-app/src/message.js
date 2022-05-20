import React, { useEffect, useState } from "react";
import { fetchAllPosts, sendMessage } from "./api";


const Message = (props) => {

    const [singlePost, setSinglePost] = useState([])
    const [message, setMessage] = useState("")

    const {singlePostID, token} = props
      
    useEffect(() => {
      
        const fetchSinglePost = async () => {
        try {
          const data = await fetchAllPosts(token)
        //   console.log(data)
          let filteredPost = data.data.posts.filter((value) => value._id === singlePostID)
          console.log(filteredPost)
          setSinglePost(filteredPost[0])
        } catch (error) {
         console.error(error)    
        }
      }

      const fetchMessages = async () => {
        try {
          const data = await fetchAllPosts(token)
        
        } catch (error) {
         console.error(error)    
        }
      }
        
        fetchSinglePost()
        }, [singlePostID]);


      const handleSubmit = (event) => {
        event.preventDefault();
        sendMessage(token, message,singlePostID)
        setMessage("")
      }
        

    return(
        <div>
            <div className="posts">
            <h2>{singlePost.title}</h2>
            <h3>{singlePost.description}</h3>
            <h3>price: {singlePost.price}</h3>
            {console.log(singlePost.Messages)}
            </div>
            <div>
              {singlePost.messages ? singlePost.messages.map((value) => {return(
                  <div>
                    <h3>{value.fromUser}</h3>
                    <h3>{value.content}</h3>
                  </div>
              )}) : null }
            </div>
            <form onSubmit={handleSubmit}>
              <h3>message seller</h3>
              <input 
                type="text" 
                placeholder="your message"
                value={message}
                onChange={e => setMessage(e.target.value)}
                >
            </input>
            <input type="submit"></input>
            </form>
        </div>
    )
}

export default Message