import express from "express";

import validateRequest from "../../middlewares/validateRequest";
import { ProjectValidation } from "./project.validation";
import { ProjectControllers } from "./project.controller";

const router = express.Router()

router.post('/',validateRequest(ProjectValidation.ProjectCreateSchema),ProjectControllers.createProject)
router.get('/',ProjectControllers.getProjects)
router.get('/:id',ProjectControllers.getSingleProject)
router.patch('/:id',ProjectControllers.updateSingleProject)
// router.patch('/',UserControllers.updateUser)

export const ProjectRoutes = router