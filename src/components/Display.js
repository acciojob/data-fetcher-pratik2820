

import React,{useEffect, useState} from "react";
import axios from "axios";


const Display = () =>{


    const[data,setData]=useState([]);
    const[loading,setLoading]=useState(false)
    const[errorMistake,setErrorMistake]=useState("")
    

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
        setErrorMistake("An error occurred")
    })
   }
    return(
        <div>
            <h1>Data Fetched from API</h1>
            {
                loading && <pre>

                    {JSON.stringify(data,null,2)}

                </pre>

            }
            {
            errorMistake && <h2>An error occurred</h2>
            }
            {
                data ? [] :<h2></h2>
            }

        </div>
    )
}

export default Display;