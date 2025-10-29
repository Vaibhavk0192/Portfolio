import express from "express";
import cors from "cors";
import router from "./routes/projectRoutes";

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Server is running");
});

app.use("/api/projects",router)

app.listen(PORT,()=>console.log(`Server is running on port ${PORT}`));