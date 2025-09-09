import express from "express";


import exercisesRouter from "./exerciseRoutes.js";


const router = express.Router();

router.use("/exercises", exercisesRouter);


export default router;
