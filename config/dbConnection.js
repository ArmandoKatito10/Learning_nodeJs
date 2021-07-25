var mysql = require('mysql2');
module.exports = function(){

    return mysql.createConnection({
        host: 'localhost',
        user: 'Armando',
        password: 'DataScience@10k',
        database: 'portal_noticias'
    });


};
