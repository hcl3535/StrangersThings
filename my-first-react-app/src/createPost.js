import React, { useEffect, useState } from "react";
import { sendPost } from "./api";


const CreatePost = (props) => {

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [price, setPrice] = useState("")
    const [canDeliver, setCanDeliver] = useState(false)

    const {token} = props

    const handleSubmit = (event) => {
        event.preventDefault();
        sendPost(title, description, price, canDeliver, token)
        console.log("title", title)
        console.log("description", description)
        console.log("price", price)
        console.log("canDeliver", canDeliver)
      } 
 
    return(
        <form className="posts" onSubmit={handleSubmit}> 
          <h2> Create post </h2>
          <h4>title</h4>
          <input 
              type="text" 
              placeholder="title"
              value={title}
              onChange={e => setTitle(e.target.value)}
              >
          </input>
          <h4>description</h4>
          <input 
              type="text" 
              placeholder="description"
              value={description}
              onChange={e => setDescription(e.target.value)}
              >
          </input>
          <h4>price</h4>
          <input 
              type="text" 
              placeholder="price"
              value={price}
              onChange={e => setPrice(e.target.value)}
              >
          </input>
          <h4>can deliver</h4>
          <input 
          type="checkbox" 
          onChange={e => canDeliver ? setCanDeliver(false) : setCanDeliver(true)}
          >
          </input>
          <div></div>
          <input type="submit"></input>
      </form> 
    )
}

export default CreatePost