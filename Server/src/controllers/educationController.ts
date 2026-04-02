import { Request, Response } from "express";
import {
  addEducation,
  deleteEducation,
  getAllEducation,
} from "../models/educationModel";

import { EducationInterface } from "../types/educationTypes";

export const createEducation = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const data: EducationInterface = req.body;
    const docRef = await addEducation(data);
    res
      .status(201)
      .json({ id: docRef.id, message: "Education added sucessfully" });
  } catch (error: any) {
    res.status(500).json({
      error: error.message,
    });
  }
};

export const fetchEducations = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const educations = await getAllEducation();
    res.status(200).json(educations);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};
