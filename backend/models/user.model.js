import mongoose, { Schema } from "mongoose";

const userSchema = Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
    enmm: ["student", "faculty", "admin"],
  },
  profileId: {
    type: Schema.Types.ObjectId,
    refPath: "role",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export const User = mongoose.model("User", userSchema);
