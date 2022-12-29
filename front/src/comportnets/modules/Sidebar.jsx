import { useEffect,useState } from "react";

const Sidebar = ({title,checked}) =>{

const [isChecked,setChecked] = useState()
useEffect(()=>{
setChecked(checked)
},[checked])

const filterTitle = [];
// title is geted datebase.
title.map((value)=>{
if(!filterTitle.some((e) => e.taskListId === value.taskListId)) filterTitle.push(value)
return filterTitle;
})

// this func is ttl name.
const titleList = () => filterTitle.map( (ttl,i)=>{
  return <li key={i}>{ttl.taskListId}</li>
});


return(
  <aside className={isChecked ? "sidebar":"sidebar close"} id="sidebar">
  <ul className="taskList">
  {titleList()}
  </ul>
  </aside>
)

}// sidebar end

export default Sidebar;