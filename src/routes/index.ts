import { Router } from "express";
import * as HomeController from "../controllers/homeController";

const router = Router();

router.get("/", HomeController.home);

router.post("/newUser", HomeController.newUser);

router.get("/search", HomeController.search);

export default router;
