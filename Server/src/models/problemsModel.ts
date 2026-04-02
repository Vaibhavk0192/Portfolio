import { db } from "../utils/firebase";
import { Problem } from "../types/problemsTypes";
import { QueryDocumentSnapshot } from "firebase-admin/firestore";

const ProblemsModel = db.collection("problems");

export const addProblem = async (problem: Problem) => {
  const newDoc = await ProblemsModel.add(problem);
  return newDoc;
};

export const getProblems = async (): Promise<Problem[]> => {
  const snapshot = await ProblemsModel.get();
  return snapshot.docs.map((doc: QueryDocumentSnapshot) => ({
    id: doc.id,
    ...doc.data(),
  })) as Problem[];
};

export const updateProblem = async (id: string, updateData: Partial<Problem>): Promise<void> => {
  await ProblemsModel.doc(id).update(updateData);
};

export const deleteProblem = async (id: string): Promise<void> => {
  await ProblemsModel.doc(id).delete();
};