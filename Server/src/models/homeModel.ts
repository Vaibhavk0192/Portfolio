import { db } from "../utils/firebase";
import { HomeInterface } from "../types/homeTypes";
import { QueryDocumentSnapshot } from "firebase-admin/firestore";

const HomeModel = db.collection("home");

export const addHome = async (home: HomeInterface) => {
  const newDoc = await HomeModel.add(home);
  return newDoc;
};

export const getHome = async (): Promise<HomeInterface | null> => {
  const snapshot = await HomeModel.limit(1).get();
  if (snapshot.empty) return null;
  const doc = snapshot.docs[0];
  return { id: doc.id, ...doc.data() } as HomeInterface & { id: string };
};

export const updateHome = async (id: string, updateData: Partial<HomeInterface>): Promise<void> => {
  await HomeModel.doc(id).update(updateData);
};