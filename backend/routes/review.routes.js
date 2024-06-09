import { Router } from "express";
import {
  createReviewController,
  getReviewsController,
} from "./../controllers/review.controller.js";

const router = Router();

router.get("/:id", getReviewsController);
router.post("/:id", createReviewController);

export default router;
