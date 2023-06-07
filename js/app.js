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


app.get('/chart', function(req,res){
  res.sendfile("./html/web_05_25/time_2.html")
});

app.get('/chart_google', function(req,res){
  res.sendfile("./html/web_05_25/chart.html")
});

app.get('/line_chart', function(req,res){
  res.sendfile("./html/web_05_25/line_chart.html")
});

app.get('/line_chart_stock', function(req,res){
  res.sendfile("./html/web_05_25/line_chart_stock.html")
});

app.get('/stock', function(req,res){
  res.sendfile("./html/web_06_07/stock.html")
});


app.get('/getStockPrice', function(req,res){
  const request = require('request');
  request('https:https://polling.finance.naver.com/api/realtime?query=SERVICE_ITEM:328380|SERVICE_RECENT_ITEM:328380&_callback=window.__jindo2_callback._9993',)
  console.error('error',error);
  console.log('statusCode',response && response.statusCode);
  console.log('body',JSON.parse(body.split("(")[1].split(")")[0]));
});