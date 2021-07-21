create database portal_noticias
default character set utf8
default collate utf8_general_ci;
 CREATE TABLE IF NOT EXISTS noticias(
     id_noticia INT NOT NULL AUTO_INCREMENT,
     titulo VARCHAR (100),
     noticia TEXT,
     data_criacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
     PRIMARY KEY (id_noticia)
 )CHARSET = utf8;
 INSERT INTO noticias VALUES ()

 INSERT INTO noticias(titulo,noticia)VALUES('Título da Notícia','Notícia em si'); 