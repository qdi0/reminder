import { useEffect,useState } from "react";
import axios from 'axios';

const Api = () =>{
  const [post,setPost] = useState([]);

  useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(
      res => {setPost(res.data)}
    )
  },[])

  const userIds = () =>{
    post.map(( userId,i )=>{
      return console.log(userId.userId)
    });
  }
  return(
    <>
    <button onClick={()=>{userIds()}}>click as console.log</button>
    </>
  )
}

export default Api;