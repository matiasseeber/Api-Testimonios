import express from "express";
import * as controller from "../controllers/controllerWebPage.js";
const router = express.Router();

router.route("/")
    .get(controller.getIndex)

router.route("/form.ejs")
    .get(controller.getForm)
    .post(controller.addTestimony)

export default router;