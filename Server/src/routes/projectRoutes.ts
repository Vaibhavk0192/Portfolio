import express from "express";
import {
  createProject,
  fetchProjects,
  removeProject,
} from "../controllers/projectController";

const router = express.Router();

router.post("/", createProject);
router.get("/", fetchProjects);
router.delete("/:id", removeProject);

export default router;
