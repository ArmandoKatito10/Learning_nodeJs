// configurações do servidor 
var express = require('express');

// chamada da funcão express
var app = express();
//setando as views do app do EJS
app.set('view engine', 'ejs');
//dir pattern to serch all views from app
app.set('views', './app/views');
// retornando a variável app
module.exports = app;
