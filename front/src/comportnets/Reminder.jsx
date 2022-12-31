import { useEffect,useState } from 'react';
import {Sidebar,Header,TaskList} from './index'
import axios from 'axios';

const Reminder = () =>{
  const[data,setData] = useState(['']);
  const[toggelMenu,setToggelMenu] = useState(true);
  const[isSendPost,setIsSendPost] = useState(false);
  const[currentListID,setCurrentListId] = useState(1);

  useEffect(()=>{
    const getDatas = async ()=>{
      const response = await axios.post('/api');
      console.log(response)
      setData(response.data)
    }
    getDatas()
  },[isSendPost])

  const toggleMenuButton = () =>{
    setToggelMenu(!toggelMenu)
    console.log(toggelMenu)
  }

  const SendNewTask = () =>{
    setIsSendPost(!isSendPost)
    console.log('send is' + isSendPost);
    axios.post('/add')
    .then((res)=>{
      console.log(res);
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