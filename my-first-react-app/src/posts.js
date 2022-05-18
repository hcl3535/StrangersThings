import React, { useEffect, useState } from "react";
import { fetchAllPosts, deletePost } from "./api";
import './posts.css'



const Post = (props) => {
    
    const [posts, setPosts] = useState([])
    const {token} = props

    useEffect(() => {
      
        const fetchdata = async () => {
        try {
          const data = await fetchAllPosts(token)
          setPosts(data.data.posts)
          console.log(data)
        } catch (error) {
         console.error(error)    
        }
      }
        
        fetchdata()
        }, []);

    const handleSubmit = (event) => {
      event.preventDefault();
      console.log("submited")
    }
    

    return(
        <div className="posts">
          <h1>posts</h1>
          <form onSubmit={handleSubmit}>
            <aside>
              <input type="text" placeholder="search"></input>
              <input type="submit"></input>
            </aside>
          </form>
          {posts.map((value, index) => {return(
            <div className="singlePost" key={value._id}>
             <h2>{value.title}</h2>
             <h3>{value.description}</h3>
             <h3>price: {value.price}</h3>
             {value.isAuthor ? <button onClick={ () => deletePost(token, value._id)}>delete</button> : null}
             </div>
             )}
          )}
        </div>
  )
}

export default Post;