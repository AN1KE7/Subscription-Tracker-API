import express from "express";
import { PORT } from './config/env.js' ;
import userRouter from "./routes/user.router.js";
import authRouter from "./routes/auth.routes.js";
import subscriptionRouter from "./routes/subscription.route.js";
import connectToDatabase from "./database/mongodb.js";
import errorMiddleware from "./middleware/error.middleware.js";
import cookieParser from "cookie-parser";
import arcjetMiddleware from "./middleware/arcjet.middleware.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(arcjetMiddleware);

// Routes
app.use("/api/auth" , authRouter);
app.use("/api/users" , userRouter);
app.use("/api/subscriptions" , subscriptionRouter);

app.use(errorMiddleware);


app.get("/" , function(req,res){
    res.send({body:"Welcome to Subscription Tracker API"});
});

app.listen(PORT , ()=>{
    console.log(`Server running on http://localhost:${PORT} ` );

    connectToDatabase() ;
});

export default app ;