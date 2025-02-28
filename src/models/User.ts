import { Schema, model, Types } from "mongoose";

const UserSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/.+@.+\..+/, "Must match a valid email address"],
    },
    thoughts: [
      {
        type: Types.ObjectId,
        ref: "Thought", // Links to Thought model
      },
    ],
    friends: [
      {
        type: Types.ObjectId,
        ref: "User", // Self-reference to connect users as friends
      },
    ],
  },
  {
    toJSON: { virtuals: true },
    id: false,
  }
);

// Virtual friend count
UserSchema.virtual("friendCount").get(function () {
  return this.friends.length;
});

const User = model("User", UserSchema);
export default User;
