import { db } from "../utils/firebase";
import { ExperienceInterface } from "../types/experienceTypes";
import { QueryDocumentSnapshot } from "firebase-admin/firestore";

const ExperienceModel = db.collection("experience");

export const addExperience = async (experience: ExperienceInterface) => {
  const newDoc = await ExperienceModel.add(experience);
  return newDoc;
};

export const getAllExperience = async (): Promise<ExperienceInterface[]> => {
  const snapshot = await ExperienceModel.get();
  return snapshot.docs.map((doc: QueryDocumentSnapshot) => ({
    id: doc.id,
    ...doc.data(),
  })) as ExperienceInterface[];
};

export const deleteExperience = async (id: string): Promise<void> => {
  await ExperienceModel.doc(id).delete();
};

export const updateExperience = async (id: string, updateData: Partial<ExperienceInterface>): Promise<void> => {
  await ExperienceModel.doc(id).update(updateData);
};