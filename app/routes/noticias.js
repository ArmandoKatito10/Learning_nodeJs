//var dbConnection = require('../../config/dbConnection');
module.exports = function (app) {


	// criando rotas para arquivos HTML esternos
	app.get('/noticias', function (req, res) {
		var connection = app.config.dbConnection();
		var noticiasModel = app.app.models.noticiasModel;

		//console.log(connection)
		noticiasModel.getNoticias(connection, function (error, result){
			if(error){
				throw error;
			}
			//console.log(result);
			res.render("noticias/noticias", {noticias : result});
		});
	});

};
   // res.render("noticias/noticias");

