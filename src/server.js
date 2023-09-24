import express from "express";
import bodyParser from "body-parser";
import viewEngine from "./config/viewEngine";
import initWebroutes from "./route/web";
import initLoginroutes from "./route/API-login";
import connectDB from "./config/connectDB";
import cors from "cors";
require('dotenv').config();

let app = express();

//config app

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

//config cors
var whitelist = ['http://localhost:3000', 'http://localhost:8081']; //white list consumers
var corsOptions = {
    origin: function (origin, callback) {
        if (whitelist.indexOf(origin) !== -1) {
            callback(null, true);
        } else {
            callback(null, false);
        }
    },
    methods: ['GET', 'PUT', 'POST', 'DELETE', 'OPTIONS'],
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
    credentials: true, //Credentials are cookies, authorization headers or TLS client certificates.
    allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With', 'device-remember-token', 'Access-Control-Allow-Origin', 'Origin', 'Accept']
};
app.use(cors(corsOptions));
// app.use(cors());
// app.use(
//     cors({
//         origin: "*",
//         methods: ["GET", "POST"]
//     })
// );
// close config cors

viewEngine(app);
initWebroutes(app);
initLoginroutes(app);

connectDB();

let port = process.env.PORT || 6969;
//port == undefine => port = 6969
app.listen(port, () => {
    console.log("Back end nodejs is runing on the port: " + port);
})