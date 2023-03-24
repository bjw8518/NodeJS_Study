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
var app = express();
var server = http.createServer(app).listen(80);

app.get('/test', function(req,res){
  res.sendfile("test.html")
})

app.get('/test2', function(req,res){
  res.sendfile("test2.html")
})

app.get('/table', function(req,res){
  res.sendfile("table.html")
})

app.get('/table2', function(req,res){
  res.sendfile("table_resume.html")
})

app.get('/style', function(req,res){
  res.sendfile("style.html")
})
app.get('/script', function(req,res){
  res.sendfile("./Script/script.html")
})

// app.get('/test', function(req,res){
//   res.send("test.html")
// })