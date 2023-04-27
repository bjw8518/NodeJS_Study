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




app.get('/qstest', function(req,res){
  res.sendfile("./html/web_04_20/qstest.html")
});//클라이언트

app.get('/qsSum', function(req,res){  //라우터!!!!!!!!!
  let number1 = Number(req.query.num1);  //num1을 num1변수에담음
  let number2 = Number(req.query.num2);  //num2을 num2변수에담음
  let resultSum = number1 + number2;  //resultSum = number1 + number2 
  res.send(""+resultSum);
  console.log(number1);  //num1의 값
  console.log(number2);  //num2의 값
  console.log(resultSum); //result의 값
}); //?는 쿼리스트링






app.get('/qstest_multiply', function(req,res){
  res.sendfile("./html/web_04_20/qstest_multiply.html")
});//클라이언트

app.get('/qsmultiply', function(req,res){  //라우터!!!!!!!!!
  let number1 = Number(req.query.num1);  //num1을 num1변수에담음
  let number2 = Number(req.query.num2);  //num2을 num2변수에담음
  let number3 = Number(req.query.num3);  //num2을 num2변수에담음
  let resultSum = number1 * number2 * number3;  //resultSum = number1 + number2 
  res.send(""+resultSum);
  console.log(number1);  //num1의 값
  console.log(number2);  //num2의 값
  console.log(number3);  //num2의 값
  console.log(resultSum); //result의 값
}); //?는 쿼리스트링


////////////////////////////////s

app.get('/qstest_buy', function(req,res){
  res.sendfile("./html/web_04_20/qstest_buy.html")
});//클라이언트

app.get('/qstestbuy', function(req,res){  //라우터!!!!!!!!!
  let haveMoney = Number(req.query.cont);
  //res.send(""+resultSum);
  let nomoney = 900;
  let item1_value = 1000;
  let item1 = "item1";
  let item2_value = 5000;
  let item2 = "item2";
  let item3_value = 10000;
  let item3 ="item3";
  let item4_value = 30000;
  let item4 ="item4";
  let item5_value = 50000;
  let item5 ="item5";
  let item6_value = 100000;
  let item6 ="item6";
  let item7_value = 500000;
  let item7 ="item7";
  
  if(haveMoney <= nomoney){
    res.send("창놈새끼");
  }else if(haveMoney <= item1_value){
    res.send(item1)
  }else if(haveMoney <= item2_value){
    res.send(item2);

  }else if(haveMoney <= item3_value){
    res.send(item3);

  }else if(haveMoney <= item4_value){
    res.send(item4);

  }else if(haveMoney <= item5_value){
    res.send(item5);

  }else if(haveMoney <= item6_value){
    res.send(item6);

  }else if(haveMoney <= item7_value){
    res.send(item7);
  }else{
    res.send("돈이 많네요");
  }
}); //?는 쿼리스트링