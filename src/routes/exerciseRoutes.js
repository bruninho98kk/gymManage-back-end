import express from "express";
import ExerciseController from "../controllers/exerciseController.js";

const exercisesRouter = express.Router();

// Rotas de Exercises
// GET /api/exercises - Listar todos os exercises
exercisesRouter.get("/", ExerciseController.getAllExercise);

// GET /api/exercises/:id - Obter um exercise pelo ID
exercisesRouter.get("/:id", ExerciseController.getExerciseById);

// POST /api/exercises - Criar um novo exercise
exercisesRouter.post("/", ExerciseController.createExercise);

// PUT /api/exercises/:id - Atualizar um exercise
exercisesRouter.put("/:id", ExerciseController.updateExercise);

// DELETE /api/exercises/:id - Remover um exercise
exercisesRouter.delete("/:id", ExerciseController.deleteExercise);

export default exercisesRouter;
