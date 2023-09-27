

import React,{useEffect, useState} from "react";
import axios from "axios";





const Display = () =>{


    const[data,setData]=useState([]);
    const[loading,setLoading]=useState(false)
    

    useEffect(()=>{
        fetchUser();
    },[])


   function fetchUser(){
    axios.get("https://dummyjson.com/products")
    .then((response)=>{
        setData(response.data.products);
        setLoading(true)
        console.log(response.data.products);
    }).catch((error)=>{
        console.log(error);
    })
   }
    



    return(
        <div>
            <h1>Display here</h1>
            {
                loading && <pre>

                    {JSON.stringify(data,null,2)}



                </pre>
            }

        </div>
    )
}

export default Display;