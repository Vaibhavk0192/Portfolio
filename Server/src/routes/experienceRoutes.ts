import express from "express";
import {
  createExperience,
  fetchExperiences,
  removeExperience,
  updateExperienceHandler,
} from "../controllers/experienceController";

const router = express.Router();

router.post("/", createExperience);
router.get("/", fetchExperiences);
router.delete("/:id", removeExperience);
router.put("/:id", updateExperienceHandler);

export default router;