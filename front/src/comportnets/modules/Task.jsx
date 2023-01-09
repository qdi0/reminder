import { useState,useEffect } from "react";

const Task = ({task}) =>{
  const [taskValue,setTaskValue] = useState({
    id:0,taskDetail:'',taskLimitDate:''
  });

  const formatDateFunc = (date,format) => {
    const formatMonth = String(date.getMonth() + 1).padStart(2,'0');
    const formatDay = String(date.getDate()).padStart(2,'0');

    format = format.replace(/YYYY/,date.getFullYear());

    format = format.replace(/MM/,formatMonth);

    format = format.replace(/DD/,formatDay);

    return format;
  }

  useEffect(()=>{
    console.log(task)
    setTaskValue(task)
    const formatDate =  formatDateFunc(new Date(task.taskLimitDate),"YYYY-MM-DD");
    setTaskValue(state =>({
      ...state,
      "taskLimitDate":formatDate
    }))
    console.log(formatDate)
    },[task])

  return (
    <div className="task">
      <input className="taskName" type="text" defaultValue={taskValue.taskDetail}/>
      <input className="taskDate" type="date" defaultValue={taskValue.taskLimitDate}/>
    </div>
  )
}

export default Task;