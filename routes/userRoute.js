import express from "express"
import { showUsers,addUserPage,addUser,editUserPage,updateUser,deleteUser } from "../controllers/userController.js";
const userRouter = express.Router()

userRouter.get("/",showUsers)
userRouter.get("/add",addUserPage)
userRouter.post("/add",addUser)
userRouter.get("/edit/:id",editUserPage)
userRouter.post("/edit/:id",updateUser)
userRouter.post("/delete/:id",deleteUser)

export {userRouter}