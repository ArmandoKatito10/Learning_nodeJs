//var dbConnection = require('../../config/dbConnection');
module.exports = function (app) {


	// criando rotas para arquivos HTML esternos
	app.get('/noticia', function (req, res) {
		var connection = app.config.dbConnection();
		var noticiasModel = new app.app.models.NoticiasDAO(connection);
		//console.log(connection)

		noticiasModel.getNoticia(function (error, result) {
			if(error){
				throw error;
			}
			//console.log(result)
			res.render("noticias/noticia", {noticia : result});
		});
	}); 

};