import express, { Express, Request, Response } from "express";

const app: Express = express();

app.get("/", (req: Request, res: Response) => {
    res.send("Welcome to my portfolio site!🫠");
});



export default app;