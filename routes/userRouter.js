import express from "express";
import { loginUser, registerUser ,getAllUsers,blockOrUnblockUser, getUser} from "../controllers/userController.js";

const userRouter = express.Router();

userRouter.post("/",registerUser)

userRouter.post("/login",loginUser)

userRouter.get("/all",getAllUsers)

userRouter.put("/block/:email",blockOrUnblockUser)

userRouter.get("/",getUser)


export default userRouter;