import { Router } from "express";
import validateRequest from "../../middlewares/validateRequest";
import { skillValidationSchema } from "./skill.validation";
import { skillControllers } from "./skill.controller";

const router = Router();

router.post("/",
    validateRequest(skillValidationSchema.skillCreateValidation),
    skillControllers.createSkill
)

router.get("/",
    skillControllers.getAllSkills
)

export const skillRoutes = router;