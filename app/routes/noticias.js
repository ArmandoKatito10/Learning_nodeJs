
module.exports= function(app){

// criando rotas para arquivos HTML esternos
app.get('/noticias', function(req, res){
    res.render("noticias/noticias");
});
};

  