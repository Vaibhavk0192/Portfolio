import { Request, Response } from "express";
import { getFiles } from "../models/filesModel";

export const getFilesController = async (req: Request, res: Response) => {
  try {
    const files = await getFiles();
    res.status(200).json(files);
  } catch (error) {
    console.error("Error fetching files:", error);
    res.status(500).json({ error: "Failed to fetch files" });
  }
};