import { db } from "../utils/firebase";
import { Section } from "../types/skillsTypes";
import { QueryDocumentSnapshot } from "firebase-admin/firestore";

const SkillsModel = db.collection("skills");

export const addSkillSection = async (section: Section) => {
  const newDoc = await SkillsModel.add(section);
  return newDoc;
};

export const getAllSkillSections = async (): Promise<Section[]> => {
  const snapshot = await SkillsModel.get();
  return snapshot.docs.map((doc: QueryDocumentSnapshot) => ({
    id: doc.id,
    ...doc.data(),
  })) as Section[];
};

export const deleteSkillSection = async (id: string): Promise<void> => {
  await SkillsModel.doc(id).delete();
};

export const updateSkillSection = async (id: string, updateData: Partial<Section>): Promise<void> => {
  await SkillsModel.doc(id).update(updateData);
};