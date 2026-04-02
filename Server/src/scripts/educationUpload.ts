// import { db } from "../utils/firebase";
// import { EducationInterface } from "../types/educationTypes";
// import { EducationData } from "../data/education";

// const uploadEducation = async () => {
//   const batch = db.batch();
//   const ref = db.collection("education");
//   (EducationData as EducationInterface[]).forEach((education) => {
//     const docRef = ref.doc();
//     batch.set(docRef, education);
//   });

//   await batch.commit();
//   console.log("Education uploaded successfully!!");
// };

// uploadEducation();