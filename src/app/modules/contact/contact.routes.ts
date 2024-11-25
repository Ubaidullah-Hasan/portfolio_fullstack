
import { Router } from "express";
import validateRequest from "../../middlewares/validateRequest";
import { contactValidationSchema } from "./contact.validation";
import { contactControllers } from "./contact.controller";

const router = Router();
router.post(
    "/",
    validateRequest(contactValidationSchema),
    contactControllers.sendMessage
);

export const contactRoutes = router; 