import React, { useEffect, useState } from "react";
import {browserRouter, Route, Link} from 'react-router-dom'
import { fetchAllPosts, deletePost } from "./api";
import './posts.css'




const Post = (props) => {
    
    const [posts, setPosts] = useState([])
    const [searchTerm, setSearchTerm] = useState("")
    const [filteredPost, setFilteredPost] = useState([])
    const [newTitle, setNewTitle] = useState("")
    const {token, setSinglePostID} = props

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
      console.log(searchTerm)
      filterPosts()
    }

    function filterPosts () {
      let filteredPosts = posts.filter((value) => {
        return(
        value.description.toLowerCase().includes(searchTerm) || value.title.toLowerCase().includes(searchTerm) 
      )})
      console.log(filteredPosts)
      setFilteredPost(filteredPosts)
    }
    
    let postsToShow = filteredPost.length ? filteredPost : posts



    return(
        <div className="posts">
          <h1>posts</h1>
          <form onSubmit={handleSubmit}>
            <aside>
              <input 
              type="text" 
              placeholder="search" 
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              ></input>
              <input type="submit"></input>
            </aside>
          </form>
          {postsToShow.map((value, index) => {return(
            <div className="singlePost" key={value._id}>
             <h2>{value.title}</h2>
             <h3>{value.description}</h3>
             <h3>price: {value.price}</h3>
             {value.isAuthor ? <button onClick={ () => deletePost(token, value._id)}>delete</button> : null}
             {!value.isAuthor && value.active && token ? <Link to="/message"><button onClick={ () => setSinglePostID(value._id) }>message</button></Link> : null}
             </div>
             )}
          )}
        </div>
  )
}

export default Post;