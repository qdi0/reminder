import { useState,useEffect } from "react";

const Task = ({tasks}) =>{
  const [taskValue,setTaskValue] = useState({
    id:'',taskDetail:'',taskLimitDate:''
  });

  useEffect(()=>{
    setTaskValue(tasks)
    console.log(tasks.taskLimitDate)
  },[tasks])

  return (
    <div className="task">
      <input className="taskName" type="text" defaultValue={taskValue.taskDetail} onChange={(e)=>{setTaskValue(e.target.value)}}/>
      <input className="taskDate" type="date" defaultValue={taskValue.taskLimitDate}/>
    </div>
  )
}

export default Task;