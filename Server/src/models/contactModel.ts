import { db } from "../utils/firebase";
import { ContactInterface } from "../types/contactTypes";
import { QueryDocumentSnapshot } from "firebase-admin/firestore";

const ContactModel = db.collection("contact");

export const addContact = async (contact: ContactInterface) => {
  const newDoc = await ContactModel.add(contact);
  return newDoc;
};

export const getContact = async (): Promise<ContactInterface | null> => {
  const snapshot = await ContactModel.limit(1).get();
  if (snapshot.empty) return null;
  const doc = snapshot.docs[0];
  return { id: doc.id, ...doc.data() } as ContactInterface & { id: string };
};

export const updateContact = async (id: string, updateData: Partial<ContactInterface>): Promise<void> => {
  await ContactModel.doc(id).update(updateData);
};