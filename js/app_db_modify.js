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

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/modify', function (req, res) {
  connection.query("SELECT * FROM post ORDER BY NO DESC;", function (error, results, fields) {
    if (error) throw error;
    res.send(results);
  });
});

app.post('/modify', function (req, res) {
  var no = req.body.no;
  var title = req.body.title;
  var content = req.body.content;

  connection.query("UPDATE post SET title=?, content=? WHERE no=?", [no,title, content ], function (error, results, fields) {
    if (error) throw error;
    res.send(results);
  });
});

app.post('/delete', function (req, res) {
  var no = req.body.no;

  connection.query("DELETE FROM post WHERE no=?", [no], function (error, results, fields) {
    if (error) throw error;
    res.send(results);
  });
});

app.post('/add', function (req, res) {
  var title = req.body.title;
  var content = req.body.content;

  connection.query("INSERT INTO post (title, content) VALUES (?, ?)", [title, content], function (error, results, fields) {
    if (error) throw error;
    res.send(results);
  });
});