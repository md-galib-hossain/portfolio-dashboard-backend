import express from "express";
import { UserControllers } from "./user.controller";
import { UserValidation } from "./user.validation";
import validateRequest from "../../middlewares/validateRequest";

const router = express.Router()

router.post('/',validateRequest(UserValidation.userSchema),UserControllers.createUser)
router.get('/',UserControllers.getUser)
router.patch('/',UserControllers.updateUser)

export const UserRoutes = router