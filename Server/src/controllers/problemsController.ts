import { Request, Response } from "express";
import { getProblems } from "../models/problemsModel";

export const getProblemsController = async (req: Request, res: Response) => {
  try {
    const problems = await getProblems();
    res.status(200).json(problems);
  } catch (error) {
    console.error("Error fetching problems:", error);
    res.status(500).json({ error: "Failed to fetch problems" });
  }
};