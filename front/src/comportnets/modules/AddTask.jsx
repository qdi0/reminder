// import axios from "axios";
// import { useState } from "react";

const AddTask = ({isSendPost}) =>{
  return (
    <div className="task">
      <input className="taskName" type="text" defaultValue='' placeholder="test"/>
      <input className="taskDate" type="date" defaultValue="1991-01-01"/>
      <button onClick={()=>{isSendPost()}}>タスクの追加</button>
    </div>
  )
}

export default AddTask;