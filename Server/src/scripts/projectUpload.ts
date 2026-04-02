// import { db } from "../utils/firebase";
// import { Project } from "../types/projectTypes";
// import { projectsData } from "../data/projects";

// const uploadProject = async () => {
//   const batch = db.batch();
//   const ref = db.collection("projects");
//   (projectsData as Project[]).forEach((project) => {
//     const docRef = ref.doc();
//     batch.set(docRef, project);
//   });

//   await batch.commit();
//   console.log("Project uploaded sucessfully!!");
// };

// uploadProject();
