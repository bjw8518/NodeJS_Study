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

//230406----------------------------------------
app.get('/script_login', function(req,res){
  res.sendfile("./html/script_login.html")
});

app.get('/script_debugger', function(req,res){
  res.sendfile("./html/script_debugger.html")
});

app.get('/script_gugudan', function(req,res){
  res.sendfile("./html/script_gugudan.html")
});

app.get('/script_gugudan_ex', function(req,res){
  res.sendfile("./html/script_gugudan_ex.html")
});

app.get('/script_arrays', function(req,res){
  res.sendfile("./html/script_arrays.html")
});

app.get('/script_jjack', function(req,res){
  res.sendfile("./html/script_jjack.html")
});
//230413----------------------------------------
app.get('/js_study', function(req,res){
  res.sendfile("./html/web_04_13/js_study.html")
});

app.get('/js_array', function(req,res){
  res.sendfile("./html/web_04_13/js_array.html")
});

app.get('/js_array_ans', function(req,res){
  res.sendfile("./html/web_04_13/js_array_ans.html")
});

app.get('/js_radio_btn', function(req,res){
  res.sendfile("./html/web_04_13/js_radio_btn.html")
});

app.get('/js_radio_btn_multiple', function(req,res){
  res.sendfile("./html/web_04_13/js_radio_btn_multiple.html")
});
//230420-----------------------------------------------
app.get('/today_230420', function(req,res){
  res.sendfile("./html/web_04_20/today_230420.html")
});
app.get('/ja_radio_btn', function(req,res){
  res.sendfile("./html/web_04_20/ja_radio_btn.html")
});
app.get('/ja_radio_btn_JQ', function(req,res){
  res.sendfile("./html/web_04_20/ja_radio_btn_JQ.html")
});


//----------------ajax-----------------------
app.get('/ajax', function(req,res){
  res.sendfile("./html/web_04_20/ajaxTest.html")
});//클라이언트

app.get('/ajaxTest', function(req,res){
  res.send("ajax response")
}); //라우터
//----------------ajax-----------------------
app.get('/request1', function(req,res){
  res.send("response1")
}); //라우터
app.get('/request2', function(req,res){
  res.send("response2")
}); //라우터
app.get('/request3', function(req,res){
  res.send("response3")
}); //라우터
app.get('/request4', function(req,res){
  res.send("response4")
}); //라우터

app.get('/ajax_request', function(req,res){
  res.sendfile("./html/web_04_20/ajax_request.html")
});//클라이언트