import { FilterQuery, UpdateQuery, QueryOptions } from "mongoose";
import Task, { ITask } from "../models/task";

export const createTask = async (newTask: ITask): Promise<ITask> => {
  const createdTask = await Task.create(newTask);

  return createdTask;
};

export const findTasks = async (
  query: FilterQuery<ITask> = {},
  options: QueryOptions = { lean: true }
): Promise<ITask[]> => {
  const tasks = await Task.find(query, {}, options);

  return tasks;
};

export const findAndUpdateProduct = async (
  query: FilterQuery<ITask>,
  update: UpdateQuery<ITask>,
  options: QueryOptions = { lean: true }
): Promise<ITask | null> => {
  const updatedTask = await Task.findOneAndUpdate(query, update, options);

  return updatedTask;
};

export const deleteProduct = async (
  query: FilterQuery<ITask>
): Promise<boolean> => {
  const response = await Task.deleteOne(query);

  return !!response.deletedCount;
};
