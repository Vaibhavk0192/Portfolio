import { db } from "../utils/firebase";
import { Project } from "../types/projectTypes";
import { QueryDocumentSnapshot } from "firebase-admin/firestore";

const ProjectModel = db.collection("projects");

export const addProject = async (project: Project) => {
  const newDoc= await ProjectModel.add(project);
  return newDoc.id;
};

export const getAllProjects = async (): Promise<Project[]> => {
  const snapshot = await ProjectModel.get();
  return snapshot.docs.map((doc: QueryDocumentSnapshot) => ({
    id: doc.id,
    ...doc.data(),
  })) as Project[];
};

export const deleteProject = async (id: string): Promise<void> => {
  await ProjectModel.doc(id).delete();
};
