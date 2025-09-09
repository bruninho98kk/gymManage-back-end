import ExerciseModel from "../models/exerciseModel.js";

class ExerciseController {
  // GET /api/exercises
  async getAllExercise(req, res) {
    try {
      const exercises = await ExerciseModel.findAll();
      res.json(exercises);
    } catch (error) {
      console.error("Erro ao buscar exercises:", error);
      res.status(500).json({ error: "Erro ao buscar exercise" });
    }
  }

  // GET /api/exercises/:id
  async getExerciseById(req, res) {
    try {
      const { id } = req.params;

      const exercise = await ExerciseModel.findById(id);

      if (!exercise) {
        return res.status(404).json({ error: "Exercise não encontrado" });
      }

      res.json(exercise);
    } catch (error) {
      console.error("Erro ao buscar exercise:", error);
      res.status(500).json({ error: "Erro ao buscar exercise" });
    }
  }

  // POST /api/exercises
  async createExercise(req, res) {
    try {
      // Validação básica
      const {
        title,
        description,
        series,
        timeRelax
      } = req.body;

      // Verifica se o título do exercise foi fornecido

      if (
        !title ||
        !description ||
        !series ||
        !timeRelax
      ) {
        return res
          .status(400)
          .json({ error: "Todos os campos são obrigatórios" });
      }

      // Criar o novo exercise
      const newExercise = await ExerciseModel.create(
        
        title,
        description,
        series,
        timeRelax
      );

      if (!newExercise) {
        return res.status(400).json({ error: "Erro ao criar exercise" });
      }

      res.status(201).json(newExercise);
    } catch (error) {
      console.error("Erro ao criar exercise:", error);
      res.status(500).json({ error: "Erro ao criar exercise" });
    }
  }

  // PUT /api/exercises/:id
  async updateExercise(req, res) {
    try {
      const { id } = req.params;
      const {
        title,
        description,
        series,
        timeRelax
      } = req.body;

      // Atualizar o exercise
      const updatedExercise = await ExerciseModel.update(
        id,
        title,
        description,
        series,
        timeRelax
      );

      if (!updatedExercise) {
        return res.status(404).json({ error: "Exercise não encontrado" });
      }

      res.json(updatedExercise);
    } catch (error) {
      console.error("Erro ao atualizar exercise:", error);
      res.status(500).json({ error: "Erro ao atualizar exercise" });
    }
  }

  // DELETE /api/exercises/:id
  async deleteExercise(req, res) {
    try {
      const { id } = req.params;

      // Remover o exercise
      const result = await ExerciseModel.delete(id);

      if (!result) {
        return res.status(404).json({ error: "Exercise não encontrado" });
      }

      res.status(200).json({ message: "Exercise removido com sucesso" });

      res.status(204).end(); // Resposta sem conteúdo
    } catch (error) {
      console.error("Erro ao remover exercise:", error);
      res.status(500).json({ error: "Erro ao remover exercise" });
    }
  }
}

export default new ExerciseController();
