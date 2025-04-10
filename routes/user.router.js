import { Router } from 'express';
import { getUser, getUsers } from '../controllers/user.controller.js';
import authorize from '../middleware/auth.middleware.js';

const userRouter = Router();

userRouter.get("/" , getUsers)

userRouter.get("/:id" , authorize ,getUser)

userRouter.post("/" , function (req,res) {
    res.send({
        body:{title:"Create New User"}
    });
});

userRouter.put("/" , function (req,res) {
    res.send({
        body:{title:"Update User"}
    });
});
userRouter.delete("/:id" , function (req,res) {
    res.send({
        body:{title:"Delete User"}
    });
});

export default userRouter ;