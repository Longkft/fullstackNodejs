import express from "express";
import homeController from "../controller/homeController";
import userController from "../controller/userController";

let router = express.Router();

let initWebRoutes = (app) => {
    router.get("/", homeController.getHomePage);

    router.get("/about", (req, res) => {
        return res.send("hê lố");
    });
    router.get("/crud", homeController.getCRUD);
    router.post("/post-crud", homeController.postCRUD);
    router.get("/all-user", homeController.getCRUDUs);
    router.get("/edit-user/:id", homeController.editUserPage);
    router.post("/update-user/:id", homeController.updateCRUDUser);
    router.post("/delete-user/:id", homeController.deleteUser);

    router.get("/api/login", userController.handleLogin);

    return app.use("/", router);
}

module.exports = initWebRoutes;