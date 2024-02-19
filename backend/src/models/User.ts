import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    profileImg: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      required: true,
    },
    starred: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: "Website",
    },
    instagram: {
      type: String,
      required: true,
    },
    twitter: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export const User = mongoose.model("User", UserSchema);
