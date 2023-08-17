import express from "express";
import homeController from "../controller/homeController";

let router = express.Router();

let initWebRoutes = (app) => {
    router.get("/", homeController.getHomePage);
    
    router.get("/about",(req , res) => {
        return res.send("hê lố");
    });
    router.get("/crud", homeController.getCRUD);
    router.post("/post-crud", homeController.postCRUD);
    router.get("/all-user", homeController.getCRUDUs);

    return app.use("/" , router);
}

module.exports = initWebRoutes;