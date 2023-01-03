import { useState,useEffect } from "react";
import AddTask from "./AddTask";
import TaskCheckIcon from "./TaskCheckIcon";
import Task from "./Task"

const TaskList = ({data,checked,isSendPost}) => {
  const [isChecked,setChecked] = useState();
  useEffect(()=>{
    setChecked(checked)
  },[checked])


  const tasks = ()=> data.map( (task,i)=>{
    return <li key={i}><TaskCheckIcon/><Task tasks={task}/></li>
  } )



    return (
      <div className={isChecked ? "taskDetailList active":"taskDetailList"}>
        <ul className="detailList">
          { tasks() }
          <li><AddTask isSendPost={isSendPost}/></li>
        </ul>
      </div>
    )
  }

export default TaskList;