const express = require('express');
const path = require('path');
const server = express();
const createPath = require('./helpers/createPath');
const methodOverride = require('method-override');
const mongoose = require('mongoose');
require('dotenv').config();

server.use(express.urlencoded({extended:false}));

const pagesRoutes = require('./routes/pages-routes');//Роуты 
server.set('view engine','ejs');

mongoose 
    .connect(process.env.MONGO_URL, )
    .then((res) =>console.log('Connect to DB'))
    .catch((error)=> console.log(error));






server.listen(process.env.PORT, 'localhost', (error)=> {
    error ? console.log(error) : console.log(`listening port ${process.env.PORT}`)
});

//MIDDLEWARES
server.use(express.static(path.join(__dirname, 'css')));


server.use(pagesRoutes);

server.use((req,res)=> {
    res.statusCode = 404;
    res.render(createPath('error'));
})