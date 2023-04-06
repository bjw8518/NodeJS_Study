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

//230406----------------------------------------1
app.get('/script_login', function(req,res){
  res.sendfile("./html/script_login.html")
})

app.get('/script_debugger', function(req,res){
  res.sendfile("./html/script_debugger.html")
})

app.get('/script_gugudan', function(req,res){
  res.sendfile("./html/script_gugudan.html")
})

app.get('/script_gugudan_ex', function(req,res){
  res.sendfile("./html/script_gugudan_ex.html")
})

app.get('/script_arrays', function(req,res){
  res.sendfile("./html/script_arrays.html")
})

app.get('/script_jjack', function(req,res){
  res.sendfile("./html/script_jjack.html")
})



//-----------------------------------------------



//230406(lifecoding)----------------------------------------
app.get('/ex_01', function(req,res){
  res.sendfile("./lifecoding/ex_01.html")
})

app.get('/ex_02', function(req,res){
  res.sendfile("./lifecoding/ex_02.html")
})
//)---------------------------------------------------------
// app.get('/test', function(req,res){
//   res.send("test.html")
// })