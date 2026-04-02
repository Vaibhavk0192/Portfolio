import { Request, Response } from "express";
import { addContact, getContact, updateContact } from "../models/contactModel";
import { ContactInterface } from "../types/contactTypes";

export const createContact = async (req: Request, res: Response): Promise<void> => {
  try {
    const data: ContactInterface = req.body;
    const docRef = await addContact(data);
    res.status(201).json({ id: docRef.id, message: "Contact data added successfully" });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

export const fetchContact = async (req: Request, res: Response): Promise<void> => {
  try {
    const contact = await getContact();
    if (!contact) {
      res.status(404).json({ message: "Contact data not found" });
      return;
    }
    res.status(200).json(contact);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

export const updateContactHandler = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const updateData: Partial<ContactInterface> = req.body;
    await updateContact(id, updateData);
    res.status(200).json({ message: "Contact data updated successfully" });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};