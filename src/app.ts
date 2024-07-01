import express, { Application, Request, Response, NextFunction } from "express";
import cors from "cors";


import router from "./app/routes";
import notFound from "./app/middlewares/notFound";
import globalErrorHandler from "./app/middlewares/globalErrorHandler";
const app: Application = express();

//parsers
app.use(express.json());
app.use(cors());

app.use("/api/v1", router);

const test = async (req: Request, res: Response) => {
  // Promise.reject()
};
app.get("/test", test);

app.get("/", (req: Request, res: Response) => {
  res.status(200).json({
    status: "success",
    message: "Welcome to project root",
  });
});
//not found route
app.use(notFound);

//error handler
app.use(globalErrorHandler);
export default app;
