import express from "express";
import { getFilesController } from "../controllers/filesController";

const router = express.Router();

router.get("/", getFilesController);

export default router;