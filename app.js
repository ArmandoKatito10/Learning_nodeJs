var express = require('express');

// chamada da funcão express
var app = express();
//setando as views do app do EJS
app.set('view engine', 'ejs');

app.get('/', function(req, res){
    res.render("home/index");
});

app.get('/formulario_inclusao_noticia', function(req, res){
    res.render("admin/form_add_noticia");
});

// criando rotas para arquivos HTML esternos
app.get('/noticias', function(req, res){
    res.render("noticias/noticias");
});
  

app.listen(3000, function(){
    console.log("servidor rodando com o Express");
});


