import { Router } from "express";
import { userRoutes } from "../modules/user/user.routes";
import { authRoutes } from "../modules/auth/auth.routes";
import { skillRoutes } from "../modules/skill/skill.routes";
import { projectsRoutes } from "../modules/project/project.routes";

const router = Router();

const moduleRoutes = [
    {
        path: "/users",
        route: userRoutes,
    },
    {
        path: "/auth",
        route: authRoutes,
    },
    {
        path: "/skills",
        route: skillRoutes,
    },
    {
        path: "/projects",
        route: projectsRoutes
    },
]

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;