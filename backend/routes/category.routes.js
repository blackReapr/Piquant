import { Router } from "express";
import {
  createCategoryController,
  deleteCategory,
  getCategoriesController,
} from "../controllers/category.controller.js";

const router = Router();

router.get("/", getCategoriesController);
router.post("/", createCategoryController);
router.delete("/:id", deleteCategory);

export default router;
