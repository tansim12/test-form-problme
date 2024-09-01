import express, { Application, Request, Response } from "express";
import globalErrorHandler from "../src/app/Error-Handle/globalErrorHandle";
import normalMiddleware from "../src/app/middleware/normalMiddleware";
import { route } from "./app/Module/route";

const app: Application = express();
normalMiddleware(app);

app.use("/test", route);
// app.use("/api/v1/users", userRoute);
// app.use("/api/v1/academic-semester", academicSemester);
// app.use("/api/v1/faculty", FacultyRoutes);
// app.use("/api/v1/academic-faculty", academicFacultyRoute);
// app.use("/api/v1/academic-department", academicDepartmentRoute);
// app.use("/api/v1/courses", courseRoute);
// app.use("/api/v1/semester-registrations", semesterRegistrationRoutes);
// app.use("/api/v1/offered-course", offeredCourseRoutes);
// app.use("/api/v1/auth", authRoute);

app.get("/", (req: Request, res: Response) => {
  res.send("Level-2 setup test ");
});

app.all("*", (req: Request, res: Response, next) => {
  const error = new Error(`Can't find ${req.url} on the server`);
  next(error);
});

// global error handle
app.use(globalErrorHandler);

export default app;
