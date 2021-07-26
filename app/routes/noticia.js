//var dbConnection = require('../../config/dbConnection');
module.exports = function (app) {


	// criando rotas para arquivos HTML esternos
	app.get('/noticia', function (req, res) {
		var connection = app.config.dbConnection();
		var noticiasModel = app.app.models.noticiasModel;
		//console.log(connection)

		noticiasModel.getNoticia(connection, function (error, result) {
			if(error){
				throw error;
			}
			//console.log(result)
			res.render("noticias/noticia", {noticia : result});
		});
	}); 

};