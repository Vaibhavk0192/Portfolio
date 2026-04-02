import { Request, Response } from "express";
import {
  addExperience,
  deleteExperience,
  getAllExperience,
  updateExperience,
} from "../models/experienceModel";

import { ExperienceInterface } from "../types/experienceTypes";

export const createExperience = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const data: ExperienceInterface = req.body;
    const docRef = await addExperience(data);
    res
      .status(201)
      .json({ id: docRef.id, message: "Experience added successfully" });
  } catch (error: any) {
    res.status(500).json({
      error: error.message,
    });
  }
};

export const fetchExperiences = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const experiences = await getAllExperience();
    res.status(200).json(experiences);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

export const removeExperience = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params;
    await deleteExperience(id);
    res.status(200).json({ message: "Experience deleted successfully" });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

export const updateExperienceHandler = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params;
    const updateData: Partial<ExperienceInterface> = req.body;
    await updateExperience(id, updateData);
    res.status(200).json({ message: "Experience updated successfully" });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};