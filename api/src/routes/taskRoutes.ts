import { Router } from "express";
import { taskController } from "../controllers";

const router = Router();

router.post("", taskController.createTask);
router.get("/", taskController.getTasks);
router.get("/:id", taskController.getTaskById);
router.put("/:id", taskController.updateTaskById);
router.delete("/:id", taskController.deleteTaskById);

export default router;
