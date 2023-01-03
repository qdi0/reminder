// import axios from "axios";
// import { useState } from "react";




const AddTask = ({isSendPost}) =>{
  return (
    <div className="task">
        <input name="taskName" className="taskName" type="text" defaultValue='test values' placeholder="test"/>
        <input name="taskDate" className="taskDate" type="date" defaultValue="1991-01-01"/>
        <button onClick={()=>{isSendPost()}}>タスクの追加</button>
    </div>
  )
}

export default AddTask;