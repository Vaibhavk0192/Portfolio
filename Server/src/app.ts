import express from "express";
import cors from "cors";
import router from "./routes/projectRoutes";
import educationRouter from "./routes/educationRoutes";
import experienceRouter from "./routes/experienceRoutes";
import skillsRouter from "./routes/skillsRoutes";
import homeRouter from "./routes/homeRoutes";
import contactRouter from "./routes/contactRoutes";
import problemsRouter from "./routes/problemsRoutes";
import filesRouter from "./routes/filesRoutes";

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Server is running");
});

app.use("/api/projects",router)
app.use("/api/education", educationRouter)
app.use("/api/experience", experienceRouter)
app.use("/api/skills", skillsRouter)
app.use("/api/home", homeRouter)
app.use("/api/contact", contactRouter)
app.use("/api/problems", problemsRouter)
app.use("/api/files", filesRouter)

app.listen(PORT,()=>console.log(`Server is running on port ${PORT}`));