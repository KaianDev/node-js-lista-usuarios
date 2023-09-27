import { Router } from "express";
import * as UserController from "../controllers/userController";

const router = Router();

router.get("/user", UserController.user);

router.get("/user/:id", UserController.userId);

router.get("/user/search/:name", UserController.userName);

export default router;
