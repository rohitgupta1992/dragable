import { useState } from "react";
import useFetch from "./useFatch";
const Home =()=>{
    const url = 'https://jsonplaceholder.typicode.com/posts'
    const {data,error,loading} = useFetch(url)

    const [post,setPost] = useState("")

    if(loading) return <div>Loading ....</div>
    if(error) return <div>Error : {error.message}</div>
console.log(data)
    return (
        <div>
            <h1>hellow</h1>
            {
                data.map(item=>{
                    return(
                    <p>{item.id}</p>
                    )
                })
            }
        </div>
    )
}
export default Home;