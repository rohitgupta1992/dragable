import React,{useState,useEffect} from "react";
import axios from "axios";
const useFetch =(url)=>{
    const [data,setData] = useState(null)
    const[loading,setLoading] = useState(true)
    const [error,setError]= useState(null)
    useEffect(()=>{
        const fatchData =async()=>{
try{
    const response = await axios.get(url)
    setData(response.data)
    setLoading(false)
}catch (error){
    setError(error)
    setLoading(false)
}
        }
        fatchData()
    },[url])
    return {data,error,loading}
}

export default useFetch;