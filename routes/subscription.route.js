import { Router } from "express";

const subscriptionRouter = Router();

subscriptionRouter.get("/" , function (req,res) {
    res.send({
        body:{title:"Get all subscriptions"}
    });
});

subscriptionRouter.get("/:id" , function (req,res) {
    res.send({
        body:{title:"Get subscription details"}
    });
});

subscriptionRouter.post("/" , function (req,res) {
    res.send({
        body:{title:"Create subscription"}
    });
});

subscriptionRouter.put("/:id" , function (req,res) {
    res.send({
        body:{title:"Update subscription"}
    });
});

subscriptionRouter.delete("/:id" , function (req,res) {
    res.send({
        body:{title:"Delete subscription"}
    });
});

subscriptionRouter.get("/user/:id" , function (req,res) {
    res.send({
        body:{title:"Get all user subscriptions"}
    });
});

subscriptionRouter.put("/:id/cancel" , function (req,res) {
    res.send({
        body:{title:"Cancel subscription"}
    });
});

subscriptionRouter.get("/upcoming-renewals" , function (req,res) {
    res.send({
        body:{title:"Get upcoming renewals"}
    });
});

export default subscriptionRouter ;