
module.exports = function (app) {

	// criando rotas para arquivos HTML esternos
	app.get('/noticias', function (req, res) {
		var mysql = require('mysql2');

		var connection = mysql.createConnection({
			host: 'localhost',
			user: 'Armando',
			password: 'DataScience@10k',
			database: 'portal_noticias'
		});
		//console.log(connection)
		connection.query('select * from noticias', function (error, result) {
			if(error){
				throw error;
			}
			//console.log(result)
			res.send(result);
		});
	});

};
   // res.render("noticias/noticias");

