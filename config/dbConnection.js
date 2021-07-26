var mysql = require('mysql2');

var connMYSQL = function(){
    console.log('Connections stated');
    return mysql.createConnection({
        host: 'localhost',
        user: 'Armando',
        password: 'DataScience@10k',
        database: 'portal_noticias'
    });


}

module.exports = function(){
   console.log('O autoload foi feito com sucesso'); 
return connMYSQL;
};
