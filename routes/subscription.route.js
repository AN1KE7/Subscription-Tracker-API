import { Router } from "express";
import authorize from "../middleware/auth.middleware.js";
import { createSubscription, getUserSubscriptions } from "../controllers/subscription.controller.js";

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

subscriptionRouter.post("/" , authorize , createSubscription);

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

subscriptionRouter.get("/user/:id" , authorize , getUserSubscriptions );

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