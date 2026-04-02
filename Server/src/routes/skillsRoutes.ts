import express from "express";
import {
  createSkillSection,
  fetchSkillSections,
  removeSkillSection,
  updateSkillSectionHandler,
} from "../controllers/skillsController";

const router = express.Router();

router.post("/", createSkillSection);
router.get("/", fetchSkillSections);
router.delete("/:id", removeSkillSection);
router.put("/:id", updateSkillSectionHandler);

export default router;