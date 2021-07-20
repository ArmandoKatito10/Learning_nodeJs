// configurações do servidor 
var express = require('express');

// chamada da funcão express
var app = express();
//setando as views do app do EJS
app.set('view engine', 'ejs');
// retornando a variável app
module.exports = app;
