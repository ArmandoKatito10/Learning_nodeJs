var dbConnection = require('../../config/dbConnection');
module.exports = function (app) {
var connection = dbConnection();
	// criando rotas para arquivos HTML esternos
	app.get('/noticias', function (req, res) {
		
		//console.log(connection)
		connection.query('select * from noticias', function (error, result) {
			if(error){
				throw error;
			}
			//console.log(result)
			res.render("noticias/noticias", {noticias : result});
		});
	});

};
   // res.render("noticias/noticias");

