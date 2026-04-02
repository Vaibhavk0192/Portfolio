import { db } from "../utils/firebase";
import { EducationInterface } from "../types/educationTypes";
import { QueryDocumentSnapshot } from "firebase-admin/firestore";

const EducationModel = db.collection("education");

export const addEducation = async (education: EducationInterface) => {
  const newDoc = await EducationModel.add(education);
  return newDoc;
};

export const getAllEducation = async (): Promise<EducationInterface[]> => {
  const snapshot = await EducationModel.get();
  return snapshot.docs.map((doc: QueryDocumentSnapshot) => ({
    id: doc.id,
    ...(doc.data() as Omit<EducationInterface, 'id'>),
  }));
};

export const deleteEducation = async (id: string): Promise<void> => {
  await EducationModel.doc(id).delete();
};

export const upadteEducation=async (id:string,upadteData:Partial<EducationInterface>):Promise<void>=>{
    await EducationModel.doc(id).update(upadteData);
}