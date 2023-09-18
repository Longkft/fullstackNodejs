import express from "express";
import loginController from "../controller/loginController";

let router = express.Router();

let initLoginRouter = (app) => {
    router.get("/login", loginController.getUserPass);

    return app.use("/", router);
}

module.exports = initLoginRouter;