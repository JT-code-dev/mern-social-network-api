import { Schema, model, Types } from "mongoose";

// Reaction Schema (Embedded inside Thought)
const ReactionSchema = new Schema(
  {
    reactionId: {
      type: Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    reactionBody: {
      type: String,
      required: true,
      maxlength: 280,
    },
    username: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (timestamp: Date) => timestamp.toLocaleString(),
    },
  },
  {
    toJSON: { getters: true },
  }
);

//  Thought Schema
const ThoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 500,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (timestamp: Date) => timestamp.toLocaleString(),
    },
    username: {
      type: String,
      required: true,
    },
    reactions: [ReactionSchema], //  Embed reactions inside Thought
  },
  {
    toJSON: { virtuals: true, getters: true },
    id: false,
  }
);

// Virtual property to count reactions
ThoughtSchema.virtual("reactionCount").get(function () {
  return this.reactions.length;
});

const Thought = model("Thought", ThoughtSchema);
export default Thought;
