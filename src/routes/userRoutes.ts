import { Router } from "express";
import {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  removeFriend,
} from "../controllers/userController.js";

const router = Router();

// GET all users → **[GET /api/users]**
router.get("/", getUsers);

// GET a single user by ID → **[GET /api/users/:userId]**
router.get("/:userId", getUserById);

// CREATE a new user  **[POST /api/users]**
router.post("/", createUser);

// UPDATE a user by ID  **[PUT /api/users/:userId]**
router.put("/:userId", updateUser);

// DELETE a user by ID **[DELETE /api/users/:userId]**
router.delete("/:userId", deleteUser);

// ADD a friend  **[POST /api/users/:userId/friends/:friendId]**
router.post("/:userId/friends/:friendId", addFriend);

// REMOVE a friend  **[DELETE /api/users/:userId/friends/:friendId]**
router.delete("/:userId/friends/:friendId", removeFriend);

export default router;
