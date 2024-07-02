import express from "express";
import { UserControllers } from "./user.controller";
import validateRequest from "../../middlewares/validateRequest";
import { UserValidation } from "./user.validation";

const router = express.Router()

router.post('/',validateRequest(UserValidation.UserCreateSchema),UserControllers.createUser)
router.get('/',UserControllers.getUser)
router.patch('/:id',validateRequest(UserValidation.UserUpdateSchema),UserControllers.updateUser)

export const UserRoutes = router