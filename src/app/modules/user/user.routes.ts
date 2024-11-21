import { Router } from "express";
import { userController } from "./user.controller";
import validateRequest from "../../middlewares/validateRequest";
import { UserValidation } from "./user.validation";

const router = Router();

router.post(
    "/register",
    validateRequest(UserValidation.createUserValidationSchema),
    userController.userRegister
);

export const userRoutes = router;