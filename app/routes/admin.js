module.exports = function(app){
    app.get('/formulario_inclusao_noticia', function(req, res){
    res.render("admin/form_add_noticia");
});

 app.post('/noticias/salvar', function(req, res){
     var noticia = req.body;
    //res.send(noticias);

        var connection = app.config.dbConnection();
		var noticiasModel = new app.app.models.noticiasModels(connection);
		//console.log(connection)


		noticiasModel.salvarNoticias(noticia, function (error, result) {
			if(error){ 
				throw error;
			}
            res.redirect('/noticias');
			//console.log(result)
			//res.render("noticias/noticias", {noticias : result});
		});

});

};  