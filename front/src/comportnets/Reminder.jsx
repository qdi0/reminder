import { useEffect,useState } from 'react';
import {Sidebar,Header,TaskList} from './index'
import axios from 'axios';

const Reminder = () =>{
  // so not good practicve.but i havent no idea beccause react hooks rule.
  // i have to look for a solution.
  const[data,setData] = useState(['']);
  const[toggelMenu,setToggelMenu] = useState(true);
  const[isSendPost,setIsSendPost] = useState();
  const[currentListID,setCurrentListId] = useState(1);

  // first rendering.parchase task details from DB.
  useEffect(()=>{
    const getDatas = async ()=>{
      const response = await axios.post('/api');
      console.log(response)
      setData(response.data)
    }
    getDatas()
  },[setIsSendPost])

  const toggleMenuButton = () =>{
    setToggelMenu(!toggelMenu)
    console.log(toggelMenu)
  }

  const SendNewTask = () =>{
    axios.post(
      '/add',{
        taskDetail : "test of post communications",
      })
    .then((res)=>{
      console.log("the communication is successful")
      setIsSendPost(res.data)
    })
  }


  return(
    <>
    <Header toggleMenuButton={toggleMenuButton}/>
    <Sidebar title={data} checked={toggelMenu}/>
    <TaskList data={data} checked={toggelMenu} isSendPost={SendNewTask}/>
    </>
  )
}

export default Reminder;