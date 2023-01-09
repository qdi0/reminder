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

app.use(express.urlencoded({extended: false}));
// in default express sertting,not process json.
// this use porps is necessary
app.use(express.json());

// 確認用
app.get("/api",(req,res)=>{
  connection.query(
    'select * from userNameList;',
    function(err,result,fields){
      if(err){
        console.log("異常あり");
        throw err;
      }
      res.json(result);
    }
  );
});

app.post("/api",(req,res)=>{
  connection.query(
    'select * from forexsampleTaskList;',
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
  connection.query(
    'SELECT * FROM userNameList',
    function(err,results,fields){
      if(err) {
      console.log("!!");
      throw err;
      }
      console.log(results[1])
      res.send(results[0]);
    }
  )
});

app.post('/add',(req,res,next) =>{
  let reqParams = req.body;
  console.log(reqParams);
  next();
},
(req,res)=>{
  connection.query(
    'insert into forexsampleTaskList (taskDetail,taskLimitDate) values(?,?)',
    [req.body.taskDetail,req.body.taskDate],
    (err,results,fileds) =>{
      if(err) {
        console.log(err);
        throw err
      }
      res.send(res.data);
    }
  );
})


app.listen(port,()=>{
  console.log("接続中…" + port);
});