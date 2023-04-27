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

app.get('/carPrice_1', function(req,res){
  res.sendfile("./html/web_04_27/carPrice_1.html")
});//클라이언트

// app.get('/getCarPrice', function(req,res){
//   res.send("ajax response")
// }); //라우터

app.get('/getCarPrice', function(req,res){  //라우터!!!!!!!!!

  let carType = Number(req.query.carType);
  let carColor = Number(req.query.carColor);
  let resultSum = Number(carType + carColor);
  res.send(resultSum+"만원");
  console.log(carType);
  console.log(carType);
  console.log(resultSum);
}); //?는 쿼리스트링