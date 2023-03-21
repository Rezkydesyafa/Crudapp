import express from "express";
import cors from "cors";
import userRoutes from "./routes/userRoutes.js";

const app = express();
const port = 8000;
app.use(cors());
app.use(express.json());
app.use(userRoutes);

app.listen(port, () => console.log(`Server is runing ... in port ${port}`));
