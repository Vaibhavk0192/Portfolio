import { Request, Response } from "express";
import {
  addProject,
  getAllProjects,
  deleteProject,
} from "../models/projectModel";
import { Project } from "../types/projectTypes";

export const createProject = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const data: Project = req.body;
    const docRef = await addProject(data);
    res
      .status(201)
      .json({ id: docRef.id, message: "Project added successfully" });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

export const fetchProjects = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const projects = await getAllProjects();
    res.status(200).json(projects);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

export const removeProject = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    await deleteProject(req.params.id);
    res.status(200).json({ message: "Project deleted sucessfully" });
  } catch (error:any) {
    res.status(500).json({ error: error.message });
  }
};
