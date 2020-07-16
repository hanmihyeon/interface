const express = require('express');
const router = express.Router();
const db = require('../db');

// router.get('/', (req, res)=>res.json({}));

const Pool = require('pg-pool');
const cn = {
    user: 'postgres',
    password: 'wlals1013!',
    host: 'localhost',
    port: 5432,
    database:'test',
};
let pool = new Pool(cn);

router.get('/', (req, res)=> {
    pool.connect().then(client=>{
        client.query("SELECT * FROM user_info").then(result => {
            client.release();
            res.send(result.rows);
            console.log('data:',result.rows);
        })
        .catch(e=> {
            client.release()
            console.error('error',e.message,e.stack)
        })
    })
    });
      

module.exports = router;