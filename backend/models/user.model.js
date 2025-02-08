import mongoose, { Schema } from "mongoose";

const userSchema = Schema({
  username: {
    type: String,
    require: true,
    unique: true,
  },
});

export const User = mongoose.model("User", userSchema);
