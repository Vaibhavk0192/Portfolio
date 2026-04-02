import { Request, Response } from "express";
import { addHome, getHome, updateHome } from "../models/homeModel";
import { HomeInterface } from "../types/homeTypes";

export const createHome = async (req: Request, res: Response): Promise<void> => {
  try {
    const data: HomeInterface = req.body;
    const docRef = await addHome(data);
    res.status(201).json({ id: docRef.id, message: "Home data added successfully" });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

export const fetchHome = async (req: Request, res: Response): Promise<void> => {
  try {
    const home = await getHome();
    if (!home) {
      res.status(404).json({ message: "Home data not found" });
      return;
    }
    res.status(200).json(home);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

export const updateHomeHandler = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const updateData: Partial<HomeInterface> = req.body;
    await updateHome(id, updateData);
    res.status(200).json({ message: "Home data updated successfully" });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};