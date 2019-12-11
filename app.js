const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const mysql = require('mysql')
const bodyParsr = require('body-parser')
const app = express();

const users = require('./api/routes/users');

app.use(morgan('dev'));
app.use(cors());
app.use(bodyParsr.json());
// Criando a conexão com o DB

var conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: process.env.DB_PASSWORD,
    database: 'book-restaurant'
})
// Routes to Handling requests
app.use('/users',users);


app.use((req,res,next)=> {
    const error = new Error('Not Found');
    error.status = 404;
    next(error);
})
app.use((error, req,res,next)=> {
res.status(error.status || 500)
res.json({
    error: {
        message: error.message
    }
})
})
module.exports = app;