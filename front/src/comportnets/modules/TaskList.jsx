import { useState,useEffect } from "react";
import AddTask from "./AddTask";
import TaskCheckIcon from "./TaskCheckIcon";
import Task from "./Task"

const TaskList = ({data,checked,isSendPost}) => {
  const [isChecked,setChecked] = useState();
  const [taskNameValue,setTaskNameValue] = useState("test values");
  const [taskDateValue,setTaskDateValue] = useState("1991-01-01");
  useEffect(()=>{
    setChecked(checked)
  },[checked])


  const tasks = ()=> data.map( (task,i)=>{
    return <li key={i}><TaskCheckIcon/><Task task={task}/></li>
  } )



    return (
      <div className={isChecked ? "taskDetailList active":"taskDetailList"}>
        <ul className="detailList">
          { tasks() }
          <li><AddTask isSendPost={isSendPost} taskNameValue={taskNameValue} setTaskNameValue={setTaskNameValue} taskDateValue={taskDateValue} setTaskDateValue={setTaskDateValue}/></li>
        </ul>
      </div>
    )
  }

export default TaskList;