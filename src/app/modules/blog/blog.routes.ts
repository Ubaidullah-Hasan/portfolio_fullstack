import { Router } from "express";
import validateRequest from "../../middlewares/validateRequest";
import { blogValidationSchema } from "./blog.validation";
import { BlogControllers } from "./blog.controller";

const router = Router();

router.post("/",
    validateRequest(blogValidationSchema.blogCreateValidationSchema),
    BlogControllers.createBlog
)

router.get("/",
    BlogControllers.getAllBlogs
)

export const blogRoutes = router;