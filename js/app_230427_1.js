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
//-----------------client-------------------
app.get('/carPrice', function(req,res){
  res.sendfile("./html/web_04_27/carPrice_1.html");
});//클라이언트

    app.get('/getCarPrice', function(req,res){
      let PriceInfo =[
        {itemName:"item1", price : 1000},
        {itemName:"item2", price : 5000},
        {itemName:"item3", price : 10000},
        {itemName:"item4", price : 30000},
        {itemName:"item5", price : 50000},
        {itemName:"item6", price : 100000},
        {itemName:"item7", price : 500000},
      ]
      let inputPrice = req.query.price;
      let availableItemName = "구입불가";
      for(let i=0; i<PriceInfo.length; i++){
        if(PriceInfo[i].price <= inputPrice){
          availableItemName = PriceInfo[i].itemName;
        }else{
          break;
        }
      }
      res.send(availableItemName);
    }); //라우터