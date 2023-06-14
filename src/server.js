import express from "express";
import bodyParser from "body-parser";
import viewEngine from "./config/viewEngine";
import initWebroutes from "./route/web";
import connectDB from "./config/connectDB";
require('dotenv').config();

let app = express();

//config app

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

viewEngine(app);
initWebroutes(app);

connectDB();

let port = process.env.PORT || 6969;
//port == undefine => port = 6969
app.listen(port, () => {
    console.log("Back end nodejs is runing on the port: a" + port);
})