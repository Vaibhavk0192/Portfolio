import express from "express";
import { createContact, fetchContact, updateContactHandler } from "../controllers/contactController";

const router = express.Router();

router.post("/", createContact);
router.get("/", fetchContact);
router.put("/:id", updateContactHandler);

export default router;