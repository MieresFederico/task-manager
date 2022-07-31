import { InferSchemaType, model, Schema } from "mongoose";

const taskSchema = new Schema({
  title: String,
  description: String,
});

export type ITask = InferSchemaType<typeof taskSchema>;

const Note = model<ITask>("Note", taskSchema);

export default Note;
