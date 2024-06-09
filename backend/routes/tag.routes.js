import { Router } from "express";
import {
  getTagsController,
  createTagController,
} from "../controllers/tag.controller.js";

const router = Router();

router.get("/", getTagsController);
router.post("/", createTagController);

export default router;
