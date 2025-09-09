import prisma from "../../prisma/prisma.js";


class ExerciseModel {
  // Obter todos os exercises

  async findAll() {
    const exercises = await prisma.exercise.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

    //console.log(exercises);

    return exercises;
  }

  // Obter um exercise pelo ID
  async findById(id) {
    const exercise = await prisma.exercise.findUnique({
      where: {
        id: Number(id),
      },
    });

    return exercise;
  }

  // Criar um novo exercise
  async create(
    title,
    description,
    series,
    timeRelax
  ) {
    const newExercise = await prisma.exercise.create({
      data: {
      title,
      description,
      series,
      timeRelax
      },
    });

    return newExercise;
  }

  // Atualizar um exercise
  async update(
    id,
    title,
    description,
    series,
    timeRelax
  ) {
    const exercise = await this.findById(id);

    if (!exercise) {
      return null;
    }

    // Atualize o exercise existente com os novos dados
    const data = {};
    if (title !== undefined) {
      data.title = title;
    }
    if (description !== undefined) {
      data.description = description;
    }
    if (series !== undefined) {
      data.series = series;
    }
    if (timeRelax !== undefined) {
      data.timeRelax = timeRelax
    }
   
    const exerciseUpdated = await prisma.exercise.update({
      where: {
        id: Number(id),
      },
      data,
    });

    return exerciseUpdated;
  }

  // Remover um exercise
  async delete(id) {
    const exercise = await this.findById(id);

    if (!exercise) {
      return null;
    }

    await prisma.exercise.delete({
      where: {
        id: Number(id),
      },
    });

    return true;
  }
}

export default new ExerciseModel();
