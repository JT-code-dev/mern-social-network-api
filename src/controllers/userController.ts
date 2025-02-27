import { Request, Response } from "express";
import { User, Thought } from "../models";

// GET all users  **[GET /api/users]**
export const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await User.find().populate("friends").populate("thoughts");
    res.json(users);
  } catch (error) {
    res.status(500).json(error);
  }
};

// GET a single user by ID: **[GET /api/users/:userId]**
export const getUserById = async (req: Request, res: Response) => {
  try {
    const user = await User.findById(req.params.userId)
      .populate("friends")
      .populate("thoughts");

    if (!user) return res.status(404).json({ message: "User not found" });

    res.json(user);
  } catch (error) {
    res.status(500).json(error);
  }
};

// CREATE a new user: **[POST /api/users]**
/*
   Example to test:
   {
      "username": "lernantino",
      "email": "lernantino@gmail.com"
   }
*/
export const createUser = async (req: Request, res: Response) => {
  try {
    const newUser = await User.create(req.body);
    res.json(newUser);
  } catch (error) {
    res.status(400).json(error);
  }
};

// UPDATE a user by ID: **[PUT /api/users/:userId]**
export const updateUser = async (req: Request, res: Response) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.userId,
      req.body,
      { new: true, runValidators: true }
    );

    if (!updatedUser) return res.status(404).json({ message: "User not found" });

    res.json(updatedUser);
  } catch (error) {
    res.status(500).json(error);
  }
};

// DELETE a USER and their associated thoughts: **[DELETE /api/users/:userId]**
export const deleteUser = async (req: Request, res: Response) => {
  try {
    const user = await User.findByIdAndDelete(req.params.userId);

    if (!user) return res.status(404).json({ message: "User not found" });

    // Remove associated thoughts
    await Thought.deleteMany({ _id: { $in: user.thoughts } });

    res.json({ message: "User and associated thoughts deleted" });
  } catch (error) {
    res.status(500).json(error);
  }
};

// ADD a friend: **[POST /api/users/:userId/friends/:friendId]**
export const addFriend = async (req: Request, res: Response) => {
  try {
    const { userId, friendId } = req.params;

    if (userId === friendId) {
      return res.status(400).json({ message: "You can't be friends with yourself!" });
    }

    const user = await User.findByIdAndUpdate(
      userId,
      { $addToSet: { friends: friendId } },
      { new: true }
    );

    if (!user) return res.status(404).json({ message: "User not found" });

    res.json(user);
  } catch (error) {
    res.status(500).json(error);
  }
};

//  REMOVE a friend: **[DELETE /api/users/:userId/friends/:friendId]**
export const removeFriend = async (req: Request, res: Response) => {
  try {
    const { userId, friendId } = req.params;

    const user = await User.findByIdAndUpdate(
      userId,
      { $pull: { friends: friendId } },
      { new: true }
    );

    if (!user) return res.status(404).json({ message: "User not found" });

    res.json(user);
  } catch (error) {
    res.status(500).json(error);
  }
};


