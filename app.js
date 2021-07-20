var app = require('./config/server');
var rotaNoticias = require('./app/routes/noticias')(app);
 var routHome = require('./app/routes/home')(app);

 var routformu = require('./app/routes/formulario_inclusao_noticias')(app);

app.listen(3000, function(){
    console.log("servidor rodando com o Express");
});

