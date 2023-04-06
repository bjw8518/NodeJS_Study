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

var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '0000',
  database : 'web'
});
/*=========================================*/
app.get('/test',function(req,res){
  connection.query('SELECT * FROM post;', function (error, results, fields) {
    console.log("changed");
    console.log(results);
    res.send(results);
  });
});
/*=========================================*/
//delete from post where No >= 0;
//SELECT * FROM post;