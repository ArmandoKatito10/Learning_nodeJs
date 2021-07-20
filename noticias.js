var http = require('http');
//Criando servidor
var server = http.createServer(function(req,res){
var categoria = req.url;

if (categoria == '/tecnologia') {
    res.end("<html><body>Portal de Notícias de tecnologias</body>");

}else if(categoria == '/moda'){
    res.end("<html><body>Portal de Notícias de Moda</body>");

}else if(categoria == '/beleza'){
    res.end("<html><body>Portal de Notícias de Beleza</body>");

}else{
    res.end("<html><body>Portal de Notícias</body>");
}
});
//Informando a porta
server.listen(3000);