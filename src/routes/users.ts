import { Router } from "express";
import * as UserController from "../controllers/userController";

const router = Router();

router.get("/api", UserController.users);

router.get("/user/:id", UserController.userId);

router.get("/user/search/:name", UserController.userName);

router.get("/user/:id/edit", UserController.editLink);

router.get("/user/:id/delete", UserController.deleteUser);

router.post("/user/update", UserController.updateUser);

export default router;
