import express, { Express, NextFunction, Request, Response } from "express";
import router from "./routes";
import cors from "cors";
import config from "./config";
import notFoundRoute from "./middlewares/notFoundRoute";
import { StatusCodes } from "http-status-codes";
import globalErrorHandler from "./middlewares/globalErrorHandler";

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

// global error handler
app.use(globalErrorHandler);

// nor found route
app.use(notFoundRoute);





export default app;