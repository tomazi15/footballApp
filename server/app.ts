import express, { Express, Request, Response } from "express";
const cors = require("cors");

const app: Express = express();

const clubRoutes = require("./routes/club.routes");

app.use(cors());
app.use(express.json());

app.use("/api/clubs", clubRoutes);

app.get("/", (req: Request, res: Response) => {
  res.send("Football APP");
});

export default app;
