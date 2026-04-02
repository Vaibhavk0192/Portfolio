import express from "express";
import { createHome, fetchHome, updateHomeHandler } from "../controllers/homeController";

const router = express.Router();

router.post("/", createHome);
router.get("/", fetchHome);
router.put("/:id", updateHomeHandler);

export default router;