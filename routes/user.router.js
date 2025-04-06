import { Router } from 'express';

const userRouter = Router();

userRouter.get("/" , function (req,res) {
    res.send({
        body:{title:"Get All Users"}
    });
});

userRouter.get("/:id" , function (req,res) {
    res.send({
        body:{title:"Get User Details"}
    });
});

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