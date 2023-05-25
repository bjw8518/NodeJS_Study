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

app.get('/database',function (req,res){
  //res.sendfile(__dirname+"/insert.html")
  res.sendfile("database.html")
});

app.post('/modify', function(req, res) {

    let query = `UPDATE post SET title = '${title}', content = '${content}' WHERE no = ${no}`;

    connection.query(query,function(error,results,fields){
      if(error) throw error
      res.send(results)
    });
});

app.post('/delete', function(req, res) {
    let query = `DELETE FROM post WHERE no = ${no}`;
    connection.query(query,function(error,results,fields){
      if(error) throw error
      res.send(results)
    });
});


app.post('/add', function(req, res) {
    let { title, content } = req.body;

    let query = `INSERT INTO post (title, content) VALUES ('${title}', '${content}')`;

    connection.query(query,function(error,results,fields){
      if(error) throw error
      res.send(results)
    });
});


app.get('/getList', function(req, res) {
    let query = `SELECT no, title, content FROM post ORDER BY no DESC`;

    connection.query(query,function(error,results,fields){
      if(error) throw error
      res.send(results)
    });
});