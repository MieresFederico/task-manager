import { Request, Response } from "express";
import { taskService } from "../services";

export const createTask = async (req: Request, res: Response) => {
  const createdTask = await taskService.createTask(req.body);

  return res.status(201).json(createdTask);
};

export const getTasks = async (req: Request, res: Response) => {
  const tasks = await taskService.findTasks();

  return res.json(tasks);
};

export const getTaskById = async (req: Request, res: Response) => {
  const tasks = await taskService.findTasks({ _id: req.params.id });

  if (!tasks.length) {
    return res.sendStatus(404);
  }

  return res.json(tasks[0]);
};

export const updateTaskById = async (req: Request, res: Response) => {
  const updatedTask = await taskService.findAndUpdateProduct(
    { _id: req.params.id },
    req.body,
    {
      new: true,
    }
  );

  if (!updatedTask) {
    return res.sendStatus(404);
  }

  return res.json(updatedTask);
};

export const deleteTaskById = async (req: Request, res: Response) => {
  const deletedTask = await taskService.deleteProduct({ _id: req.params.id });

  if (!deletedTask) {
    return res.sendStatus(404);
  }

  return res.sendStatus(204);
};
