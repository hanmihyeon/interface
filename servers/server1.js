const express = require('express'),
      bodyParser = require('body-parser'),  //post 쓰려고
      cors = require('cors'),  //요청한 데이터를 브라우저에서 보안목적으로 차단하는데 이요청을 허가해주는 nodejs 의 미들웨어
      app = express(); //앱에 적용
      //.env 값 가져오기

const port = 5000;
// postgresql 에서 db 값을 가져오기위한 데이터
//const Pool = require('pg-pool');
const { Pool } = require('pg');

require('dotenv').config();


const config = {
  user: 'yeol',
  password:process.env.password,
  host:    process.env.server_host,
  port: 5432,
  database:process.env.database,
};
let pool = new Pool(config);
 app.use(cors());  // 외부와의 연결 허용

//바디 파서 ->  post 값 받기 위해 사용
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

let fbg_sql = 'select *from fbgtable';

app.get('/a' ,(req, res) =>{

    pool.connect((err, client, release) => {

        if (err)return console.error('Error acquiring client', err.stack);
              client.query(fbg_sql, (err, result) => {
                  console.log(result.rows);
                  res.send(result.rows);
                  release();
              })

           })

})

app.listen(port , ()=>{
  console.log(`start server port:${port}`)
})
