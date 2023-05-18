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

var mysql = require('mysql');
var connection = mysql.createConnection({
  host :  'localhost',
  user :   'root',
  password  : '0000',
  database  : 'web'
});

app.get('/insert',function (req,res){
  res.sendfile(__dirname+"/insert.html")
});

app.get('/dbtest',function(req, res){
  
  let query = `INSERT INTO post
              (title, content)
              VALUES
              ('${req.query.title}','${req.query.title}')`;

  console.log(query);

  connection.query(query, function(error, results,fields){
    if(error) throw error
  });
});

app.get('/list',function (req,res){
  res.sendfile(__dirname+"/list.html")
});

app.get('/getList',function (req,res){
  let query = `select title from post order by no desc`
  connection.query(query,function(error,results,fields){
    if(error) throw error
    res.send(results)
  });
});

app.get('/deletePost', function(req,res){

  let query = `delete from post WHERE NO = ${req.query.no};`;
  console.log(query);
  connection.query(query, function(error,results,fields){
    console.log(results);
    res.send(results)
  });
});