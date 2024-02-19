import express from "express";
import dotenv from "dotenv";
import { connectDb } from "./db/connectDb";
import { router as userroutes } from "./routes/userRoutes";

const app = express();
dotenv.config();

// middleware
app.use(express.json());

// routes
app.use("/api/v1/user", userroutes);

// connecting to db
connectDb();

app.get("/", (req, res) => {
  res.send("<h1>Hellow from Abhay</h1>");
});

app.listen(process.env.PORT, () => {
  console.log(`Server listening on port ${process.env.PORT}`);
});
