const express =  require('express');
const app = express();
const mysql = require('mysql2');
const port = process.env.PORT || 3001;

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '0404',
  database: 'newapp'
});

// 確認用
app.post("/api",(req,res)=>{
  connection.query(
    'SELECT users.userName,users.userId,tasks.taskDedail,tasks.taskListId,tasks.userId_task,tasks.taskDate FROM users join tasks on users.userId = tasks.userId_task',
    function(err,result,fields){
      if(err){
        console.log("異常あり");
        throw err;
      }
      res.json(result);
    }
  );
});

app.get("/",(req,res)=>{
  'SELECT * FROM users WHERE  1',
  function(err,results,fields){
    if(err) {
    console.log("!!");
    throw err;
    }
    console.log(results[0]);
  }
  res.send("hello world");
});

app.post('/add',(req,res)=>{
  connection.query(
    'insert into tasks (taskDedail,taskListId,userId_task,taskDate) values("addtional",1,1,"2022-04-01")',
    (err,results,fileds) =>{
      if(err) {
        console.log(err);
        throw err
      }
      res.json(results);
    }
  );
})


app.listen(port,()=>{
  console.log("接続中…" + port);
});