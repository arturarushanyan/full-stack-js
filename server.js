import express from "express";
import Config from "./config";
import apiRouter from "./api/index";
import sassMiddleware from 'node-sass-middleware';
import path from 'path';

const server = express();

server.use(sassMiddleware({
    src: path.join(__dirname, 'sass'),
    dest: path.join(__dirname, 'public')
}));

server.set('view engine', 'ejs');

server.get('/', (req,res) => {
    res.render('index',{content: "Welcome to <em>ejs</em>"});
});

server.use("/api",apiRouter);
server.use(express.static('public'));

server.listen(Config.port, () => {
    console.info("Express is listening on port " + Config.port);
});