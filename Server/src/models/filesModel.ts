import { db } from "../utils/firebase";
import { FolderComponentProps } from "../types/filesTypes";
import { QueryDocumentSnapshot } from "firebase-admin/firestore";

const FilesModel = db.collection("files");

export const addFile = async (file: FolderComponentProps) => {
  const newDoc = await FilesModel.add(file);
  return newDoc;
};

export const getFiles = async (): Promise<FolderComponentProps[]> => {
  const snapshot = await FilesModel.get();
  return snapshot.docs.map((doc: QueryDocumentSnapshot) => ({
    id: doc.id,
    ...doc.data(),
  })) as FolderComponentProps[];
};

export const updateFile = async (id: string, updateData: Partial<FolderComponentProps>): Promise<void> => {
  await FilesModel.doc(id).update(updateData);
};

export const deleteFile = async (id: string): Promise<void> => {
  await FilesModel.doc(id).delete();
};