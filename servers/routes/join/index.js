const express = require('express');
const router = express.Router();
const db = require('../db');

const Pool = require('pg-pool');
const cn = {
    user: 'postgres',
    password: 'wlals1013!',
    host: 'localhost',
    port: 5432,
    database:'test',
};
let pool = new Pool(cn);
