import { Router } from "express";
import validateRequest from "../../middlewares/validateRequest";
import { projectValidatio } from "./project.validation";
import { projectsControllers } from "./project.controller";

const router = Router();

router.post("/",
    validateRequest(projectValidatio.projectCreateSchema),
    projectsControllers.createProject
)

router.get("/",
    projectsControllers.getAllProjects
)

export const projectsRoutes = router;