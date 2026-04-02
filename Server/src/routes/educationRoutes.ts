import express from "express";
import {
  createEducation,
  fetchEducations,
} from "../controllers/educationController";

const router = express.Router();

router.post("/", createEducation);
router.get("/", fetchEducations);

export default router;