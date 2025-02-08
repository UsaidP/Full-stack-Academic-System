import mongoose, { Schema } from "mongoose";

const studentSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
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
  rollNumber: {
    type: String,
    required: true,
    unique: true,
  },
  department: {
    type: Schema.Types.ObjectId,
    ref: "Department",
    required: true,
  },
  dateOfBirth: {
    type: Date,
    required: true,
  },
  enrolledCourses: [
    {
      course: { type: Schema.Types.ObjectId, ref: "Course" },
      semester: { type: Schema.type.ObjectId, ref: "Semester" },
    },
  ],
  contact: {
    type: String,
    phoneNo: String,
    parentPhoneNo: String,
  },
});

export const Student = mongoose.Schema("Student", studentSchema);
