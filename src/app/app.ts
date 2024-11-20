import express, { Express, Request, Response } from "express";
import router from "./routes";
import cors from "cors";
import config from "./config";

const app: Express = express();

app.use(
    cors({
        credentials: true,
        origin: [config.client_url as string],
    })
)
app.use(express.json());

// routes
app.use("/api/v1", router);

app.get("/", (req: Request, res: Response) => {
    res.send("Welcome to my portfolio site!🫠");
});



export default app;