// node_modules 에 있는 express 관련 파일을 가져온다.
var express = require('express');
//require은 함수이므로, 변환값을 변수에 저장한다.
var http = require('http');
//express는 함수이므로, 변환값을  변수에 저장한다.
var app = express();
//서버 만들기
//포트번호 변경 시 localhost: ???
var server = http.createServer(app).listen(3000);


// app.get('/', function(req, res) {
//   res.sendFile(__dirname + "/public/index.html") //__dirname은 요청하고자하는 파일의 경로를 단축시켜주는 절대경로 식별자이다
// });


//----------------------
// app.get('',function(req,res){
//   res.sendFile(__dirname + "/index.html")
// });
//----------------------------

app.get('/testfile',function(req,res){
  res.sendFile("index.html")
});

app.use(express.static('public'));
app.use(express.static('public'));



