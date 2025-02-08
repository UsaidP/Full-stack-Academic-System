import mongoose, { Schema } from "mongoose";

const facultySchema = new Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      unique: true,
    },
    employeeId: {
      type: String,
      required: true,
      unique: true,
    },
    firtsName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    department: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Department",
      required: true,
    },
    officeHours: {
      type: String,
    },
    contact: {
      type: String,
      required: true,
      personalPhone: String,
      officePhone: String,
    },
    coursesTeaching: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Courses",
    },
  },
  {
    timestamps: true,
  }
);

const Faculty = mongoose.Schema("Faculty", facultySchema);
