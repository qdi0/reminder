// import axios from "axios";
// import { useState } from "react";




const AddTask = ({isSendPost,taskNameValue,setTaskNameValue,taskDateValue,setTaskDateValue}) =>{
  const taskValue = {taskDetail:taskNameValue,taskDate:taskDateValue};
  return (
    <div className="task">
        <input name="taskName" className="taskName" type="text" value={taskNameValue} placeholder="test" onChange={(e)=>{setTaskNameValue(e.target.value)}}/>
        <input name="taskDate" className="taskDate" type="date" value={taskDateValue} onChange={(e)=>{setTaskDateValue(e.target.value)}}/>
        <button onClick={()=>{isSendPost(taskValue)}}>タスクの追加</button>
    </div>
  )
}

export default AddTask;