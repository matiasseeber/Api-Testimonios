import express from "express";
import * as controller from "../controllers/controllerTestimoniosApi.js"
const router = express.Router();

router.route("/")
    .get(controller.getAll)

router.route("/:id")
    .delete(controller.deleteById)
    .patch(controller.patchById) //activar (publicar)

export default router;