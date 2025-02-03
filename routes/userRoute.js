import express from "express"
import userController from "../controllers/userController.js";

const { loginUser, registerUser } = userController;



const userRouter = express.Router()


userRouter.post("/register", registerUser)
userRouter.post("/login",loginUser)

export default userRouter;