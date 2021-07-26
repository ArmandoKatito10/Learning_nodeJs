// configurações do servidor 
var express = require('express');
var consign = require('consign');

// chamada da funcão express
var app = express();
//setando as views do app do EJS
app.set('view engine', 'ejs');
//dir pattern to serch all views from app
app.set('views', './app/views');
//Add consign routes to all files server app
consign().include('app/routes').into(app);

// retornando a variável app
module.exports = app;
