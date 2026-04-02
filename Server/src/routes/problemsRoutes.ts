import express from "express";
import { getProblemsController } from "../controllers/problemsController";

const router = express.Router();

router.get("/", getProblemsController);

export default router;