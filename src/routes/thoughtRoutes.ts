import { Router } from "express";
import {
  getThoughts,
  getThoughtById,
  createThought,
  updateThought,
  deleteThought,
  addReaction,
  removeReaction,
} from "../controllers/thoughtController";

const router = Router();

//  GET all thoughts  **[GET /api/thoughts]**
router.get("/", getThoughts);

//  GET a single thought by ID  **[GET /api/thoughts/:thoughtId]**
router.get("/:thoughtId", getThoughtById);

//  CREATE a new thought  **[POST /api/thoughts]**
router.post("/", createThought);

// UPDATE a thought by ID  **[PUT /api/thoughts/:thoughtId]**
router.put("/:thoughtId", updateThought);

//  DELETE a thought by ID  **[DELETE /api/thoughts/:thoughtId]**
router.delete("/:thoughtId", deleteThought);

//  ADD a reaction  **[POST /api/thoughts/:thoughtId/reactions]**
router.post("/:thoughtId/reactions", addReaction);

//  REMOVE a reaction  **[DELETE /api/thoughts/:thoughtId/reactions/:reactionId]**
router.delete("/:thoughtId/reactions/:reactionId", removeReaction);

export default router;
