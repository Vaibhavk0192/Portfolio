// import { db } from "../utils/firebase";
// import { Section } from "../types/skillsTypes";
// import { skillSections } from "../data/skills";

// const uploadSkills = async () => {
//   const batch = db.batch();
//   const ref = db.collection("skills");
//   (skillSections as Section[]).forEach((section) => {
//     const docRef = ref.doc();
//     batch.set(docRef, section);
//   });

//   await batch.commit();
//   console.log("Skills uploaded successfully!!");
// };

// uploadSkills();