const express=require('express');
const server=express();
const todoRoute=require('./routes/todo');

server.use(express.json());
server.use(express.urlencoded({extended: true}));
server.set('view engine','hbs');
server.set('views',__dirname+ "/views");
server.use('/todo',todoRoute);
server.listen(1234);