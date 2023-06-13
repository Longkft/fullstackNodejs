import express from "express";
import homeController from "../controller/homeController";

let router = express.Router();

let initWebRoutes = (app) => {
    router.get("/", homeController.getHomePage);

    router.get("/hoidanlong",(req , res) => {
        return res.send("hê lố");
    });

    return app.use("/" , router);
}

module.exports = initWebRoutes;