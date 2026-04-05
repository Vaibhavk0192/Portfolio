import express from "express";
import cors from "cors";
import { generalLimiter, apiLimiter } from "./middleware/rateLimiter";
import router from "./routes/projectRoutes";
import educationRouter from "./routes/educationRoutes";
import experienceRouter from "./routes/experienceRoutes";
import skillsRouter from "./routes/skillsRoutes";
import homeRouter from "./routes/homeRoutes";
import contactRouter from "./routes/contactRoutes";
import problemsRouter from "./routes/problemsRoutes";
import filesRouter from "./routes/filesRoutes";

const app = express();

// Apply general rate limiting to all requests
app.use(generalLimiter);

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Server is running");
});

// Apply stricter rate limiting to API routes
app.use("/api/projects", apiLimiter, router);
app.use("/api/education", apiLimiter, educationRouter);
app.use("/api/experience", apiLimiter, experienceRouter);
app.use("/api/skills", apiLimiter, skillsRouter);
app.use("/api/home", apiLimiter, homeRouter);
app.use("/api/contact", apiLimiter, contactRouter);
app.use("/api/problems", apiLimiter, problemsRouter);
app.use("/api/files", apiLimiter, filesRouter);

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));