import React, { useEffect, useState } from "react";
import { getUserInfo } from "./api";

const Mail = (props) => {

    const [allMail , setAllMail] = useState([])
    
    const {token} = props

    useEffect (() => {

        const fetchdata = async () => {
        let results = await getUserInfo(token)
        setAllMail(results.data.messages)
        }
      fetchdata()
      }, [token])

    return(
        <div>{allMail.map((value, index) => { return <div>{value}</div> })}</div>
    )
      
    
}

export default Mail