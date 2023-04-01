import express from "express";
import dotenv from 'dotenv';
import mustache from 'mustache-express';
import path from 'path';
import mainRoutes from './routes/index';

dotenv.config();// arquivo .env

//init server
const server = express();

//template engine
server.set('view engine','mustache');

//set engine
server.engine('mustache',mustache());

//set public folder = pasta publica
server.use(express.static(path.join(__dirname,'../public')));

// set views folder: pasta views
server.set('views',path.join(__dirname,'views'));

server.use(mainRoutes);

//set 404 not found default page
server.use((req,res)=>{
    res.send("Page not found!");
})

//server listen

server.listen(process.env.PORT);