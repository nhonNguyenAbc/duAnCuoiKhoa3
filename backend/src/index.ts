import express, { Request, Response } from "express";
import cors from "cors";
import "dotenv/config";
import { log } from "console";
import mongoose from "mongoose";

mongoose.connect(process.env.MONGODB_CONNECTION_STRING as string).then(() => {
  log("Connected to database!");
});

const Port = 1113;
const app = express();
app.use(express.json());
app.use(cors());

app.get("/test", async (req: Request, res: Response) => {
  res.json({ message: "Hello!" });
});

app.listen(Port, () => {
  log("server started on localhost:" + Port);
});
