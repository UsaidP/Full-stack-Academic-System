import mongoose, { Schema } from "mongoose";

const facultySchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
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
    type: Schema.Types.ObjectId,
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
    type: Schema.Types.ObjectId,
    ref: "Courses",
  },
});

const Faculty = mongoose.Schema("Faculty", facultySchema);
