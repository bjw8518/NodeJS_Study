// node_modules 에 있는 express 관련 파일을 가져온다.
// var express = require('express');
// require은 함수이므로, 변환값을 변수에 저장한다.
// var http = require('http');
// express는 함수이므로, 변환값을 변수에 저장한다.
// var app = express();
// 서버 만들기
// 포트번호 변경 시 localhost: ???
// var server = http.createServer(app).listen(3000);

var express = require('express');
var http = require('http');
const { availableParallelism } = require('os');
var app = express();
var server = http.createServer(app).listen(80);

//----------------ajax-----------------------
app.get('/project_1', function(req,res){
  res.sendfile("./html/web_05_04/project_1.html")
});

app.get('/project_2', function(req,res){
  res.sendfile("./html/web_05_04/project_2.html")
});

app.get('/project_3', function(req,res){
  res.sendfile("./html/web_05_04/project_3.html")
});

app.get('/project_4', function(req,res){
  res.sendfile("./html/web_05_04/project_4.html")
});

app.get('/bmiSum', function(req,res){
  let ipHeight = Number(req.query.height);
  let ipWeight = Number(req.query.weight);
  let bmiresult = ipWeight / ( (ipHeight / 100) * (ipHeight / 100) );
  let bmiresult_final = bmiresult.toFixed(2)
res.send(""+bmiresult_final);
});

app.get('/subjectsum', function(req,res){
  let arr = [];
  for(let i=0;i<3;i++){
    
  }
  let korean = Number(req.query.korean);
  let english = Number(req.query.english);
  let math = Number(req.query.math);
res.send(""+result);
});

