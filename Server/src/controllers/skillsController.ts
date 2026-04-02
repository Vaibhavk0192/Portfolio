import { Request, Response } from "express";
import {
  addSkillSection,
  deleteSkillSection,
  getAllSkillSections,
  updateSkillSection,
} from "../models/skillsModel";

import { Section } from "../types/skillsTypes";

export const createSkillSection = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const data: Section = req.body;
    const docRef = await addSkillSection(data);
    res
      .status(201)
      .json({ id: docRef.id, message: "Skill section added successfully" });
  } catch (error: any) {
    res.status(500).json({
      error: error.message,
    });
  }
};

export const fetchSkillSections = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const sections = await getAllSkillSections();
    res.status(200).json(sections);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

export const removeSkillSection = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params;
    await deleteSkillSection(id);
    res.status(200).json({ message: "Skill section deleted successfully" });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

export const updateSkillSectionHandler = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params;
    const updateData: Partial<Section> = req.body;
    await updateSkillSection(id, updateData);
    res.status(200).json({ message: "Skill section updated successfully" });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};