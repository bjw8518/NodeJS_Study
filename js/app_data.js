var express = require('express');
var http = require('http');
var app = express();
var server = http.createServer(app).listen(80);

// MariaDB 연결 설정
var mysql = require('mysql');
var connection = mysql.createConnection({
  host :  'localhost',
  user :   'root',
  password  : '0000',
  database  : 'web'
});

// GET /posts - 모든 게시물 조회
app.get('/getList', (req, res) => {
  pool.getConnection()
    .then(conn => {
      conn.query('SELECT * FROM post')
        .then(rows => {
          conn.release();
          res.send(rows);
        })
        .catch(err => {
          conn.release();
          res.status(500).send(err);
        });
    })
    .catch(err => {
      res.status(500).send(err);
    });
});

// DELETE /posts/:id - 게시물 삭제
app.delete('/deletePost/:id', (req, res) => {
  const id = req.params.id;
  pool.getConnection()
    .then(conn => {
      conn.query('DELETE FROM post WHERE id = ?', [id])
        .then(result => {
          conn.release();
          if (result.affectedRows === 0) {
            res.status(404).send('Post not found');
          } else {
            res.send(result);
          }
        })
        .catch(err => {
          conn.release();
          res.status(500).send(err);
        });
    })
    .catch(err => {
      res.status(500).send(err);
    });
});

// 서버 실행
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});