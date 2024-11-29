import { Router } from "express";
import validateRequest from "../../middlewares/validateRequest";
import { experienceValidationSchema } from "./experience.validation";
import { experienceControllers } from "./experience.controller";

const router = Router();

router.post("/",
    validateRequest(experienceValidationSchema.experiencCreateValidationsSchema),
    experienceControllers.createExperience
)

router.get("/",
    experienceControllers.getAllExperience
)

export const experienceRoutes = router;