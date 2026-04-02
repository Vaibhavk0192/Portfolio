// import { db } from "../utils/firebase";
// import { ExperienceInterface } from "../types/experienceTypes";
// import { experiences } from "../data/experience";

// const uploadExperience = async () => {
//   const batch = db.batch();
//   const ref = db.collection("experience");
//   (experiences as ExperienceInterface[]).forEach((experience) => {
//     const docRef = ref.doc();
//     batch.set(docRef, experience);
//   });

//   await batch.commit();
//   console.log("Experience uploaded successfully!!");
// };

// uploadExperience();