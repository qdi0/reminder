import { useState,useEffect } from "react";

const Task = ({tasks}) =>{
  const [taskValue,setTaskValue] = useState({
    userId:0,id:0,task:''
  });

  useEffect(()=>{
    setTaskValue(tasks)
  },[tasks])

  return (
    <div className="task">
      <input className="taskName" type="text" defaultValue={taskValue.taskDedail} onChange={(e)=>{setTaskValue(e.target.value)}}/>
      <input className="taskDate" type="date" defaultValue="2021-11-27"/>
    </div>
  )
}

export default Task;