import { Request, Response } from "express";
import { Thought, User } from "../models";

// GET all thoughts **[GET /api/thoughts]**
export const getThoughts = async (req: Request, res: Response) => {
  try {
    const thoughts = await Thought.find();
    res.json(thoughts);
  } catch (error) {
    res.status(500).json(error);
  }
};

// GET a single thought by ID **[GET /api/thoughts/:thoughtId]**
export const getThoughtById = async (req: Request, res: Response) => {
  try {
    const thought = await Thought.findById(req.params.thoughtId);

    if (!thought) return res.status(404).json({ message: "Thought not found" });

    res.json(thought);
  } catch (error) {
    res.status(500).json(error);
  }
};

// CREATE a new thought **[POST /api/thoughts]**
/*
   Example Body:
   {
      "thoughtText": "This is my cool thought!",
      "username": "lernantino",
      "userId": "5edff358a0fcb779aa7b118b"
   }
*/
export const createThought = async (req: Request, res: Response) => {
  try {
    const newThought = await Thought.create(req.body);

    // Add thought to the user who created it
    await User.findByIdAndUpdate(req.body.userId, {
      $push: { thoughts: newThought._id },
    });

    res.json(newThought);
  } catch (error) {
    res.status(400).json(error);
  }
};

//  UPDATE a thought by ID  **[PUT /api/thoughts/:thoughtId]**
export const updateThought = async (req: Request, res: Response) => {
  try {
    const updatedThought = await Thought.findByIdAndUpdate(
      req.params.thoughtId,
      req.body,
      { new: true, runValidators: true }
    );

    if (!updatedThought) return res.status(404).json({ message: "Thought not found" });

    res.json(updatedThought);
  } catch (error) {
    res.status(500).json(error);
  }
};

// DELETE a thought by ID **[DELETE /api/thoughts/:thoughtId]**
export const deleteThought = async (req: Request, res: Response) => {
  try {
    const thought = await Thought.findByIdAndDelete(req.params.thoughtId);

    if (!thought) return res.status(404).json({ message: "Thought not found" });

    res.json({ message: "Thought deleted" });
  } catch (error) {
    res.status(500).json(error);
  }
};

// ADD a reaction to a thought **[POST /api/thoughts/:thoughtId/reactions]**
/*
   Example Body:
   {
      "reactionBody": "I love this thought!",
      "username": "lernantino"
   }
*/
export const addReaction = async (req: Request, res: Response) => {
  try {
    const thought = await Thought.findByIdAndUpdate(
      req.params.thoughtId,
      { $push: { reactions: req.body } },
      { new: true }
    );

    if (!thought) return res.status(404).json({ message: "Thought not found" });

    res.json(thought);
  } catch (error) {
    res.status(500).json(error);
  }
};

// REMOVE a reaction from a thought: **[DELETE /api/thoughts/:thoughtId/reactions/:reactionId]**
export const removeReaction = async (req: Request, res: Response) => {
  try {
    const thought = await Thought.findByIdAndUpdate(
      req.params.thoughtId,
      { $pull: { reactions: { reactionId: req.params.reactionId } } },
      { new: true }
    );

    if (!thought) return res.status(404).json({ message: "Thought not found" });

    res.json(thought);
  } catch (error) {
    res.status(500).json(error);
  }
};
